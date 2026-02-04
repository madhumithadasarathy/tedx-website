import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Mic, Users, Zap } from "lucide-react";

export default function AboutTed() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { amount: 0.4 });
  const controls = useAnimation();

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView, controls]);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        h-screen
        bg-black
        text-white
        overflow-hidden
        flex
        items-center
      "
    >
      {/* STAGE LIGHT SWEEP */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { duration: 0.5 }, // faster
          },
        }}
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_center,rgba(230,43,30,0.18),transparent_65%)]
        "
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        {/* TITLE */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.4 }, // faster
            },
          }}
          className="text-center"
        >
          <p className="text-red-600 tracking-[0.35em] text-xs mb-4">
            ABOUT TEDx
          </p>

          <h2 className="text-[clamp(2.6rem,6vw,5.2rem)] font-extrabold leading-[0.95]">
            Ideas worth
            <br />
            spreading.
          </h2>
        </motion.div>

        {/* CARDS */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.08, // faster
                delayChildren: 0.2,    // faster
              },
            },
          }}
          className="
            mt-14 md:mt-16
            grid
            grid-cols-1
            md:grid-cols-3
            gap-8
          "
        >
          {[
            {
              icon: Mic,
              title: "TALKS",
              text: "Short, powerful talks from voices shaping tomorrow.",
            },
            {
              icon: Users,
              title: "COMMUNITY",
              text: "Locally rooted events powered by global curiosity.",
            },
            {
              icon: Zap,
              title: "IMPACT",
              text: "Ideas that travel far beyond the stage.",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.35 }, // faster
                  },
                }}
                className="
                  relative
                  bg-white/5
                  backdrop-blur
                  border border-white/10
                  rounded-2xl
                  px-7 py-8
                  text-center
                  hover:border-red-600/40
                  hover:bg-white/10
                  transition
                "
              >
                <div className="flex justify-center mb-5">
                  <div className="w-12 h-12 rounded-full bg-red-600/15 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-red-600" />
                  </div>
                </div>

                <h4 className="text-base font-semibold tracking-wide">
                  {item.title}
                </h4>

                <p className="mt-3 text-white/65 text-sm leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
