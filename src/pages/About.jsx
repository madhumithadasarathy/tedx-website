import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export default function About() {
  const ref = useRef(null);
  const [bgLoaded, setBgLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative w-full h-screen overflow-hidden text-white"
    >
      {/* ===== Preload Background Image ===== */}
      <img
        src="/aboutbg.jpg"
        alt=""
        className="hidden"
        onLoad={() => setBgLoaded(true)}
      />

      {/* ===== Animated Background ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: bgLoaded ? 1 : 0 }}
        transition={{ duration: 2.2 }}
        style={{
          backgroundImage: "url('/aboutbg.jpg')",
          scale: bgScale,
        }}
        className="absolute inset-0 bg-cover bg-center"
      />

      {/* ===== Gradient Overlay ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: bgLoaded ? 1 : 0 }}
        transition={{ delay: 0.8, duration: 1.8 }}
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black"
      />

      {/* ===== Futuristic Rotating Rings ===== */}
      {bgLoaded && (
        <>
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1, rotate: 360 }}
            transition={{ duration: 3, rotate: { repeat: Infinity, duration: 80, ease: "linear" } }}
            className="absolute w-[80vw] max-w-[700px] h-[80vw] max-h-[700px] border border-red-500/20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1, rotate: -360 }}
            transition={{ duration: 3, rotate: { repeat: Infinity, duration: 120, ease: "linear" } }}
            className="absolute w-[60vw] max-w-[500px] h-[60vw] max-h-[500px] border border-red-500/10 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </>
      )}

      {/* ===== Floating Particles ===== */}
      {bgLoaded &&
        [...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-red-500 rounded-full"
            initial={{
              opacity: 0,
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              y: [0, -120, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}

      {/* ===== Center Content ===== */}
      {bgLoaded && (
        <motion.div
          style={{ y: textY, opacity: opacityFade }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1.8 }}
          className="relative z-20 w-full h-full flex items-center justify-center px-5 sm:px-8 pt-16 sm:pt-24 md:pt-32"
        >
          <div className="text-center max-w-3xl">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 1.6 }}
              className="mb-5 tracking-[0.25em] text-xs sm:text-sm text-red-400"
            >
              ENTER THE FUTURE OF IDEAS
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, letterSpacing: "0.5em", filter: "blur(12px)" }}
              animate={{ opacity: 1, letterSpacing: "10px", filter: "blur(0px)" }}
              transition={{ delay: 2.2, duration: 2 }}
              className="text-3xl sm:text-5xl md:text-7xl font-medium leading-tight uppercase tracking-[10px]"
            >
              Intelligence Reimagined
            </motion.h1>

            {/* Divider */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "140px", opacity: 1 }}
              transition={{ delay: 2.8, duration: 1.6 }}
              className="h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mt-6"
            />

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.2, duration: 1.8 }}
              className="mt-6 text-gray-300 text-sm sm:text-lg md:text-xl leading-relaxed"
            >
              Where human imagination converges with machine intelligence —
              sparking revolutionary perspectives, boundary-breaking
              conversations, and visions powerful enough to reshape tomorrow.
            </motion.p>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.6 }}
              className="mt-12 flex flex-col items-center"
            >
              <span className="text-[10px] sm:text-xs tracking-widest text-gray-400">
                SCROLL TO EXPLORE
              </span>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.2, repeat: Infinity }}
                className="mt-2 w-[2px] h-10 sm:h-12 bg-gradient-to-b from-red-600 to-transparent"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </section>
  );
}