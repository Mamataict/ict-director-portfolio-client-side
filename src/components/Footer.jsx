"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import React, { useState } from "react";
import Image from "next/image";
import {
  faLocationDot,
  faMailBulk,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // WhatsApp number (include country code, no + or spaces)
    // const phoneNumber = "8801677880088";
    const phoneNumber = "8801627962866";

    // Format the message
    const text = `Respected Sir,%0A%0AI hope you are well.%0A%0AThis is ${name}. I wanted to share the following information:%0A%0AEmail: ${email}%0A%0AMessage:%0A${message}%0A%0AThank you for your time and consideration.%0AWith regards,%0A${name}`;

    // Redirect to WhatsApp
    const url = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(url, "_blank");
  };
  return (
    <>
      <div className="py-10 sm:py-5 px-2 md:px-[initial]">
        <div className="container m-auto
         py-10  space-y-10 ">
          {/* <div className="w-full md:w-[40%] pb-10 md:pb-[initial] space-y-2">
            <div className="text-[35px] sm:text-[40px] font-bold ">
              TOWHID AHMED
            </div>
            <div className="mt-4">
              <div className="flex gap-4">
                <Link
                  href={"https://www.facebook.com/towhid.ahmed"}
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className="text-2xl"
                    
                  />
                </Link>

                <Link
                  href={
                    "https://www.linkedin.com/in/towhidahmed/?authType=NAME_SEARCH&authToken=_hJf&locale=en_US&trk=tyah&trkInfo=clickedVertical%3Amynetwork%2CclickedEntityId%3A103409501%2CauthType%3ANAME_SEARCH%2Cidx%3A1-3-3%2CtarId%3A1461729116609%2Ctas%3Atowhid%20ahmed"
                  }
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-2xl"
                    
                  />
                </Link>
                <Link href="mailto:towhid.ahmed@gmail.com">
                  <FontAwesomeIcon
                    icon={faMailBulk}
                    className="text-2xl"
                    
                  />
                </Link>
                <Link
                  href="tel:+8801677880088"
                >
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-2xl"
                  
                />
                </Link>
              </div>
            </div>
          </div> */}
          
          <div className="w-full pb-10 md:pb-[initial]">
            <div className="border-l-[#5CB22D] border-l-3 px-3 text-4xl mb-4 ">
              Contact Info
            </div>
            <div className="space-y-3 text-lg">
              <div className="flex space-x-2">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  color="white"
                  className="mt-1"
                />
                <div>
                  “Boro-Bari”, 13, Rashid Building 1st lane, Banglabazar,
                  Chittagong.
                </div>
              </div>
              <div className="flex space-x-2">
                <FontAwesomeIcon
                  icon={faMailBulk}
                  color="white"
                  className="mt-1"
                />
                <div className="">towhid.ahmed@gmail.com</div>
              </div>
              <div className="flex space-x-2">
                <FontAwesomeIcon
                  icon={faPhone}
                  color="white"
                  className="mt-1"
                />
                <div className="">+88 01677 880088</div>
              </div>
            </div>
          </div>
          <div className="w-full ">
            <div className="border-l-[#5CB22D] border-l-3 px-3 text-4xl mb-6 ">
              Contact Form
            </div>
            <form onSubmit={handleSubmit} className=" space-y-2 max-w-[250px]">
              <div className="space-y-3">
                <label className="text-lg">Name</label>
                <input
                  type="text"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="p-1 rounded border-2 border-[#5CB22D] w-full"
                />
              </div>
              <div className="space-y-3">
                <label className="text-lg">Email</label>
                <input
                  type="text"
                  name="name"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="p-1 rounded border-2 border-[#5CB22D] w-full"
                />
              </div>
              <div className="space-y-3">
                <label className="text-lg">Message</label>
                <textarea
                  type="text"
                  name="name"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className="p-1 rounded border-2 border-[#5CB22D] w-full"
                />
              </div>
              <button className="bg-[#5CB22D]  px-3 py-1 rounded mt-2 hover:bg-white hover:text-[#5CB22D] border-2 border-[#5CB22D] cursor-pointer">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <div className="bg-white/35 py-3 px-8 sm:px-[initial]">
        <div className="container m-auto  text-[14px] text-center sm:flex sm:justify-between justify-center items-center sm:items-start">
          <div className="pb-2 sm:pb-[initial]">
            © Copyright <b>Towhid Ahmed</b>. All rights reserved.
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Footer;
