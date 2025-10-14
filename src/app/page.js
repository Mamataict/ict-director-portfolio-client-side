/* eslint-disable react/no-unescaped-entities */
"use client";
import Navbar from "@/components/NavBar";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  faCircleDot,
  faGraduationCap,
  faMailBulk,
  faSnowflake,
  faStar,
  faStarOfLife,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "@/components/Footer";
import Link from "next/link";
import { faFacebook, faLine, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Typewriter from "typewriter-effect";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Young Entrepreneur",
  "Social Worker",
  "Young Leader",
  "Passionate Chef",
  "Trainer",
  "Organizer",
  "Musician",
  "Visual Artist",
  "Branding Consultant",
];

const contentAnimation = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
  closed: {
    opacity: 0,
    y: -2000,
    transition: {
      duration: 0,
    },
  },
};

export default function Home() {
  const [openMore, setOpenMore] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("home");

  const clickedMenu = (menuName) => {
    setSelectedMenu(menuName);
  };

  const experiences = [
    {
      side: "left",
      title: "Director at MAMATA (www.mamatabd.org)",
      date: "Jul 2018 – Present",
      description: `Working with a vision of "A Health hazard free and poverty alleviated Bangladesh upholding Basic
Human Rights".`,
      points: [
        "Director of Information, Communication & Technology (ICT) Department.",
        "Director (Program & Project)",
        "Supervising and implementing all the projects and programs.",
        "Working as a core member of the management to ensure growth of the organization.",
        "Establishing the positive branding of the organization’s image and activities.",
        "Supervising virtual media operations, PR and engagements",
      ],
    },
    {
      side: "right",
      title: "Deputy Director at MAMATA (www.mamatabd.org)",
      date: "Aug 2015 – Jun 2018",
      description:
        'Mamata is a NGO. Working with a vision of "A Health hazard free and poverty alleviated Bangladesh upholding basic human rights".',
      points: [
        "Heading Information, Communication & Technology (ICT) department.",
        "Heading the program unit.",
        "Supervising virtual media operations, online communication, software management, all other digital platforms.",
      ],
    },
    {
      side: "left",
      title: "Bangladesh Brand Forum, In-Charge, Operations. Dhaka",
      date: "Nov 2011 – Jul 2013",
      points: [
        "Developing strategies for events and activations.",
        "Managing outdoor events and activities.",
        "Coordinating with the stakeholders.",
        "Supervising administrative responsibilities.",
        "Coordination with suppliers and vendors.",
      ],
    },
    {
      side: "right",
      title: "Projects handled as the ‘Event Manager’",
      date: "",
      points: [
        "Communication Summit 2011",
        "World Marketing Summit 2012",
        "Best Brand Award.",
        "IFC Cleaner Production Marketing Campaign.",
      ],
    },
    {
      side: "left",
      title: "Account Executive at Interspeed Activation Ltd (Dhaka)",
      date: "May 2011 – Aug 2011 ",
      description:
        "Client service and supporting outdoor events as a member of activation team. Also, coordinating with the vendors of related works.",
    },
    {
      side: "right",
      title: "Internship at Concito PR Dhaka",
      date: "Aug 2010 – Nov 2010",
      points: [
        "Working on Singapore Tourism Board’s public relations affairs.",
        "Preparing checklist on news coverage and articles on daily basis.",
      ],
    },
    {
      side: "left",
      title: "International Conference on Knowledge Globalization 2010 Dhaka",
      date: "Apr 2010 – May 2010",
      points: [
        "Worked as one of the organizers from the student body of North South University.",
        "Served as a team-leader for volunteers during the conference.",
        "Also, supported the conference as the ‘Master of Ceremony’ in inauguration and closing ceremonies.",
      ],
    },
    {
      side: "right",
      title: "11th South Asian Games 2010 (Formerly known as SAF GAMES) Dhaka",
      date: "Jan 2010 – Feb 2010",
      points: [
        "Trained, facilitated and managed a brilliant student pool of volunteers and liaison officers",
        "Worked as a protocol officer of Indian Sports Minister, Mr. M. S. Gill during the opening ceremony of the games.",
        "Also, supported as the Protocol Officers’ Coordinator during the games.",
      ],
    },
    {
      side: "left",
      title:
        "Student Worker (Coordinator) at Career & Professional Development Services Department, North South University, Dhaka.",
      date: "Aug 2008 – Oct 2008",
      points: [
        "Support to North South University to organize National Career Fair 2008.",
      ],
    },
    {
      side: "right",
      title: "1st Non-Resident Bangladeshi (NRB) Conference-2007 Dhaka.",
      date: "Sep 2007 – Dec 2007",
      points: [
        "Contributed as an organizer to have the conference for the very first time in Bangladesh.",
        "Support on Public Relations, Media and Volunteers.",
      ],
    },
    {
      side: "left",
      title: "National Career Fair 2007 (NSU) - Student Aide to NSU Dhaka.",
      date: "Jun 2007 – Aug 2007",
      points: [
        "Support on public relations and media.",
        "Support on sponsorship management.",
        "Stall management for invited companies, brands and organizations.",
        "Volunteers management.",
      ],
    },
  ];
  const entrepreneurship_social_init = [
    {
      side: "left",
      title: "CLUB-PRO Café & Ice-cream (Chittagong)",
      date: "February 2014 – December 2018",
      role: "Founder and Owner",
      location:
        "Shop# 207, Highway Plaza, 1st Floor, Lalkhan Bazar, Chittagong.",
      description: `Also, he is the founder of “CLUB-PRO Café & Ice cream”, the very 1st European Coffee shop
at Chattogram to serve authentic coffee, western foods and international ice-creams. The
café often hosted free meals for the unprivileged children of the society to add happiness
and smiles in their faces and to encourage others to care and support the underprivileged &
street children of the society.`,
    },
    {
      side: "right",
      title: "Promoton Media & Communication (Chittagong)",
      date: "January 2013 – June 2015",
      role: "Founder",
      link: "www.promotonbd.com",
      description: `Towhid Ahmed founded a marketing & public relations’ agency in 2013 “Promoton” to bring
values and importance of branding for organizations and companies through providing
several services including advertising, public relations, media buying, consultancy, event
management etc. as a part of FREELANCING activity.`,
    },
  ];

  const education = [
    {
      side: "left",
      title: "EMBA",
      date: "July 2022",
      institution: "Mastermind Business School",
      location: "UK",
    },
    {
      side: "right",
      title:
        "Bachelors in Business Administration (BBA) with major in Marketing.",
      date: "June 2005 – December 2010",
      institution: "North South University (NSU)",
      location: "Dhaka",
    },
    {
      side: "left",
      title:
        "Higher Secondary Certificate (HSC) under Chittagong Education Board.",
      date: "July 2004",
      institution: "Chittagong Cantonment Public College.",
      location: "Chittagong",
    },
  ];

  const conferences_seminars = [
    "12th Social Business Academia Conference & SocialTech Summit 2025, Japan",
    "United Nations Responsible Business and Human Rights Forum, 2024 Thailand",
    "South Asia’s- Financial Inclusion Training (S-FIT)- 2024, Dubai, U.A.E",
    "Digital Marketing Summit 2019 Dhaka",
    "Global Social Business Summit 2018 Germany",
    "Retail Congress 2018 Dhaka",
    "Exposure & Study tour program on Microfinance Development in China 2016 China",
    "Exposure visit & Study tour program 2016 Vietnam",
    "Leadership Summit 2015 Dhaka",
    "June 2013 Social Business Day 2013 Dhaka",
    "June 2012 Social Business Day 2012 Dhaka",
    "World Marketing Summit 2012 Dhaka",
    "Communication Summit 2011 Dhaka",
    "International Conference on Knowledge Globalization- 2010 Dhaka",
    "National Leadership Development Seminar 2009 Sylhet",
    "Lions Clubs International Convention 2008 Thailand",
    "March 2008 AIESEC- Asia Pacific eXchange and Leadership Development Seminar (APXLDS) Japan",
    "June 2006 AIESEC- National Leadership Development Seminar Manikgonj",
    "September 2005 AIESEC- National Leadership Development Seminar Sylhet",
    "January 2004 International LEO Youth Camp Cox’sBazar",
  ];

  const awards_achievements = [
    {
      side: "left",
      title:
        "Founding President, Lions Club of Chattogram Ambassador. Lions Clubs International; District 315- B4, Bangladesh",
      dates: "November 2021 – Present",
      description: "",
    },
    {
      side: "right",
      title:
        "Director, Junior Chamber International (JCI) Chittagong Cosmopolitan",
      dates: "February 2015 – January 2016",
      description: "",
    },
    {
      side: "left",
      title:
        "Director, Alumni Association of North South University (AANSU) Bangladesh",
      dates: "February 2015 – Present",
      description: "",
    },

    {
      side: "right",
      title:
        "11th South Asian Games 2010 (Formerly known as SAF GAMES) Bangladesh",
      dates: "December 2009 – February 2010",
      description:
        "Trained and managed the 50 member Protocol Officers team to provide hospitality to the international dignitaries of South Asian Games 2010, Dhaka.",
    },
    {
      side: "left",
      title: "National Support Team–Expansion, AIESEC International, Dhaka",
      dates: "September 2008 – May 2009",
      description:
        "Responsible for expanding AIESEC locally. Selected, evaluated, and determined possible universities that could be added to AIESEC network as per AIESEC International rules and systems.",
    },
    {
      side: "right",
      title: "Intellectual & Integrated Marketing Strategy Team [MSTi2] Dhaka",
      dates: "May 2008 – July 2008",
      description:
        "Led the five-member team naming ‘MSTi2’ from North South University which secured the ‘Órder of Merit’ certificate in the MAA Academic Challenge-2008 organized by Marketing Agencies Association Worldwide (MAAW).",
    },
    {
      side: "left",
      title:
        "Vice President, Department of Communication – AIESEC in North South University Dhaka",
      dates: "May 2007 – April 2008",
      description:
        "Facilitation/management of the common vision and associated initiatives that allowed the chapter to increase its performance. Leading a team of 50 dynamic members to activate leadership through social impact. Core responsibility was to manage the department of communication.",
    },
    {
      side: "right",
      title:
        "2nd Vice President -- LEO Club Of CTG MAMATA (LEO CLUBS INTERNATIONAL DISTRICT-315-B4) Chittagong",
      dates: "April 2004- March 2005",
      description:
        "Had been providing important suggestions and decisions for the SOCIAL WORKS of LEO clubs which are specially- Blood donation, Blood grouping, Eye-test campaign, Tree plantation.",
    },
    {
      side: "left",
      title:
        "Treasurer -- LEO Club Of CTG MAMATA (LEO CLUBS INTERNATIONAL DISTRICT-315-B4) Chittagong",
      dates: "April 2003- March 2004",
      description:
        "Had control over the whole financial transactions of the club and had to collect the club dues from the members and the directors.",
    },
  ];

  return (
    <div className="relative min-h-screen">
      <Navbar onClickedMenu={clickedMenu} selectedMenu={selectedMenu} />

      <AnimatePresence>
        {selectedMenu && (
          <>
            {selectedMenu === "home" && (
              <div className="h-fit w-full ">
                <motion.section
                  key={selectedMenu}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={contentAnimation}
                  className="bg-white min-h-screen px-2 lg:px-20"
                >
                  <div className="flex justify-center overflow-hidden items-center min-h-[100vh] pb-[90px] lg:pb-0 px-3 sm:px-4 lg:px-[initial]">
                    <div className="container m-auto flex flex-col lg:flex-row justify-center items-center lg:space-x-2">
                      <div className="flex justify-center items-center lg:w-[40%]">
                        <div className="flex justify-center py-6 items-center">
                          <div className="relative p-[4px] overflow-hidden rotate-border w-full sm:w-[350px] lg:w-[300px] h-auto mx-auto">
                            <div className="absolute inset-0 conic-rotate"></div>
                            <div className="relative overflow-hidden">
                              <Image
                                src="/images_cus/profile_pic/me-new-min.png"
                                alt="Towhid Ahmed"
                                width={300}
                                height={300}
                                className="w-full h-full object-contain bg-white"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-start items-center lg:w-[60%] lg:pr-8 ">
                        <div className="space-y-2 sm:space-y-4">
                          <div className="text-4xl sm:text-5xl font-extrabold ">
                            Towhid Ahmed
                          </div>
                          <div className="text-2xl sm:text-4xl font-bold flex">
                            
                            <div className="my-auto h-full w-6">
                            <div className="w-full h-1 bg-black">
                            </div>
                            </div>
                            <div className="ml-1 text-[#467cc1]">
                              <Typewriter
                                options={{
                                  strings: roles,
                                  autoStart: true,
                                  loop: true,
                                  delay: 75,
                                  deleteSpeed: 50,
                                  pauseFor: 1500,
                                }}
                              />
                            </div>
                          </div>
                          <div className="text-md sm:text-lg ">
                            His goal is to integrate social development of
                            Bangladesh with business, social initiatives,
                            technology based entrepreneurships and knowledge
                            development. He invests his thoughts, ideas and
                            knowledge and expertise to help the society to
                            become a better place for living.
                          </div>

                          <div className="flex sm:gap-3 mt-[30px] sm:mt-[40px] flex-wrap gap-2">
                            <Link
                              href="/files_cus/Towhid-Ahmed.pdf"
                              className="bg-[#467cc1] text-white text-[14px] sm:text-lg rounded-2xl px-2 sm:px-3 py-2.5 sm:py-2 shadow-2xl shadow-[#23519E] font-semibold shadow-glow"
                              target="_blank"
                              referrerPolicy="no-referrer"
                            >
                              Download CV
                            </Link>

                            <Link
                              href={
                                "https://www.linkedin.com/in/towhidahmed/?authType=NAME_SEARCH&authToken=_hJf&locale=en_US&trk=tyah&trkInfo=clickedVertical%3Amynetwork%2CclickedEntityId%3A103409501%2CauthType%3ANAME_SEARCH%2Cidx%3A1-3-3%2CtarId%3A1461729116609%2Ctas%3Atowhid%20ahmed"
                              }
                              target="_blank"
                              className="rounded-full border-[#467cc1] border-2 flex justify-center items-center p-2 sm:p-3"
                            >
                              <FontAwesomeIcon
                                icon={faLinkedin}
                                className="text-[#467cc1] text-xl"
                              />
                            </Link>
                            <Link
                              href={"https://www.facebook.com/towhid.ahmed"}
                              className="rounded-full border-[#467cc1] border-2 flex justify-center items-center p-2 sm:p-3"
                              target="_blank"
                            >
                              <FontAwesomeIcon
                                icon={faFacebook}
                                className="text-[#467cc1] text-xl"
                              />
                            </Link>
                            <Link
                              href="mailto:towhid.ahmed@gmail.com"
                              className="rounded-full border-[#467cc1] border-2 flex justify-center items-center p-2 sm:p-3"
                            >
                              <FontAwesomeIcon
                                icon={faMailBulk}
                                className="text-[#467cc1] text-md"
                              />
                            </Link>
                            {/* <Link
                              href="tel:+8801677880088"
                              className="rounded-full border-[#467cc1] border-2 flex justify-center items-center p-2 sm:p-3"
                            >
                              <FontAwesomeIcon
                                icon={faPhone}
                                className="text-[#467cc1] text-xl"
                              />
                            </Link> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.section>
              </div>
            )}

            {selectedMenu === "about" && (
              <div className="h-fit w-full">
                <motion.section
                  key={selectedMenu}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={contentAnimation}
                  className="bg-white min-h-screen px-2 lg:px-20 pb-[70px] lg:pb-0"
                >
                  <div className="container m-auto py-6 sm:py-12">
                    <div className="text-3xl sm:text-4xl font-extrabold relative w-fit pb-2">
                      Specialities
                      <span className="absolute bottom-0 left-0 h-[2px] bg-[#467cc1] w-25"></span>
                    </div>
                    <div className="lg:flex py-7 space-y-10 lg:space-y-0">
                      <div className="lg:w-[50%] space-y-5 ">
                        <div className="flex space-x-3 ">
                          <FontAwesomeIcon
                            icon={faSnowflake}
                            className="text-[#467cc1] text-lg sm:text-xl my-auto"
                          />
                          <div className=" text-xl sm:text-2xl">
                            Project Management.
                          </div>
                        </div>
                        <div className="flex space-x-3 ">
                          <FontAwesomeIcon
                            icon={faSnowflake}
                            className="text-[#467cc1] text-lg sm:text-xl my-auto"
                          />
                          <div className=" text-xl sm:text-2xl">
                            Training & Facilitation.
                          </div>
                        </div>
                        <div className="flex space-x-3 ">
                          <FontAwesomeIcon
                            icon={faSnowflake}
                            className="text-[#467cc1] text-lg sm:text-xl my-auto"
                          />
                          <div className=" text-xl sm:text-2xl">
                            Digital Marketing.
                          </div>
                        </div>
                        <div className="flex space-x-3 ">
                          <FontAwesomeIcon
                            icon={faSnowflake}
                            className="text-[#467cc1] text-lg sm:text-xl my-auto"
                          />
                          <div className=" text-xl sm:text-2xl">
                            Advertising.
                          </div>
                        </div>
                        <div className="flex space-x-3 ">
                          <FontAwesomeIcon
                            icon={faSnowflake}
                            className="text-[#467cc1] text-lg sm:text-xl my-auto"
                          />
                          <div className=" text-xl sm:text-2xl">
                            Event Management & Activation.
                          </div>
                        </div>
                        <div className="flex space-x-3 ">
                          <FontAwesomeIcon
                            icon={faSnowflake}
                            className="text-[#467cc1] text-lg sm:text-xl my-auto"
                          />
                          <div className=" text-xl sm:text-2xl">
                            Marketing and Management consultancy.
                          </div>
                        </div>
                        <div className="flex space-x-3 ">
                          <FontAwesomeIcon
                            icon={faSnowflake}
                            className="text-[#467cc1] text-lg sm:text-xl my-auto"
                          />
                          <div className=" text-xl sm:text-2xl">
                            Information & Communication Technology (ICT).
                          </div>
                        </div>
                        <div className="flex space-x-3 ">
                          <FontAwesomeIcon
                            icon={faSnowflake}
                            className="text-[#467cc1] text-lg sm:text-xl my-auto"
                          />
                          <div className=" text-xl sm:text-2xl">
                            Video editing/production.
                          </div>
                        </div>
                        <div className="flex space-x-3 ">
                          <FontAwesomeIcon
                            icon={faSnowflake}
                            className="text-[#467cc1] text-lg sm:text-xl my-auto"
                          />
                          <div className=" text-xl sm:text-2xl">
                            Creative designs.
                          </div>
                        </div>
                      </div>
                      <div className="lg:w-[50%] flex justify-center items-center ">
                        <Image
                          src="/images_cus/me/7.jpg"
                          alt="Towhid Ahmed"
                          width={80}
                          height={80}
                          className=" w-[450px] lg:w-[300px] h-auto object-contain md:rounded-br-3xl md:rounded-tl-3xl"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="container m-auto py-6 lg:py-12">
                    <div className="text-3xl sm:text-4xl font-extrabold relative w-fit pb-2">
                      Background & Preamp
                      <span className="absolute bottom-0 left-0 h-[2px] bg-[#467cc1] w-25"></span>
                    </div>
                    <div>
                      <motion.div
                        layout
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="pt-7 pb-3 leading-relaxed text-justify"
                      >
                        <div className="lg:flex lg:justify-between lg:space-x-15 mb-5 ">
                          <div className="mb-3 lg:mb-0">
                            <b>TOWHID AHMED</b> is the only son of Rafique
                            Ahamed and one of the grand-sons of Late Bazal Ahmed
                            Swadagar, one of the prominent industrialists of
                            1960’s and a great contributor of Chittagong.
                            Rafique Ahamed is considered as an eminent
                            personality of port city Chittagong for his social
                            works, philanthropic initiatives, businesses, social
                            networks, charity and remarkable qualities and
                            public speaking abilities. Throughout his life, he
                            dedicated himself for social causes and development
                            and thus, founded a Non-Government Organization
                            (NGO) named “MAMATA” in 1983. He's the eldest son of
                            Late Bazal Ahmed Swadagar, the proud owner of
                            BANGLADESH RICE MILLS and Industries of the then
                            East Pakistan.
                          </div>

                          <Image
                            src="/images_cus/me/with-father.jpg"
                            alt="Towhid Ahmed"
                            width={80}
                            height={80}
                            className="w-[400px] sm:w-[500px] lg:w-[400px] h-auto object-contain"
                          />
                        </div>

                        <div>
                          Rafique Ahamed received the prestigious Ekushey Podok
                          for his outstanding contribution in Socioeconomic
                          Development in Bangladesh. Mr. Ahamed is also a Life
                          member of Lions Clubs International and became the
                          proud ‘District Governor’ of Lions Clubs Intl.
                          District 315 -B4 in 2003. He and his organization
                          MAMATA is the receiver of thirteen (16) National
                          Awards which includes "Best Social Worker", "Best
                          Organization", “YUNESCO AWARD 1992”, “Best
                          Microfinance Institution” Award by Citi Foundation”
                          etc. and many international awards including “Melvin
                          Jones-Fellowship”. Following the roots and paths of
                          father and grand-father, Towhid Ahmed also involved
                          himself in several extra-curricular, social and youth
                          driven activities since his high school period. He was
                          an active member, Executive Committee member, Director
                          and office bearer of LEO Clubs International: District
                          315-B4, AIESEC (World’s largest student organization
                          with exchange program), North South University Social
                          Services Club (NSUSSC), Junior Chamber International
                          (JCI) and Alumni Association of North South University
                          (AANSU). Towhid Ahmed found his keen interest in
                          Social Business models & Entrepreneurships, Knowledge
                          Sharing, Marketing & Communication since his
                          university period and thus involved himself at several
                          national and global case competitions and merit
                          programs and achieved “Order of Merit” at Global
                          Academic Challenge 2008 organized by Marketing
                          Agencies Associations Worldwide (MAAW). After
                          completing graduation from North South University, he
                          started his career at PR, Communication and Marketing
                          Agencies. He was an active and Organizing Committee
                          member of the “Social Business Forum-2012” and “Social
                          Business Forum 2013” hosted at North South University.
                          <div className="lg:flex lg:justify-between lg:space-x-5 ">
                            <Image
                              src="/images_cus/me/IMG_9150.jpg"
                              alt="Towhid Ahmed"
                              width={80}
                              height={80}
                              className="w-[400px] sm:w-[500px] lg:w-[350px] h-auto object-contain my-4"
                            />
                            <div className="mb-3 lg:mb-0">
                              A notable feature of Towhid Ahmed is his
                              connection and involvements with the most
                              prominent public and private universities of
                              Bangladesh including Chittagong University,
                              Institute of Business Administration (IBA), Dhaka
                              University, North South University, Brac
                              University, East West University, American
                              International University-Bangladesh, Premier
                              University, East Delta University, United
                              International University and University of Liberal
                              Arts and Science for Volunteer Development
                              programs, Youth Programs and Training
                              Facilitations. He trained, facilitated and managed
                              a brilliant pool of volunteers and liaison
                              officers for 11th South Asian Games (Formerly
                              known as SAF Games) Dhaka 2010 as a Trainer and
                              Facilitator of ‘Volunteer Management
                              Sub-Committee’ and also trained and developed
                              volunteers and protocol officers for 1 st World
                              Marketing Summit 2012 that was held in Dhaka. In
                              the year 2015, Towhid Ahmed got associated with
                              development sector and joined MAMATA as a part of
                              its Core Management Team.
                            </div>
                          </div>
                          MAMATA, very renowned in Bangladesh, is a social and
                          non-government organization committed to
                          socio-economic developments, health care services,
                          poverty alleviation and livelihood improvement of the
                          disadvantaged people of the society. MAMATA, over the
                          period of 4 decades, has gradually expanded it's
                          activities in multi sectoral socioeconomic development
                          programs including TB and Malaria Control Program in
                          Bangladesh, Microfinance, Health Care Services
                          including Maternity and Child health care, Education
                          for underprivileged children and section of the
                          society, ensuring
                          {openMore && (
                            <>
                              pure drinking water and sanitation, Prevention of
                              HIV/AIDS, Adolescents Health and Agriculture,
                              Livestock & Fisheries, Women Workers Rights,
                              Gender, Human Rights, Child Rights , Improvement
                              of livelihood of Garments/RMG Workers. In an era
                              where the world needs progressive future
                              generation, Towhid Ahmed believes that children
                              are the foundation of every nation’s growth and
                              development aspirations, and must be at the center
                              of any development initiatives including Right to
                              Education and Proper Health-care facilities. Under
                              the leadership and supervision of Mr. Towhid
                              Ahmed, Mamata currently runs many programs and
                              projects targeting Health care and Education
                              sector. Programs and projects to be mentioned are
                              “Mamata Health Program” and “Mamata Education
                              Program”, “Mamata Sishu Surrokkha Kormosuchi”,
                              “Shuchala”, “Health Care Services Delivery Project
                              (HCSDP- CCPP)” with the objective of empowering
                              underprivileged children by providing education,
                              nutrition, and wellness support. The
                              Program/Projects are well aligned to the Education
                              Policy, and SDG Goal 4 (Ensure inclusive and
                              equitable quality education and promote lifelong
                              learning opportunities for all). Mamata works with
                              children (6 months – 18 years) living in difficult
                              circumstances, children from poor and marginalized
                              families, disaster-struck and street children,
                              children of RMG workers and children living in
                              remote villages and hard to reach areas. In 2009,
                              Mamata Bidyalaya was initiated to provide formal
                              education, recreation and safety to the children
                              of garment workers, marginalized and dropout
                              children with the aim of improving the quality of
                              life of children and their future. For 7 years,
                              ECCD activities were being carried out by Mamata
                              with her own funding and with the support of
                              various donor organizations. The parents of these
                              children were reluctant and somewhat depended on
                              Mamata to mainstream their children into formal
                              education taking this into consideration in 2016
                              Mr. Towhid Ahmed took initiative to impart formal
                              education to children. To ensure that every child
                              has the opportunity to access education especially
                              the marginalized children and the children of RMG
                              workers. Mamata Bidyalaya operates in its own
                              building and this education program is fully
                              funded by Mamata. In 2020, Mamata Biyalaya was
                              renamed as Mamata School and College as the
                              organization aims to expand this school into a
                              college in the near future. Currently more than
                              500 students are enrolled in the School and the
                              classroom facilities and all the cultural and
                              recreational activities are adhered following the
                              government directives under the overall
                              supervision of Mr. Ahmed. Mamata had been
                              implementing the “Children are protected from
                              violence” project since June 2013 with the support
                              of Save the Children International. The long-term
                              implementation of the project has played a
                              significant role in ensuring the safety,security
                              and proper development of vulnerable children in
                              four wards of Chattogram City Coorporation (CCC).
                              Mamata has made 4 child-care spaces functional
                              within the community to ensure childrens rights,
                              positive attitude towards children, positive
                              discipline practice, life skills, and ensuring
                              their rights through various awareness sessions,
                              accountability, and training. The project has
                              phased out in December 2021, the project
                              activities were widely accepted by the local
                              community including children, adolescents,
                              parents, teachers, religious leaders and various
                              government stakeholders and the project created
                              expectations among the population due to its
                              effective role in ensuring child protection. Mr.
                              Ahmed vision was to scale up this impact and hence
                              Mamata decided to implement the program titled
                              “Mamata Shishu Surokkha Kormosuchi” and continued
                              the activities with the target audience.
                            </>
                          )}
                        </div>

                        <button
                          onClick={() => setOpenMore(!openMore)}
                          className="text-[#467cc1] mt-4 cursor-pointer"
                        >
                          {openMore ? "See Less" : "See More"}
                        </button>
                      </motion.div>
                    </div>
                  </div>

                  <div className="container m-auto py-6 lg:py-12 ">
                    <div className="text-3xl sm:text-4xl font-extrabold relative w-fit pb-2">
                      Career
                      <span className="absolute bottom-0 left-0 h-[2px] bg-[#467cc1] w-25"></span>
                    </div>
                    <div className="py-7">
                      <div className="leading-relaxed ">
                        Currently, Towhid Ahmed is serving as a Director of
                        MAMATA, a social and non-government organization
                        committed to socio-economic developments, health care
                        services, poverty alleviation and livelihood improvement
                        of the disadvantaged people of the society.
                      </div>
                      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 pt-6">
                        {experiences.map((exp, index) => (
                          <div
                            key={index}
                            className={` ${
                              exp.side === "left"
                                ? "md:col-start-1 "
                                : "md:col-start-2"
                            }`}
                          >
                            <div className="flex gap-2">
                              <div>
                                <FontAwesomeIcon
                                  icon={faStarOfLife}
                                  className="text-[#467cc1] text-lg sm:text-xl mt-1"
                                />
                              </div>
                              <div className="">
                                <h3 className="font-semibold text-lg ">
                                  {exp.title}
                                </h3>
                                {exp.date && (
                                  <p className="inline-block bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-md my-2">
                                    {exp.date}
                                  </p>
                                )}
                                {exp.description && (
                                  <p className="italic  mt-1">
                                    {exp.description}
                                  </p>
                                )}
                                <ul className="list-disc list-inside mt-3  space-y-1">
                                  {exp.points?.map((point, i) => (
                                    <li key={i}>{point}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="container m-auto py-6 lg:py-12 ">
                    <div className="text-3xl sm:text-4xl font-extrabold relative w-fit pb-2">
                      Entrepreneurship & Social Initiatives
                      <span className="absolute bottom-0 left-0 h-[2px] bg-[#467cc1] w-25"></span>
                    </div>
                    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
                      {entrepreneurship_social_init.map((exp, index) => (
                        <div
                          key={index}
                          className={` ${
                            exp.side === "left"
                              ? "md:col-start-1 "
                              : "md:col-start-2"
                          }`}
                        >
                          <div className="flex gap-2">
                            <div>
                              <FontAwesomeIcon
                                icon={faCircleDot}
                                className="text-[#467cc1] text-lg sm:text-xl mt-1"
                              />
                            </div>
                            <div className="">
                              <h3 className="text-lg sm:text-xl font-bold ">
                                {exp.title}
                              </h3>

                              <p className="inline-block bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-md mt-2">
                                {exp.date}
                              </p>

                              <p className="italic mt-3 font-semibold ">
                                {exp.role}
                              </p>
                              {exp.link && (
                                <p className="italic  hover:underline">
                                  {exp.link}
                                </p>
                              )}
                              {exp.location && (
                                <p className="italic ">{exp.location}</p>
                              )}

                              <p className=" mt-3 leading-relaxed">
                                {exp.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="container m-auto py-6 lg:py-12">
                    <div className="text-3xl sm:text-4xl font-extrabold relative w-fit pb-2">
                      Education
                      <span className="absolute bottom-0 left-0 h-[2px] bg-[#467cc1] w-25"></span>
                    </div>
                    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 py-7">
                      {education.map((exp, index) => (
                        <div
                          key={index}
                          className={` ${
                            exp.side === "left"
                              ? "md:col-start-1 "
                              : "md:col-start-2"
                          }`}
                        >
                          <div className="flex gap-2">
                            <div>
                              <FontAwesomeIcon
                                icon={faGraduationCap}
                                className="text-[#467cc1] text-lg sm:text-xl mt-1"
                              />
                            </div>
                            <div className="">
                              <h3 className="text-lg sm:text-xl font-bold ">
                                {exp.title}
                              </h3>
                              <p className="inline-block bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-md mt-2">
                                {exp.date}
                              </p>
                              <p className="italic mt-3 font-semibold ">
                                {exp.institution}
                              </p>

                              {exp.location && (
                                <p className="italic ">{exp.location}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="container m-auto py-6 lg:py-12 ">
                    <div className="text-3xl sm:text-4xl font-extrabold relative w-fit pb-2">
                      Conferences & Seminars
                      <span className="absolute bottom-0 left-0 h-[2px] bg-[#467cc1] w-25"></span>
                    </div>

                    <div className="pt-7 pb-1">
                      <div className="leading-relaxed ">
                        Towhid Ahmed believes in learning from every object,
                        activity, experience and person. And to pursue that, he
                        often attends seminars and conferences around the globe.
                      </div>
                    </div>
                    <div className="relative space-y-2 py-7">
                      {conferences_seminars.map((exp, index) => (
                        <div key={index}>
                          <div className="flex gap-2">
                            <div>
                              <FontAwesomeIcon
                                icon={faStar}
                                className="text-[#467cc1] text-lg sm:text-xl mt-1"
                              />
                            </div>
                            <div className="">
                              <h3 className="text-lg sm:text-lg font-bold ">
                                {exp}
                              </h3>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="container m-auto py-6 lg:py-12 ">
                    <div className="text-3xl sm:text-4xl font-extrabold relative w-fit pb-2">
                      Awards & Achievements
                      <span className="absolute bottom-0 left-0 h-[2px] bg-[#467cc1] w-25"></span>
                    </div>
                    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 py-13">
                      {awards_achievements.map((exp, index) => (
                        <div
                          key={index}
                          className={` ${
                            exp.side === "left"
                              ? "md:col-start-1 "
                              : "md:col-start-2"
                          }`}
                        >
                          <div className="flex gap-2">
                            <div>
                              <FontAwesomeIcon
                                icon={faCircleDot}
                                className="text-[#467cc1] text-lg sm:text-xl mt-1"
                              />
                            </div>
                            <div className="">
                              <h3 className="text-lg sm:text-xl font-bold ">
                                {exp.title}
                              </h3>

                              <p className="inline-block bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-md mt-2">
                                {exp.dates}
                              </p>

                              <p className=" mt-3 leading-relaxed">
                                {exp.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.section>
              </div>
            )}

            {selectedMenu === "gallery" && (
              <div className="h-fit w-full">
                <motion.section
                  key={selectedMenu}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={contentAnimation}
                  className="bg-white min-h-screen px-2 lg:px-20 pb-[90px] lg:pb-0"
                >
                  <div className="container m-auto py-6 sm:py-15">
                    <div className="text-3xl sm:text-4xl font-extrabold relative w-fit pb-2">
                      Gallery
                      <span className="absolute bottom-0 left-0 h-[2px] bg-[#467cc1] w-25"></span>
                    </div>
                    <div className="relative pt-9 lg:pt-13">
                      <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                          delay: 2500,
                          disableOnInteraction: false,
                        }}
                        pagination={{
                          clickable: true,
                        }}
                        // autoHeight={true}
                        navigation={true}
                        modules={[Autoplay, Navigation]}
                        className="mySwiper swiper-gallery w-full md:w-[80%] lg:w-[60%]"
                      >
                        <SwiperSlide>
                          <Link
                            href="/images_cus/gallery/2025_Japan_42.jpg"
                            target="_blank"
                            rel="noreferrer"
                            className="w-full"
                          >
                            <Image
                              src="/images_cus/gallery/2025_Japan_42.jpg"
                              alt="With Nepal Team Visit in Bangladesh"
                              width={100}
                              height={100}
                              className=" w-full h-auto aspect-[16/9] object-contain"
                            />
                            <div className="w-full bg-white">
                              12th Social Business Academia Conference &
                              SocialTech Summit 2025, Japan
                            </div>
                          </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                          <Link
                            href="/images_cus/gallery/2025_Japan_41.jpg"
                            target="_blank"
                            rel="noreferrer"
                            className="w-full"
                          >
                            <Image
                              src="/images_cus/gallery/2025_Japan_41.jpg"
                              alt="With Nepal Team Visit in Bangladesh"
                              width={100}
                              height={100}
                              className=" w-full h-auto aspect-[16/9] object-contain"
                            />
                            <div className="w-full bg-white">
                              12th Social Business Academia Conference &
                              SocialTech Summit 2025, Japan
                            </div>
                          </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                          <Link
                            href="/images_cus/gallery/2025_Japan_43.jpg"
                            target="_blank"
                            rel="noreferrer"
                            className="w-full"
                          >
                            <Image
                              src="/images_cus/gallery/2025_Japan_43.jpg"
                              alt="With Nepal Team Visit in Bangladesh"
                              width={100}
                              height={100}
                              className=" w-full h-auto aspect-[16/9] object-contain"
                            />
                            <div className="w-full bg-white">
                              12th Social Business Academia Conference &
                              SocialTech Summit 2025, Japan
                            </div>
                          </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                          <Link
                            href="/images_cus/gallery/304120.jpg"
                            target="_blank"
                            rel="noreferrer"
                            className="w-full"
                          >
                            <Image
                              src="/images_cus/gallery/304120.jpg"
                              alt="With Nepal Team Visit in Bangladesh"
                              width={100}
                              height={100}
                              className=" w-full h-auto aspect-[16/9] object-contain"
                            />
                            <div className="w-full bg-white">
                              With Nepal Team Visit in Bangladesh
                            </div>
                          </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                          <Link
                            href="/images_cus/gallery/484460.jpg"
                            target="_blank"
                            rel="noreferrer"
                            className="w-full"
                          >
                            <Image
                              src="/images_cus/gallery/484460.jpg"
                              alt="Interview Time"
                              width={100}
                              height={100}
                              className="w-full h-auto aspect-[16/9] object-contain"
                            />
                            <div className="w-full bg-white">
                              Interview Time
                            </div>
                          </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                          <Link
                            href="/images_cus/gallery/990866.jpg"
                            target="_blank"
                            rel="noreferrer"
                            className="w-full"
                          >
                            <Image
                              src="/images_cus/gallery/990866.jpg"
                              alt="With Yeameen Yusuf Ahmed"
                              width={100}
                              height={100}
                              className="w-full h-auto aspect-[16/9] object-contain"
                            />
                            <div className="w-full bg-white">
                              With Yeameen Yusuf Ahmed
                            </div>
                          </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                          <Link
                            href="/images_cus/gallery/150272.jpg"
                            target="_blank"
                            rel="noreferrer"
                            className="w-full"
                          >
                            <Image
                              src="/images_cus/gallery/150272.jpg"
                              alt="Birthday Celebration"
                              width={100}
                              height={100}
                              className="w-full h-auto aspect-[16/9] object-contain"
                            />
                            <div className="w-full bg-white">
                              Birthday Celebration
                            </div>
                          </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                          <Link
                            href="/images_cus/gallery/508548.jpg"
                            target="_blank"
                            rel="noreferrer"
                            className="w-full"
                          >
                            <Image
                              src="/images_cus/gallery/508548.jpg"
                              alt="Refreshment Time"
                              width={100}
                              height={100}
                              className="w-full h-auto aspect-[16/9] object-contain"
                            />
                            <div className="w-full bg-white">
                              Refreshment Time
                            </div>
                          </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                          <Link
                            href="/images_cus/gallery/357943.jpg"
                            target="_blank"
                            rel="noreferrer"
                            className="w-full"
                          >
                            <Image
                              src="/images_cus/gallery/357943.jpg"
                              alt="Refreshment Time"
                              width={100}
                              height={100}
                              className="w-full h-auto aspect-[16/9] object-contain"
                            />
                            <div className="w-full bg-white">
                              Refreshment Time
                            </div>
                          </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                          <Link
                            href="/images_cus/gallery/876785.jpg"
                            target="_blank"
                            rel="noreferrer"
                            className="w-full"
                          >
                            <Image
                              src="/images_cus/gallery/876785.jpg"
                              alt="At Office"
                              width={100}
                              height={100}
                              className="w-full h-auto aspect-[16/9] object-contain"
                            />
                            <div className="w-full bg-white">At Office</div>
                          </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                          <Link
                            href="/images_cus/gallery/484131.jpg"
                            target="_blank"
                            rel="noreferrer"
                            className="w-full"
                          >
                            <Image
                              src="/images_cus/gallery/484131.jpg"
                              alt="At Recitation and Discussion Program"
                              width={100}
                              height={100}
                              className="w-full h-auto aspect-[16/9] object-contain"
                            />
                            <div className="w-full bg-white">
                              At Recitation and Discussion Program
                            </div>
                          </Link>
                        </SwiperSlide>

                        <SwiperSlide>
                          <Link
                            href="/images_cus/gallery/821219.jpg"
                            target="_blank"
                            rel="noreferrer"
                            className="w-full"
                          >
                            <Image
                              src="/images_cus/gallery/821219.jpg"
                              alt="Family Legacy"
                              width={100}
                              height={100}
                              className="w-full h-auto aspect-[16/9] object-contain"
                            />
                            <div className="w-full bg-white">Family Legacy</div>
                          </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                          <Link
                            href="/images_cus/gallery/669931.jpg"
                            target="_blank"
                            rel="noreferrer"
                            className="w-full"
                          >
                            <Image
                              src="/images_cus/gallery/669931.jpg"
                              alt="Twelve Years of BBF Program"
                              width={100}
                              height={100}
                              className="w-full h-auto aspect-[16/9] object-contain"
                            />
                            <div className="w-full bg-white">
                              Twelve Years of BBF Program
                            </div>
                          </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                          <Link
                            href="/images_cus/gallery/507560.jpg"
                            target="_blank"
                            rel="noreferrer"
                            className="w-full"
                          >
                            <Image
                              src="/images_cus/gallery/507560.jpg"
                              alt="Inauguration of Mamata Dairy Farm"
                              width={100}
                              height={100}
                              className="w-full h-auto aspect-[16/9] object-contain"
                            />
                            <div className="w-full bg-white">
                              Inauguration of Mamata Dairy Farm
                            </div>
                          </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                          <Link
                            href="/images_cus/gallery/868597.jpg"
                            target="_blank"
                            rel="noreferrer"
                            className="w-full"
                          >
                            <Image
                              src="/images_cus/gallery/868597.jpg"
                              alt="Office Time"
                              width={100}
                              height={100}
                              className="w-full h-auto aspect-[16/9] object-contain"
                            />
                            {/* <div className="w-full bg-white">Office Time</div> */}
                          </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                          <Link
                            href="/images_cus/gallery/at_office_1.jpeg"
                            target="_blank"
                            rel="noreferrer"
                            className="w-full"
                          >
                            <Image
                              src="/images_cus/gallery/at_office_1.jpeg"
                              alt="Office Time"
                              width={100}
                              height={100}
                              className="w-full h-auto aspect-[16/9] object-contain"
                            />
                            {/* <div className="w-full bg-white">Office Time</div> */}
                          </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                          <Link
                            href="/images_cus/gallery/at_office_2.jpeg"
                            target="_blank"
                            rel="noreferrer"
                            className="w-full"
                          >
                            <Image
                              src="/images_cus/gallery/at_office_2.jpeg"
                              alt="Office Time"
                              width={100}
                              height={100}
                              className="w-full h-auto aspect-[16/9] object-contain"
                            />
                            {/* <div className="w-full bg-white">Office Time</div> */}
                          </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                          <Link
                            href="/images_cus/gallery/at_office_3.jpeg"
                            target="_blank"
                            rel="noreferrer"
                            className="w-full"
                          >
                            <Image
                              src="/images_cus/gallery/at_office_3.jpeg"
                              alt="Office Time"
                              width={100}
                              height={100}
                              className="w-full h-auto aspect-[16/9] object-contain"
                            />
                            {/* <div className="w-full bg-white">Office Time</div> */}
                          </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                          <Link
                            href="/images_cus/gallery/796879.jpg"
                            target="_blank"
                            rel="noreferrer"
                            className="w-full"
                          >
                            <Image
                              src="/images_cus/gallery/796879.jpg"
                              alt="With Ayub Bachchu"
                              width={100}
                              height={100}
                              className="w-full h-auto aspect-[16/9] object-contain"
                            />
                            <div className="w-full bg-white">
                              With Ayub Bachchu
                            </div>
                          </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                          <Link
                            href="/images_cus/gallery/810927.jpg"
                            target="_blank"
                            rel="noreferrer"
                            className="w-full"
                          >
                            <Image
                              src="/images_cus/gallery/810927.jpg"
                              alt="With Ayub Bachchu"
                              width={100}
                              height={100}
                              className="w-full h-auto aspect-[16/9] object-contain"
                            />
                            <div className="w-full bg-white">
                              With Ayub Bachchu
                            </div>
                          </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                          <Link
                            href="/images_cus/gallery/746056.jpg"
                            target="_blank"
                            rel="noreferrer"
                            className="w-full"
                          >
                            <Image
                              src="/images_cus/gallery/746056.jpg"
                              alt="Mamata Dairy Farm Visit"
                              width={100}
                              height={100}
                              className="w-full h-auto aspect-[16/9] object-contain"
                            />
                            <div className="w-full bg-white">
                              Mamata Dairy Farm Visit
                            </div>
                          </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                          <Link
                            href="/images_cus/gallery/726457.jpg"
                            target="_blank"
                            rel="noreferrer"
                            className="w-full"
                          >
                            <Image
                              src="/images_cus/gallery/726457.jpg"
                              alt="Meeting with Health Program"
                              width={100}
                              height={100}
                              className="w-full h-auto aspect-[16/9] object-contain"
                            />
                            <div className="w-full bg-white">
                              Meeting with Health Program
                            </div>
                          </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                          <Link
                            href="/images_cus/gallery/948003.jpg"
                            target="_blank"
                            rel="noreferrer"
                            className="w-full"
                          >
                            <Image
                              src="/images_cus/gallery/948003.jpg"
                              alt="Office Time at meeting"
                              width={100}
                              height={100}
                              className="w-full h-auto aspect-[16/9] object-contain"
                            />
                            <div className="w-full bg-white">
                              Office Time at meeting
                            </div>
                          </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                          <Link
                            href="/images_cus/gallery/542355.jpg"
                            target="_blank"
                            rel="noreferrer"
                            className="w-full"
                          >
                            <Image
                              src="/images_cus/gallery/542355.jpg"
                              alt="Office Time at meeting"
                              width={100}
                              height={100}
                              className="w-full h-auto aspect-[16/9] object-contain"
                            />
                            <div className="w-full bg-white">
                              Office Time at meeting
                            </div>
                          </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                          <Link
                            href="/images_cus/gallery/476297.jpg"
                            target="_blank"
                            rel="noreferrer"
                            className="w-full"
                          >
                            <Image
                              src="/images_cus/gallery/476297.jpg"
                              alt="At MAMATA Dairy Farm"
                              width={100}
                              height={100}
                              className="w-full h-auto aspect-[16/9] object-contain"
                            />
                            <div className="w-full bg-white">
                              At MAMATA Dairy Farm
                            </div>
                          </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                          <Link
                            href="/images_cus/gallery/289523.jpg"
                            target="_blank"
                            rel="noreferrer"
                            className="w-full"
                          >
                            <Image
                              src="/images_cus/gallery/289523.jpg"
                              alt="Group work facilitation."
                              width={100}
                              height={100}
                              className="w-full h-auto aspect-[16/9] object-contain"
                            />
                            <div className="w-full bg-white">
                              Group work facilitation.
                            </div>
                          </Link>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                </motion.section>
              </div>
            )}

            {selectedMenu === "blog" && (
              <div className="h-fit w-full">
                <motion.section
                  key={selectedMenu}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={contentAnimation}
                  className="bg-white min-h-screen px-2 lg:px-20 pb-[90px] lg:pb-0"
                >
                  <div className="container m-auto py-6 sm:py-15">
                    <div className="text-3xl sm:text-4xl font-extrabold relative w-fit pb-2">
                      Blog
                      <span className="absolute bottom-0 left-0 h-[2px] bg-[#467cc1] w-25"></span>
                    </div>
                    <div className="relative py-13">
                      <div
                        className="bg-yellow-50 border-l-4 border-b-2 border-gray-500 p-4 "
                        role="alert"
                      >
                        <p className="font-bold">Not found</p>
                        <p>Keep connected for amazing blogs.</p>
                      </div>
                    </div>
                  </div>
                </motion.section>
              </div>
            )}

            {selectedMenu === "contact" && (
              <div className="h-fit w-full ">
                <motion.section
                  key={selectedMenu}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={contentAnimation}
                  className="bg-white min-h-screen px-2 lg:px-20 pb-[90px] lg:pb-0"
                >
                  <Footer />
                </motion.section>
              </div>
            )}
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
