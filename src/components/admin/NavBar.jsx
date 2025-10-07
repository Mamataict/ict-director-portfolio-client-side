"use client";
import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "@/context/auth-context";
import Breadcrumb from "@/components/BreadCrumb";

const Navbar = () => {
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const wrapperRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggle = () => setIsMenuOpen((prev) => !prev);

  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menuName) => {
    setOpenMenu((prev) => (prev === menuName ? null : menuName));
  };

  const { logout, user_data } = useContext(AuthContext);

  const springTransition = {
    type: "spring",
    stiffness: 260,
    damping: 20,
  };
  const topLine = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 6 },
  };
  const midLine = {
    closed: { opacity: 1, scaleX: 1 },
    open: { opacity: 0, scaleX: 0 },
  };
  const botLine = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -6 },
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpenProfileMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const hasPermission = (permissionList) => {
    // return permissionList.some((p) => user_data?.permissions?.includes(p));
    return true;
  };

  return (
    <nav className="w-full h-[200px] lg:h-[100px] text-gray-700 relative ">
      <div className="bg-white rounded-2xl  lg:hidden my-3 p-3 relative flex justify-between">
        <div className=" flex justify-center items-center">
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

        <div className=" pt-5 px-2 ">
          <button
            onClick={toggle}
            className="relative z-50 flex flex-col justify-between w-[55px] h-[40px] cursor-pointer"
          >
            <motion.span
              className="block h-1 w-full rounded bg-gray-800 origin-center"
              variants={topLine}
              animate={isMenuOpen ? "open" : "closed"}
              transition={springTransition}
            />
            <motion.span
              className="block h-1 w-full rounded bg-gray-800 origin-center"
              variants={midLine}
              animate={isMenuOpen ? "open" : "closed"}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
            <motion.span
              className="block h-1 w-full rounded bg-gray-800 origin-center"
              variants={botLine}
              animate={isMenuOpen ? "open" : "closed"}
              transition={springTransition}
            />
          </button>
        </div>
      </div>
      <div className=" lg:h-full  flex items-center justify-between pt-4 px-3 lg:px-0">
        {/* <Link href="/mdms/home">
          <div className="text-lg font-medium flex items-center text-gray-600  space-x-2">
            <span>Dashboard</span>
            <span>/</span>
            <span className="text-gray-800">Add User</span>
          </div>
        </Link> */}

        <Breadcrumb />

        {/* User Info */}
        {user_data && (
          <div className="relative" ref={wrapperRef}>
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => setOpenProfileMenu(!openProfileMenu)}
            >
              <span className="hidden sm:block sm:text-lg font-medium">
                {user_data?.name ?? ""}
              </span>
              {user_data?.image && (
                <Image
                  src={user_data?.image ?? ""}
                  width={50}
                  height={50}
                  alt={user_data?.name ?? "My Profile"}
                  className="rounded-full w-[50px] h-[50px] object-cover"
                />
              )}
            </div>
            <div
              className={`absolute shadow rounded-xl bottom-[calc(100%-145px)] left-[calc(100%-150px)] lg:left-0 p-3
        
        overflow-hidden transition-all duration-500 ease-in-out w-[150px] ${
          openProfileMenu == true ? " opacity-100" : "w-0 opacity-0"
        }
          
           bg-white`}
            >
              <ul>
                <li className="py-2 cursor-pointer">Profile</li>
                <li
                  className="text-red-400 py-2 cursor-pointer"
                  onClick={(e) => logout()}
                >
                  Logout
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      <div
        className={`absolute lg:hidden rounded-2xl shadow-xl bg-white bottom-[calc(100%-510px)] z-[9999] px-3 sm:px-6 py-10 overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "h-[400px] opacity-100" : "max-h-0 opacity-0 "
        } w-full`}
      >
        <Link href="/home" className="block px-4 py-3  rounded mb-2">
          Dashboard
        </Link>

        {hasPermission(["role.index", "role.store"]) && (
          <div>
            <button
              onClick={() => toggleMenu("roles")}
              className="flex justify-between items-center w-full px-4 py-3  rounded"
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
              <Link href="/mdms/home/role" className="block px-2 py-2  rounded">
                All Roles
              </Link>
              )}
              {hasPermission(["role.store"]) && (
              <Link href="/mdms/home/role/new" className="block px-2 py-2  rounded">
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
              className="flex justify-between items-center w-full px-4 py-3 rounded"
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
                openMenu === "settings"
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              } pl-6 space-y-1 mt-2`}
            >
              {hasPermission(["permission.index"]) && (
                <Link href="/mdms/home/permission" className="block px-2 py-2 rounded">
                  All Permissions
                </Link>
              )}
              {hasPermission(["permission.store"]) && (
                <Link href="/mdms/home/permission/new" className="block px-2 py-2 rounded">
                  Add Permission
                </Link>
              )}
            </div>
          </div>
        )}
        {hasPermission(["user.index", "user.store"]) && (
          <div>
            <button
              onClick={() => toggleMenu("user")}
              className="flex justify-between items-center w-full px-4 py-3 rounded"
              aria-expanded={openMenu === "user"}
              aria-controls="user-submenu"
            >
              User
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`transition-transform duration-500 ${
                  openMenu === "user" ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              id="user-submenu"
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openMenu === "user"
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              } pl-6 space-y-1 mt-2`}
            >
              {hasPermission(["user.index"]) && (
                <Link href="/mdms/home/permission" className="block px-2 py-2 rounded">
                  All Permissions
                </Link>
              )}
              {hasPermission(["user.store"]) && (
                <Link href="/mdms/home/permission/new" className="block px-2 py-2 rounded">
                  Add Permission
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
