"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";

import {
  faBlog,
  faChevronRight,
  faHome,
  faImage,
  faPerson,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import { AnimatePresence, motion } from "framer-motion";

const menu = [
  {
    label: "Home",
    icon: faHome,
    key: "home",
    linked: true,
    children: [],
  },
  {
    label: "About",
    icon: faPerson,
    key: "about",
    linked: true,
    children: [
      // {
      //   label: "SPECILITIES",
      //   key: "specialities",
      //   linked: true,
      //   children: [],
      // },
      // {
      //   label: "BACKGROUND & PREAMP",
      //   key: "background_preamp",
      //   linked: true,
      //   children: [],
      // },
      // {
      //   label: "CAREER",
      //   key: "career",
      //   linked: true,
      //   children: [],
      // },
      // {
      //   label: "ENTREPRENEURSHIPS & SOCIAL INITIATIVES",
      //   key: "entrepreneurships_social_initiatives",
      //   linked: true,
      //   children: [],
      // },
      // {
      //   label: "EDUCATION",
      //   key: "education",
      //   linked: true,
      //   children: [],
      // },
      // {
      //   label: "CONFERENCES & SEMINARS",
      //   key: "conferences_seminars",
      //   linked: true,
      //   children: [],
      // },
      // {
      //   label: "AWARDS & ACHIEVEMENTS",
      //   key: "awards_achievements",
      //   linked: true,
      //   children: [],
      // },
    ],
  },
  {
    label: "Gallery",
    icon: faImage,
    key: "gallery",
    linked: true,
    children: [],
  },
  {
    label: "Blog",
    icon: faBlog,
    key: "blog",
    linked: true,
    children: [],
  },

  {
    label: "Contact",
    icon: faPhone,
    key: "contact",
    linked: true,
    children: [],
  },
];
const Navbar = ({ onClickedMenu, selectedMenu }) => {
  const [hoveredMenu, setHoveredMenu] = useState(null);

  return (
    <>
      <div
        className={`w-full lg:w-[100px] fixed bottom-0 lg:top-1/2 lg:translate-y-[-50%] lg:right-0 z-[99999]
          transition-all duration-500 ease-out shadow-2xl shadow-[#467cc1] lg:shadow-none px-3 sm:px-4 lg:px-[initial]
          bg-white border-t-1 border-t-[#eaeac658] lg:border-none lg:bg-transparent pb-4 lg:pb-0
          `}
      >
        <div className="container m-auto flex items-center justify-between h-full w-full">
        
          <ul className="lg:block flex justify-between w-full space-y-2 lg:space-y-5 lg:pl-10">
            {menu.map(({ label, icon, key, linked, children }) => (
              <li key={key} className="relative group text-[20px] h-12 w-12 mx-auto">
                <div
                  className={`cursor-pointer absolute right-0 lg:right-3 top-2.5 transform-all duration-500 hover:bg-[#467cc1] rounded-full py-2 px-3 flex gap-1 bg-[#EEEEEE] shadow-2xl hover:text-white `}
                  onMouseEnter={() => setHoveredMenu(key)}
                  onMouseLeave={() => setHoveredMenu(null)}
                  disabled={children.length === 0}
                  onClick={(e) => {
                    if (linked) {
                      e.preventDefault();
                      onClickedMenu(key);
                    }
                  }}
                >

                  {hoveredMenu == key && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="overflow-hidden hidden lg:block"
                    >
                      {label}
                    </motion.div>
                  )}

                  <div className="text-center">
                    <FontAwesomeIcon
                      className={`m-auto h-5.5 w-5.5 ${selectedMenu == key ? 'text-[#467cc1] lg:text-white' : ''}`}
                      icon={icon}
                    />
                  </div>
                 
                </div>

                {children.length > 0 && (
                  <ul
                    className={`absolute bottom-0 lg:right-10 lg:top-13 mt-0 w-48 space-y-2 h-[500px] lg:h-[800px] overflow-y-auto text-black px-2
                      opacity-0 ${hoveredMenu == key ? 'opacity-100 ' : 'opacity-0 '} translate-y-[-10px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 pointer-events-none group-hover:pointer-events-auto z-[9999999]`}
                  >
                    {children.map((child, i) => (
                      <li
                        key={i}
                        className=" text-[14px] hover:text-[#467cc1] cursor-pointer rounded-3xl shadow-2xl px-3 py-3 bg-white"
                        onMouseEnter={() => setHoveredMenu(child.key)}
                        onMouseLeave={() => setHoveredMenu(null)}
                      >
                        <div className="flex">
                          <div
                            className="w-[90%] break-words"
                            onClick={(e) => {
                              if (child.linked) {
                                onClickedMenu(child.key);
                              }
                            }}
                          >
                            {child.label}
                          </div>

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
                                    className="py-[8px] text-[14px] hover:text-[#467cc1] border-b border-b-[#e5e7f3ee] cursor-pointer"
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

        </div>
      </div>

    </>
  );
};

export default Navbar;
