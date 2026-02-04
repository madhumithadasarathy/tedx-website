import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import AboutTed from "./AboutTed.jsx";
import AboutTedSsec from "../components/AboutTedSsec.jsx";
import AboutSairam from "../components/AboutSairam.jsx";
import ExperienceSignalRoom from "../components/ExperienceSignalRoom.jsx";
import CountdownSignal from "../components/CountdownSignal.jsx";

const images = [
  "/hero1.jpg",
  "/hero2.jpg",
  "/hero3.jpg",
  "/hero4.jpg",
  "/hero5.jpg",
];

const kineticWords = [
  { text: "CREATE", color: "text-white" },
  { text: "MOVE", color: "text-red-600" },
  { text: "QUESTION", color: "text-orange-400" },
  { text: "BUILD", color: "text-neutral-300" },
  { text: "EXPRESS", color: "text-red-500" },
  { text: "EVOLVE", color: "text-white" },
];

export default function Home() {
  /* ================= HERO CONTROLS ================= */
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { amount: 0.5 });
  const heroControls = useAnimation();

  /* ================= STAGE CONTROLS ================= */
  const stageRef = useRef(null);
  const stageInView = useInView(stageRef, { amount: 0.6 });

  const bgControls = useAnimation();
  const textControls = useAnimation();

  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, 60]);

  /* HERO ANIMATION */
  useEffect(() => {
    heroControls.start(heroInView ? "visible" : "hidden");
  }, [heroInView, heroControls]);

  /* STAGE ANIMATION */
  useEffect(() => {
    if (stageInView) {
      bgControls.start("visible").then(() => {
        textControls.start("visible");
      });
    } else {
      bgControls.start("hidden");
      textControls.start("hidden");
    }
  }, [stageInView, bgControls, textControls]);

  return (
    <>
      {/* ======================================================
          HERO SECTION
      ======================================================= */}
      <section
        ref={heroRef}
        className="relative min-h-screen overflow-hidden"
      >
        {/* Background strips */}
        <div className="absolute inset-0 grid grid-cols-5">
          {images.map((img, i) => {
            const yParallax = useTransform(
              scrollY,
              [0, 1000],
              [0, i % 2 === 0 ? 100 : -100]
            );

            return (
              <motion.div
                key={i}
                initial={{ y: "100vh" }}
                animate={{ y: 0 }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.55,
                  ease: "easeOut",
                }}
                style={{ backgroundImage: `url(${img})`, y: yParallax }}
                className="bg-cover bg-center scale-[1.08] grayscale contrast-110 brightness-90"
              />
            );
          })}
        </div>

        {/* overlays */}
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />

        {/* content */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -60 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, ease: "easeOut" },
            },
          }}
          initial="hidden"
          animate={heroControls}
          style={{ y: yText }}
          className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 pt-32 md:pt-48"
        >
          <h1 className="text-[clamp(2.6rem,6vw,5.2rem)] font-extrabold leading-[0.95]">
            Not one passion.
            <br />
            <span className="text-red-600">Every single one.</span>
          </h1>

          <p className="mt-8 max-w-xl text-white/70 text-lg">
            Arts · Sports · Education · Technology · Culture
            <br />
            Different worlds. One stage.
          </p>

          {/* ACTION BUTTONS */}
          <div className="mt-12 flex flex-row flex-wrap gap-4">
            <Link
              to="/attend"
              className="px-6 py-3 md:px-10 md:py-4 bg-red-600 text-xs md:text-sm tracking-widest font-bold hover:bg-red-700 transition rounded shadow-[0_0_20px_rgba(220,38,38,0.5)]"
            >
              ENTER EXPERIENCE
            </Link>

            <Link
              to="/speakers"
              className="px-6 py-3 md:px-10 md:py-4 border border-white/30 text-xs md:text-sm tracking-widest font-bold hover:bg-white/10 transition rounded hover:border-white"
            >
              VIEW SPEAKERS
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ======================================================
          STAGE / KINETIC SECTION
      ======================================================= */}
      <section
        ref={stageRef}
        className="relative h-screen min-h-[100svh] overflow-hidden bg-black"
      >
        {/* BACKGROUND */}
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              scale: 1.18,
              filter: "brightness(0.35)",
            },
            visible: {
              opacity: 1,
              scale: 1.05,
              filter: "brightness(1)",
              transition: { duration: 1.0, ease: "easeOut" },
            },
          }}
          initial="hidden"
          animate={bgControls}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/section2bg.jpg)" }}
        />

        {/* overlays */}
        <motion.div
          variants={{ hidden: { opacity: 1 }, visible: { opacity: 0 } }}
          initial="hidden"
          animate={bgControls}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-black"
        />

        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 0.55 } }}
          initial="hidden"
          animate={bgControls}
          transition={{ delay: 0.5, duration: 0.45 }}
          className="absolute inset-0 bg-black"
        />

        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          initial="hidden"
          animate={bgControls}
          transition={{ delay: 0.6, duration: 0.45 }}
          className="absolute inset-0 bg-gradient-to-b from-red-600/30 via-transparent to-black/80"
        />

        {/* TEXT */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center gap-2 text-center px-6">
          {kineticWords.map((item, i) => (
            <motion.h2
              key={item.text}
              variants={{
                hidden: {
                  opacity: 0,
                  x: i % 2 === 0 ? -45 : 45,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: i * 0.07,
                    duration: 0.32,
                    ease: "easeOut",
                  },
                },
              }}
              initial="hidden"
              animate={textControls}
              className={`
                text-[clamp(1.6rem,4.5vw,3.1rem)]
                font-black
                leading-[1]
                tracking-wide
                ${item.color}
              `}
            >
              {item.text}
            </motion.h2>
          ))}

          <motion.div
            initial={{ scaleX: 0 }}
            animate={textControls}
            variants={{
              visible: {
                scaleX: 1,
                transition: { delay: 0.85, duration: 0.4 },
              },
            }}
            className="mt-6 h-[3px] w-44 bg-red-600 origin-left rounded-full"
          />

          <p className="mt-4 text-white/60 tracking-[0.35em] text-[10px]">
            DIFFERENT ENERGIES · ONE PLATFORM
          </p>
        </div>
      </section>

      {/* ======================================================
          REMAINING SECTIONS
      ======================================================= */}
      <AboutTed />
      <AboutTedSsec />
      <AboutSairam />
      <ExperienceSignalRoom />
      <CountdownSignal />
    </>
  );
}
