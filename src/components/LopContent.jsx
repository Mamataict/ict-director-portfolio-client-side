"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LopContent({image}) {
  const images = [
    { src: image, hueA: 0, hueB: 0 },
    // { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ3ZD3eQoivQ0xJ4p_ILshOk74FwZ8NS-Kmw&s", hueA: 20, hueB: 40 },
    // { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfvfdzlviNRbd_jUoULocgggXfwo1hS1sjEQ&s", hueA: 60, hueB: 90 },
    // { src: "https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", hueA: 80, hueB: 120 },
    // { src: "/images/photo5.jpg", hueA: 100, hueB: 140 },
    // { src: "/images/photo6.jpg", hueA: 205, hueB: 245 },
    // { src: "/images/photo7.jpg", hueA: 260, hueB: 290 },
    // { src: "/images/photo8.jpg", hueA: 290, hueB: 320 },
  ];
  return (
    <div style={container}>
      {images.map(({ src, hueA, hueB }, i) => (
        <Card key={i} i={i} src={src} hueA={hueA} hueB={hueB} />
      ))}
    </div>
  );
}

function Card({ src, hueA, hueB, i }) {
//   const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;
  const background = `#ffffff`;

  return (
    <motion.div
      className={`card-container-${i}`}
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <div style={{ ...splash, background }} />
      <motion.div style={card} variants={cardVariants} className="card">
        <Image
          src={src}
          alt={`Card ${i}`}
          fill
          style={{
            objectFit: "contain",
            borderRadius: "20px",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

const cardVariants = {
  offscreen: { y: 300 },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 },
  },
};

const hue = (h) => `hsl(${h}, 100%, 50%)`;

/* ============== Styles ================ */

const container = {
  margin: "10px auto",
  width: '480px',
  paddingBottom: 100,
//   width: "100%",
};

const cardContainer = {
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  paddingTop: 20,
  marginBottom: -120,
};

const splash = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
};

const card = {
  position: "relative",
  width: 300,
  height: 350,
//   borderRadius: 20,
  background: 'transparent',
//   boxShadow:
//     "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
  transformOrigin: "10% 60%",
};