"use client";

import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import api from "@/lib/axios";
import Cookies from "js-cookie";

import { NextResponse } from "next/server";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user_data, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = Cookies.get("auth_token");
        if (token) {
          const response = await api.get(`/api/user`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUserData(response.data.data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        setUserData(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);

  const login = async (credentials) => {
    try {
      await api.get(`/sanctum/csrf-cookie`);
      const response = await api.post(`/api/login`, credentials);

      Cookies.set("auth_token", response.data.data.token, {
        expires: 7,
        path: "/",
      });

      setUserData(response.data.data.user);
      return response.data.data;
    } catch (error) {
      throw error.response?.data || "Login failed";
    }
  };

  const logout = async () => {
    try {
      const token = Cookies.get("auth_token");

      await api.post(
        `/api/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      Cookies.remove("auth_token", { path: "/" });
      setUserData(null);
      router.push("/mdms/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user_data, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
