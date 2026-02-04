import React, { useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";

export default function AboutTedSsec() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.4 });
  const controls = useAnimation();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // tighter parallax (less floaty, more responsive)
  const yLeft = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const yRight = useTransform(scrollYProgress, [0, 1], [90, -90]);

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView, controls]);

  return (
    <section
      ref={ref}
      className="
        relative
        min-h-[100svh]
        bg-black
        text-white
        overflow-hidden
        flex
        items-center
        py-16
      "
    >
      {/* ================= BACKGROUND ================= */}

      {/* ambient wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 38% 45%, rgba(230,43,30,0.14) 0%, rgba(0,0,0,0) 60%)",
        }}
      />

      {/* grid */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }}
      />

      {/* ================= CONTENT ================= */}
      <div
        className="
          relative z-10
          w-full max-w-7xl mx-auto
          px-6 md:px-12
          grid grid-cols-1 md:grid-cols-2
          gap-14 md:gap-20
          items-center
        "
      >
        {/* ================= LEFT TEXT ================= */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.55, ease: "easeOut" },
            },
          }}
          style={{ y: yLeft }}
        >
          <p className="text-[10px] tracking-[0.45em] text-white/55">
            ABOUT TEDx AT SAIRAM
          </p>

          <h2 className="mt-5 text-[clamp(2.2rem,5.5vw,4.2rem)] font-extrabold leading-[0.95]">
            Where Ideas
            <br />
            <span className="text-red-600">Find a Stage</span>
          </h2>

          <p className="mt-5 max-w-xl text-white/70 text-sm leading-relaxed">
            TEDx is an independently organized event licensed by TED, following
            the global format of short, powerful talks while amplifying local
            voices.
          </p>

          <p className="mt-3 max-w-xl text-white/65 text-sm leading-relaxed">
            At Sri Sairam Engineering College, TEDx becomes a convergence of
            innovation, creativity, technology and culture, where ideas are not
            just shared, but experienced.
          </p>

          <div className="mt-6 h-[2px] w-24 bg-red-600 rounded-full" />
        </motion.div>

        {/* ================= RIGHT GLASS CARDS ================= */}
        <motion.div style={{ y: yRight }} className="relative flex flex-col gap-6">
          {[
            {
              tag: "SPEAKERS",
              title: "Voices That Matter",
              text:
                "A curated lineup of thinkers, creators and leaders sharing ideas shaped by lived experience.",
              glow:
                "bg-[radial-gradient(circle_at_30%_30%,rgba(230,43,30,0.25),transparent_65%)]",
              delay: 0,
            },
            {
              tag: "EXPERIENCE",
              title: "Beyond the Talk",
              text:
                "Talks merge with performance, emotion and silence — forming a fully immersive stage experience.",
              glow:
                "bg-[radial-gradient(circle_at_30%_30%,rgba(255,122,24,0.22),transparent_65%)]",
              delay: 0.1,
            },
            {
              tag: "SAIRAM",
              title: "Rooted Locally",
              text:
                "Built at Sri Sairam Engineering College — driven by students, guided by vision.",
              glow:
                "bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.18),transparent_65%)]",
              delay: 0.2,
            },
          ].map((card) => (
            <motion.div
              key={card.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.4 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: 0.15 + card.delay, // 🔥 no lag
                    duration: 0.45,
                    ease: "easeOut",
                  },
                },
              }}
              className="
                relative
                rounded-2xl
                border border-white/10
                bg-white/[0.045]
                backdrop-blur-xl
                p-6
                overflow-hidden
              "
            >
              {/* glow */}
              <div className={`absolute inset-0 opacity-60 ${card.glow}`} />

              {/* gradient edge */}
              <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-orange-500 via-red-600 to-red-700" />

              <div className="relative z-10 pl-4">
                <p className="text-[10px] tracking-[0.4em] text-white/55">
                  {card.tag}
                </p>

                <h3 className="mt-2 text-[16px] font-bold">
                  {card.title}
                </h3>

                <p className="mt-2 text-white/75 text-sm leading-relaxed">
                  {card.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
