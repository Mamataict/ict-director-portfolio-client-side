"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";

import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const springTransition = {
  type: "spring",
  stiffness: 260,
  damping: 20,
};

const smoothTransition = {
  duration: 0.5,
  ease: [0.4, 0, 0.2, 1],
};

const animationVariants = {
  open: {
    opacity: 1,
    maxHeight: 500,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  closed: {
    opacity: 0,
    maxHeight: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
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

const sidebar = {
  open: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 25,
      restDelta: 0.001,
    },
  },
  closed: {
    clipPath: "inset(0% 0% 100% 0%)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 35,
      delay: 0.15,
    },
  },
};

const menu = [
  {
    label: "Home",
    key: "#home",
    linked: true,
    children: [],
  },
  {
    label: "About",
    key: "#about",
    linked: false,
    children: [
      {
        label: "BACKGROUND & PREAMP",
        key: "#background_preamp",
        linked: true,
        children: [],
      },
      {
        label: "CAREER",
        key: "#career",
        linked: true,
        children: [],
      },
      {
        label: "ENTREPRENEURSHIPS & SOCIAL INITIATIVES",
        key: "#entrepreneurships_social_initiatives",
        linked: true,
        children: [],
      },
      {
        label: "EDUCATION",
        key: "#education",
        linked: true,
        children: [],
      },
      {
        label: "CONFERENCES & SEMINARS",
        key: "#conferences_seminars",
        linked: true,
        children: [],
      },
      {
        label: "AWARDS & ACHIEVEMENTS",
        key: "#awards_achievements",
        linked: true,
        children: [],
      },
    ],
  },
  {
    label: "Gallery",
    key: "#gallery",
    linked: true,
    children: [],
  },
  {
    label: "Blog",
    key: "#blog",
    linked: true,
    children: [],
  },

  {
    label: "Contact",
    key: "#contact",
    linked: true,
    children: [],
  },
];
const Navbar = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);

  const toggle = () => setIsMenuOpen((prev) => !prev);
  const toggleDropdown = (key) =>
    setActiveDropdown((prev) => (prev === key ? null : key));
  const toggleSubDropdown = (key) =>
    setActiveSubDropdown((prev) => (prev === key ? null : key));

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const smoothScrollTo = (element) => {
    const targetY = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: targetY - 80, // adjust for navbar height if needed
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className={`w-full fixed top-0 z-[99999]
          transition-all duration-500 ease-out  shadow-m px-3 sm:px-4 lg:px-[initial]
          ${scrolled ? "py-4 bg-white/35" : "main-nav py-6"}`}
      >
        <div className="container m-auto flex items-center justify-between h-full w-full">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`transition-all duration-500 ease-out font-semibold text-white hover:text-[#5CB22D] ${
              scrolled ? "text-3xl" : "text-4xl"
            }`}
          >
            <a
              href="#home"
              onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector("#home");
                  if (element) {
                    smoothScrollTo(element);
                  }
                
              }}
            >
              Portfolio.
            </a>
          </motion.div>

          {/* Desktop Menu */}
          <ul className="lg:flex gap-1 hidden ">
            {menu.map(({ label, key, linked, children }) => (
              <li key={key} className="relative group text-[17px] text-wrap">
                <a
                  className=" cursor-pointer p-2 flex gap-1 text-white hover:text-[#5CB22D]"
                  onMouseEnter={() => setHoveredMenu(key)}
                  onMouseLeave={() => setHoveredMenu(null)}
                  disabled={children.length === 0}
                  href={linked ? key : "#"}
                  onClick={(e) => {
                    if (linked) {
                      e.preventDefault();
                      const element = document.querySelector(key);
                      if (element) {
                        smoothScrollTo(element);
                      }
                    }
                  }}
                >
                  <div>{label}</div>
                  {children.length > 0 && (
                    <span className="transition-transform duration-500">
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={`transition-transform duration-500 ${
                          hoveredMenu === key ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  )}
                </a>

                {children.length > 0 && (
                  <ul
                    className="absolute rounded left-0 mt-0 w-48 bg-white text-black shadow-2xl px-2
                      opacity-0 translate-y-[-10px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 pointer-events-none group-hover:pointer-events-auto z-[9999999]"
                  >
                    {children.map((child, i) => (
                      <li
                        key={i}
                        className="py-[8px] text-[14px] hover:text-[#5CB22D] border-b border-b-[#e5f3e7ee] cursor-pointer"
                        onMouseEnter={() => setHoveredMenu(child.key)}
                        onMouseLeave={() => setHoveredMenu(null)}
                      >
                        <div className="flex">
                          <a
                            href={child.linked ? child.key : "#"}
                            className="w-[90%] break-words"
                            onClick={(e) => {
                              if (child.linked) {
                                e.preventDefault();
                                const element = document.querySelector(
                                  child.key
                                );
                                if (element) {
                                  smoothScrollTo(element);
                                }
                              }
                            }}
                          >
                            {child.label}
                          </a>

                          {child.children.length > 0 && (
                            <div className="w-[10%] flex justify-center items-center relative">
                              <span className="transition-transform duration-500 ">
                                <FontAwesomeIcon
                                  icon={faChevronRight}
                                  className={`transition-transform duration-500 ${
                                    hoveredMenu === child.key ? "rotate-90" : ""
                                  }`}
                                />
                              </span>

                              <ul
                                onMouseEnter={() => setHoveredMenu(child.key)}
                                onMouseLeave={() => setHoveredMenu(null)}
                                className={`absolute rounded left-[-20px] top-[32px] mt-0 w-40 bg-white text-black shadow-2xl px-2
      opacity-0 translate-y-[-10px]
      ${
        hoveredMenu === child.key
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }
      transition-all duration-500 z-[9999999]`}
                              >
                                {child.children.map((subChild, i) => (
                                  <li
                                    key={i}
                                    className="py-[8px] text-[14px] hover:text-[#5CB22D] border-b border-b-[#e5f3e7ee] cursor-pointer"
                                  >
                                    {subChild.label}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <div className="lg:hidden py-2">
            <button
              onClick={toggle}
              className="relative z-50 flex flex-col justify-between w-8 h-6 cursor-pointer"
            >
              <motion.span
                className="block h-1 w-full rounded bg-white origin-center"
                variants={topLine}
                animate={isMenuOpen ? "open" : "closed"}
                transition={springTransition}
              />
              <motion.span
                className="block h-1 w-full rounded bg-white origin-center"
                variants={midLine}
                animate={isMenuOpen ? "open" : "closed"}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              <motion.span
                className="block h-1 w-full rounded bg-white origin-center"
                variants={botLine}
                animate={isMenuOpen ? "open" : "closed"}
                transition={springTransition}
              />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.aside
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebar}
            className={`left-0 w-full transition-all ease-in-out duration-500 fixed ${
              scrolled ? "top-[70px]" : "top-[85px]"
            }  lg:hidden bg-white shadow-xl z-[999999] overflow-y-auto border-t-[#917373] py-8 px-4 sm:px-5 lg:px-[initial] sidebar-scroll`}
          >
            <motion.ul
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex flex-col gap-2 text-sm container m-auto "
            >
              {menu.map((item) => (
                <li key={item.key} className="flex flex-col  ">
                  <button
                    className="flex justify-between items-center py-1 text-[20px] text-left"
                    onClick={() => toggleDropdown(item.key)}
                  >
                    <a
                      href={item.linked ? item.key : "#"}
                      onClick={(e) => {
                        if (item.linked) {
                          e.preventDefault();
                          const element = document.querySelector(item.key);
                          if (element) {
                            smoothScrollTo(element);
                          }
                        }
                      }}
                    >
                      {item.label}
                    </a>

                    {item.children.length > 0 && (
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={`transition-transform duration-300 ${
                          activeDropdown === item.key ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>
                  {item.children.length > 0 && (
                    <ul
                      className={`overflow-hidden transition-all duration-500 ease-in-out
    ${
      activeDropdown === item.key
        ? "max-h-[600px] opacity-100 py-3"
        : "max-h-0 opacity-0"
    }
  `}
                    >
                      {item.children.map((sub, i) => (
                        <li
                          key={i}
                          className="py-1 pl-4 last:border-none hover:text-[#0F6939] text-[18px] cursor-pointer"
                        >
                          <div
                            className="flex"
                            onClick={() => toggleSubDropdown(sub.key)}
                          >
                            <div className="w-[90%]">
                              <a
                                className="block"
                                href={sub.linked ? sub.key : "#"}
                                onClick={(e) => {
                                  if (sub.linked) {
                                    e.preventDefault();
                                    const element = document.querySelector(
                                      sub.key
                                    );
                                    if (element) {
                                      smoothScrollTo(element);
                                    }
                                  }
                                }}
                              >
                                {sub.label}
                              </a>
                            </div>
                            <div className="w-[10%] flex justify-center items-center">
                              {sub.children.length > 0 && (
                                <FontAwesomeIcon
                                  icon={faChevronRight}
                                  className={`transition-transform duration-300 ${
                                    activeSubDropdown === sub.key
                                      ? "rotate-90"
                                      : ""
                                  }`}
                                />
                              )}
                            </div>
                          </div>

                          {sub.children.length > 0 && (
                            <ul
                              className={`overflow-hidden transition-all duration-500 ease-in-out 
    ${
      activeSubDropdown === sub.key
        ? "h-auto opacity-100 py-3"
        : "max-h-0 opacity-0"
    }
  `}
                            >
                              {sub.children.map((subItem, i) => (
                                <li
                                  key={i}
                                  className="py-2 pl-4 last:border-none hover:text-[#0F6939] cursor-pointer"
                                >
                                  <div className="flex">
                                    <div className="w-[90%]">
                                      {subItem.label}
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </motion.ul>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
