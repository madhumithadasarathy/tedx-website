import { motion } from "framer-motion";

const images = [
  "/hero1.jpg",
  "/hero2.jpg",
  "/hero3.jpg",
  "/hero4.jpg",
  "/hero5.jpg",
];

export default function Home() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-5">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ y: "100vh" }}
              animate={{ y: 0 }}
              transition={{ delay: i * 0.15, duration: 1 }}
              className="bg-cover bg-center scale-[1.08] grayscale contrast-110 brightness-90"
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-16 pt-48">
          <motion.h1
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="text-[clamp(2.6rem,6vw,5.2rem)] font-extrabold leading-[0.98]"
          >
            Not one passion.
            <br />
            <span className="text-red-600">Every single one.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="mt-8 max-w-xl text-white/70"
          >
            Arts · Sports · Education · Technology · Culture
            <br />
            Different worlds. One stage.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-12 flex gap-8"
          >
            <button className="px-10 py-3 bg-red-600 text-sm tracking-widest hover:bg-red-700">
              ENTER EXPERIENCE
            </button>
            <button className="px-10 py-3 border border-white/30 text-sm tracking-widest hover:bg-white/10">
              VIEW SPEAKERS
            </button>
          </motion.div>
        </div>
      </section>

      {/* ================= FUTURISTIC KINETIC SECTION ================= */}
      <section className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">

        {/* ANIMATED GRADIENT FLOW */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-cyan-400/10 animate-gradientSlow" />

        {/* DIAGONAL MOTION LINES */}
        <div
          className="
            absolute inset-0
            bg-[repeating-linear-gradient(
              -45deg,
              rgba(255,255,255,0.04),
              rgba(255,255,255,0.04)_1px,
              transparent_1px,
              transparent_80px
            )]
            opacity-20
          "
        />

        {/* COLOR GLOWS */}
        <div className="absolute w-[520px] h-[520px] bg-red-600/30 blur-[180px] rounded-full -top-40 -left-40" />
        <div className="absolute w-[420px] h-[420px] bg-orange-500/20 blur-[180px] rounded-full top-1/2 left-1/3" />
        <div className="absolute w-[420px] h-[420px] bg-cyan-400/20 blur-[180px] rounded-full bottom-0 right-0" />

        {/* WORDS */}
        <div className="relative z-10 text-center px-8">
          {["CREATE", "MOVE", "QUESTION", "BUILD", "EXPRESS", "EVOLVE"].map(
            (word, i) => (
              <motion.h2
                key={word}
                initial={{
                  opacity: 0,
                  x: i % 2 === 0 ? -200 : 200,
                  filter: "blur(10px)",
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  delay: i * 0.18,
                  duration: 0.9,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="
                  text-[clamp(3.2rem,8vw,6.2rem)]
                  font-black
                  leading-[0.95]
                  tracking-tight
                  bg-gradient-to-r
                  from-[#E62B1E]
                  via-[#ff7a18]
                  to-[#22d3ee]
                  bg-[length:300%_300%]
                  animate-gradient
                  text-transparent
                  bg-clip-text
                "
              >
                {word}
              </motion.h2>
            )
          )}

          {/* WAVEFORM */}
          <div className="mx-auto mt-14 h-[3px] w-44 overflow-hidden rounded-full bg-white/10">
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
              className="h-full w-1/2 bg-gradient-to-r from-transparent via-red-500 to-transparent"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            viewport={{ once: true }}
            className="mt-10 text-white/70 tracking-[0.35em] text-xs"
          >
            DIFFERENT ENERGIES · ONE PLATFORM
          </motion.p>
        </div>
      </section>
    </>
  );
}
