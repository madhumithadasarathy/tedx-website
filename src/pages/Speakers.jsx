import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import Orbit from "../components/Orbit.jsx";
import Cta from "../components/Cta.jsx";

export default function Speakers() {
  const titleControls = useAnimationControls();
  const captionControls = useAnimationControls();
  const imageControls = useAnimationControls();

  useEffect(() => {
    async function sequence() {
      // 1️⃣ Title first
      await titleControls.start("visible");
      // 2️⃣ Image second
      await imageControls.start("visible");
      // 3️⃣ Caption last
      await captionControls.start("visible");
    }

    sequence();
  }, []);

  return (
    <main className="w-full">
      <section
        className="
          relative
          w-full
          overflow-hidden
          flex
          items-center
          justify-center
          bg-white
          h-[50svh]
          lg:h-[100svh]
        "
      >
        {/* TEXT */}
        <div
          className="
            relative z-20
            flex flex-col
            items-center
            text-center
            -translate-y-10
            lg:-translate-y-14
          "
        >
          {/* CAPTION (appears LAST now) */}
          <motion.p
            initial="hidden"
            animate={captionControls}
            variants={{
              hidden: {
                clipPath: "inset(0 100% 0 0)",
              },
              visible: {
                clipPath: "inset(0 0% 0 0)",
                transition: {
                  duration: 1.2, // ⬅ faster
                  ease: "easeInOut",
                },
              },
            }}
            className="
              text-xs
              sm:text-sm
              md:text-base
              tracking-[0.45em]
              uppercase
              text-black/70
              mb-3
              overflow-hidden
              whitespace-nowrap
            "
          >
            Meet the minds behind the ideas.
          </motion.p>

          {/* TITLE (appears FIRST) */}
          <motion.h1
            initial="hidden"
            animate={titleControls}
            variants={{
              hidden: {
                clipPath: "inset(0 100% 0 0)",
              },
              visible: {
                clipPath: "inset(0 0% 0 0)",
                transition: {
                  duration: 1.6, // ⬅ faster
                  ease: "easeInOut",
                },
              },
            }}
            className="
              font-anton
              text-red-600
              leading-none
              text-[clamp(5.8rem,18vw,22rem)]
              overflow-hidden
            "
          >
            INNOVATORS
          </motion.h1>
        </div>

        {/* IMAGE (appears SECOND) */}
        <motion.div
          initial={{ y: 180, opacity: 0 }}
          animate={imageControls}
          variants={{
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 1.4, // ⬅ faster
                ease: "easeInOut",
              },
            },
          }}
          className="
            absolute
            bottom-0
            left-0
            w-full
            flex
            justify-center
            z-30
          "
        >
          <img
            src="/innovators.svg"
            alt="Guest silhouettes"
            className="
              pointer-events-none
              select-none
              brightness-75
              contrast-125
              w-[96%]
              sm:w-[92%]
              md:w-[87%]
              lg:w-[82%]
              xl:w-[78%]
              2xl:w-[75%]
              max-w-[1800px]
            "
          />
        </motion.div>
      </section>

      <Orbit />
      <Cta />
    </main>
  );
}
