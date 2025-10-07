"use client";
import { AuthContext } from "@/context/auth-context";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [buttonPressed, setButtonPressed] = useState(false);
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setButtonPressed(true);
      await login({ username, password });
      router.push("/mdms/home");
    } catch (err) {
      setError(err);
      setButtonPressed(false)
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="rounded-2xl bg-white px-4 py-6 sm:px-8 sm:py-10 shadow-2xl w-full max-w-md">
        <div className="w-full flex justify-center items-center mb-4">
          <Link href="/">
            <Image
              src="https://mamatabd.org/images/logo.png"
              alt="Mamata BD"
              width={100}
              height={100}
              className="object-contain"
            />
          </Link>
        </div>

        <div>
          {error?.message && (
            <div className="w-full pb-2 text-red-400 text-lg">
              * {error.message}
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username Field */}
          <div>
            <label
              htmlFor="username"
              className="block text-gray-700 text-base sm:text-lg font-medium mb-1"
            >
              User Name
            </label>
            <input
              id="username"
              type="text"
              name="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              className="w-full px-4 py-3 border text-base sm:text-lg border-gray-300 rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              placeholder="Enter your username, example: 020..."
            />
            {error?.errors?.username && (
              <div className="w-full text-red-400 text-md pt-1">
                * {error?.errors?.username}
              </div>
            )}
            <div></div>
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 text-base sm:text-lg font-medium mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="w-full px-4 py-3 border text-base sm:text-lg border-gray-300 rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            />
            {error?.errors?.password && (
              <div className="w-full text-red-400 text-md pt-1">
                * {error?.errors?.password}
              </div>
            )}
          </div>

          {/* Login Button */}
          <div>
            <button
              type="submit"
              className={`w-full btn-primary-cus text-white py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-md transition duration-300 ${buttonPressed ?  'opacity-60 cursor-not-allowed pointer-events-none' : 'cursor-pointer'}`}
              disabled = {buttonPressed}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
