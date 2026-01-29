import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function AboutTed() {

  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { amount: 0.5 });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-black text-white overflow-hidden flex items-center"
    >

      {/* STAGE LIGHT SWEEP */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { duration: 1.2 },
          },
        }}
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_center,rgba(230,43,30,0.18),transparent_65%)]
        "
      />

      {/* HORIZON LINE */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { scaleX: 0 },
          visible: {
            scaleX: 1,
            transition: { delay: 0.8, duration: 1 },
          },
        }}
        className="absolute bottom-[38%] w-full h-[1px] bg-gradient-to-r from-transparent via-red-600 to-transparent origin-center"
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-10 w-full">

        {/* TITLE */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.9 },
            },
          }}
          className="text-center"
        >
          <p className="text-red-600 tracking-[0.35em] text-xs mb-6">
            ABOUT TEDx
          </p>

          <h2 className="text-[clamp(3rem,7vw,5.5rem)] font-extrabold leading-[0.95]">
            Ideas worth
            <br />
            spreading.
          </h2>
        </motion.div>

        {/* PILLARS */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.25,
                delayChildren: 0.9,
              },
            },
          }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-14 text-center"
        >
          {[
            {
              title: "TALKS",
              text: "Powerful short-format talks from voices shaping the future.",
            },
            {
              title: "COMMUNITY",
              text: "Locally organized events driven by global curiosity.",
            },
            {
              title: "IMPACT",
              text: "Ideas that continue far beyond the stage lights.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7 },
                },
              }}
              className="relative"
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-red-600/60" />

              <h4 className="text-lg font-semibold tracking-wide">
                {item.title}
              </h4>

              <p className="mt-4 text-white/65 text-sm leading-relaxed max-w-xs mx-auto">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
