"use client";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { AuthContext } from "@/context/auth-context";

const SideBar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menuName) => {
    setOpenMenu((prev) => (prev === menuName ? null : menuName));
  };

  const { user_data } = useContext(AuthContext);

  const hasPermission = (permissionList) => {
    return permissionList.some((p) => user_data?.permissions?.includes(p));
  };

  return (
    <aside className="hidden lg:flex w-[280px] justify-center text-gray-700 h-full">
      <div className="w-[90%] shadow-xl text-xl rounded-[2rem] my-[70px] min-h-[490px] py-2 bg-white">
        {/* Logo */}
        <div className="h-[100px] flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/">
              <Image
                src="https://mamatabd.org/images/logo.png"
                alt="Mamata BD"
                width={80}
                height={80}
                className="transition-transform duration-500"
              />
            </Link>
          </motion.div>
        </div>

        <Link
          href="/mdms/home"
          className="block px-4 py-3 admin-sidebar-menu rounded mb-2"
        >
          Dashboard
        </Link>

        {hasPermission(["role.index", "role.store"]) && (
          <div>
            <button
              onClick={() => toggleMenu("roles")}
              className="flex justify-between items-center w-full px-4 py-3 admin-sidebar-menu rounded"
              aria-expanded={openMenu === "roles"}
              aria-controls="roles-submenu"
            >
              Role
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`transition-transform duration-500 ${
                  openMenu === "roles" ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              id="roles-submenu"
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openMenu === "roles"
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              } pl-6 space-y-1 mt-2`}
            >
              {hasPermission(["role.index"]) && (
                <Link href="/mdms/home/role"
                  className="block px-2 py-2 admin-sidebar-menu rounded"
                >
                  All Roles
                </Link>
              )}
              {hasPermission(["role.store"]) && (
                <Link href="/mdms/home/role/new"
                  className="block px-2 py-2 admin-sidebar-menu rounded"
                >
                  Add Role
                </Link>
              )}
            </div>
          </div>
        )}

        {hasPermission(["permission.index", "permission.store"]) && (
          <div>
            <button
              onClick={() => toggleMenu("permission")}
              className="flex justify-between items-center w-full px-4 py-3 admin-sidebar-menu rounded"
              aria-expanded={openMenu === "permission"}
              aria-controls="permission-submenu"
            >
              Permission
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`transition-transform duration-500 ${
                  openMenu === "permission" ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              id="permission-submenu"
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openMenu === "permission"
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              } pl-6 space-y-1 mt-2`}
            >
              {hasPermission(["permission.index"]) && (
                <Link href="/mdms/home/permission"
                  className="block px-2 py-2 admin-sidebar-menu rounded"
                >
                  All Permissions
                </Link>
              )}
              {hasPermission(["permission.store"]) && (
                <Link href="/mdms/home/permission/new"
                  className="block px-2 py-2 admin-sidebar-menu rounded"
                >
                  Add Permission
                </Link>
              )}
            </div>
          </div>
        )}

        {hasPermission(["user.index", "user.store"]) && (
          <div>
            <button
              onClick={() => toggleMenu("user_settings")}
              className="flex justify-between items-center w-full px-4 py-3 admin-sidebar-menu rounded"
              aria-expanded={openMenu === "user_settings"}
              aria-controls="settings-submenu"
            >
              User
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`transition-transform duration-500 ${
                  openMenu === "user_settings" ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              id="user_settings-submenu"
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openMenu === "user_settings"
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              } pl-6 space-y-1 mt-2`}
            >
              {hasPermission(["user.index"]) && (
                <Link href="/mdms/home/user"
                  className="block px-2 py-2 admin-sidebar-menu rounded"
                >
                  All User
                </Link>
              )}
              {hasPermission(["user.store"]) && (
                <Link href="/mdms/home/user/new"
                  className="block px-2 py-2 admin-sidebar-menu rounded"
                >
                  Add User
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default SideBar;
