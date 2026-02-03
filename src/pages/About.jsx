import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Lightbulb, Mic2, School, Sparkles } from "lucide-react";

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
    <>
      <section
        ref={ref}
        className="relative w-full h-screen overflow-hidden text-white"
      >
        <img
          src="/aboutbg.jpg"
          alt=""
          className="hidden"
          onLoad={() => setBgLoaded(true)}
        />

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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: bgLoaded ? 1 : 0 }}
          transition={{ delay: 0.8, duration: 1.8 }}
          className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black"
        />

        {bgLoaded && (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
              className="absolute w-[80vw] max-w-[700px] h-[80vw] max-h-[700px] border border-red-500/20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
              className="absolute w-[60vw] max-w-[500px] h-[60vw] max-h-[500px] border border-red-500/10 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </>
        )}

        {bgLoaded && (
          <motion.div
            style={{ y: textY, opacity: opacityFade }}
            className="relative z-20 w-full h-full flex items-center justify-center px-6"
          >
            <div className="text-center max-w-3xl">
              <div className="tracking-[0.25em] text-xs text-red-400 mb-5">
                ENTER THE FUTURE OF IDEAS
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl uppercase tracking-[10px]">
                Intelligence Reimagined
              </h1>

              <div className="h-[2px] w-36 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mt-6" />

              <p className="mt-6 text-gray-300 text-lg">
                Where imagination meets intelligence — shaping tomorrow.
              </p>
            </div>
          </motion.div>
        )}
      </section>

      <section className="relative w-full h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/clg.png"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="relative z-10 h-full max-w-7xl mx-auto px-6"
        >
          <div className="h-full grid grid-rows-[auto_1fr_auto] py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="max-w-xl">
                <span className="text-xs tracking-[0.35em] text-red-500">
                  ABOUT TEDxSEC
                </span>

                <h2 className="mt-4 text-4xl sm:text-5xl font-semibold">
                  Where Knowledge Meets
                  <span className="text-red-600"> Ideas Worth Spreading</span>
                </h2>

                <p className="mt-6 text-gray-300 text-lg leading-relaxed">
                  TEDx Sri Sairam Engineering College is an independently
                  organized TEDx event that bridges academic excellence with
                  transformative ideas—bringing thinkers, innovators, and
                  storytellers together to inspire meaningful change.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {[
                  {
                    icon: Lightbulb,
                    title: "Curated Ideas",
                    text: "Thought-provoking talks that expand intellectual horizons.",
                  },
                  {
                    icon: Mic2,
                    title: "Diverse Voices",
                    text: "Authentic perspectives from varied domains.",
                  },
                  {
                    icon: School,
                    title: "Academic Roots",
                    text: "Anchored in Sri Sairam Engineering College.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2, duration: 0.8 }}
                    className="rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 p-5"
                  >
                    <item.icon className="text-red-600 mb-2" size={24} />
                    <h3 className="text-sm font-medium">{item.title}</h3>
                    <p className="text-xs text-gray-300 mt-1">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-10 max-w-4xl">
              <div className="relative pl-6">
                <div className="absolute left-0 top-1 h-full w-[2px] bg-gradient-to-b from-red-600 to-transparent" />
                <h3 className="text-xl flex items-center gap-2">
                  <Sparkles className="text-red-600" size={18} />
                  Why This Matters
                </h3>
                <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                  TEDxSEC fosters curiosity, critical thinking, and innovation —
                  empowering audiences to question assumptions and explore
                  possibilities beyond conventional boundaries.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
