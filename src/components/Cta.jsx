import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
} from "framer-motion";

/*
  ✔ Animation replays every time section is visited
  ✔ No refresh required
  ✔ Doors close → open again on scroll entry
*/

const BG_IMAGE = "/audience.jpg";

function makeNoiseSeeds(count = 12) {
  return Array.from({ length: count }).map(() => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: 120 + Math.random() * 260,
    opacity: 0.04 + Math.random() * 0.06,
  }));
}

export default function Cta({ onEnter }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    amount: 0.6, // 60% visible
  });

  const [open, setOpen] = useState(false);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const sx = useSpring(mx, { stiffness: 120, damping: 28 });
  const sy = useSpring(my, { stiffness: 120, damping: 28 });

  const driftX = useTransform(sx, (v) => `${v * 14}px`);
  const driftY = useTransform(sy, (v) => `${v * 10}px`);

  const noise = useMemo(() => makeNoiseSeeds(), []);

  /* 🔥 THIS IS THE FIX */
  useEffect(() => {
    if (!isInView) {
      // reset when leaving viewport
      setOpen(false);
      return;
    }

    // replay animation when entering
    const timer = setTimeout(() => {
      setOpen(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black overflow-hidden lg:h-screen"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - (r.left + r.width / 2)) / (r.width / 2));
        my.set((e.clientY - (r.top + r.height / 2)) / (r.height / 2));
      }}
    >
      {/* ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(239,68,68,0.25),transparent_65%)]" />

      {/* floating haze */}
      {noise.map((n, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: `${n.left}%`,
            top: `${n.top}%`,
            width: n.size,
            height: n.size,
            opacity: n.opacity,
            filter: "blur(32px)",
          }}
          animate={{ opacity: [n.opacity * 0.6, n.opacity, n.opacity * 0.6] }}
          transition={{ duration: 8 + i * 0.4, repeat: Infinity }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center h-full pt-[10vh] lg:pt-0">

          {/* LEFT CONTENT */}
          <div>
            <p className="text-[11px] tracking-[0.55em] uppercase text-white/45">
              FINAL MOMENT
            </p>

            <h2
              className="mt-6 text-6xl xl:text-7xl font-semibold text-white/90"
              style={{ textShadow: "0 0 32px rgba(239,68,68,0.35)" }}
            >
              ENTER
            </h2>

            <p className="mt-4 text-3xl text-white/80">
              the room where ideas ignite.
            </p>

            <p className="mt-6 max-w-xl text-white/65">
              When the lights rise, something changes — not on stage, but inside the crowd.
            </p>
          </div>

          {/* PORTAL */}
          <div
            className="relative h-[620px] lg:h-[80vh] rounded-[2.8rem]
                       border border-white/10 bg-black/55 backdrop-blur-xl
                       overflow-hidden cursor-pointer"
            onClick={() => onEnter?.()}
          >
            {/* AUDIENCE IMAGE */}
            <motion.div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `url(${BG_IMAGE})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                translateX: driftX,
                translateY: driftY,
                filter: "grayscale(100%) contrast(1.15)",
                opacity: open ? 0.65 : 0,
                transition: "opacity 1.2s ease",
              }}
            />

            {/* FLASH LIGHTS */}
            <motion.div className="absolute inset-0 z-10">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute bottom-[-30%] left-1/2 origin-bottom"
                  style={{
                    width: 500,
                    height: 1000,
                    background:
                      "radial-gradient(ellipse at bottom, rgba(239,68,68,0.45), transparent 70%)",
                    filter: "blur(55px)",
                  }}
                  animate={{
                    rotate: [-24 + i * 10, -12 + i * 10],
                    opacity: open ? [0.25, 0.45, 0.3] : 0,
                  }}
                  transition={{
                    duration: 7 + i * 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>

            {/* DOORS */}
            <motion.div
              className="absolute inset-y-0 left-0 w-1/2 z-30"
              animate={{ x: open ? "-100%" : "0%" }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background:
                  "linear-gradient(to right, #000, rgba(70,0,0,0.95))",
              }}
            />

            <motion.div
              className="absolute inset-y-0 right-0 w-1/2 z-30"
              animate={{ x: open ? "100%" : "0%" }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background:
                  "linear-gradient(to left, #000, rgba(70,0,0,0.95))",
              }}
            />

            {/* CENTER SEAM */}
            <motion.div
              className="absolute left-1/2 top-0 h-full -translate-x-1/2 z-40"
              animate={{ opacity: open ? 0 : 1 }}
              transition={{ duration: 0.5 }}
              style={{
                width: 6,
                background:
                  "linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(239,68,68,1), rgba(255,255,255,0.1))",
                boxShadow: "0 0 120px rgba(239,68,68,1)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
