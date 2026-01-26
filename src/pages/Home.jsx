import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1526481280690-7eadf8c8b2a7",
  "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf",
  "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
  "https://images.unsplash.com/photo-1518770660439-4636190af475",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
];

export default function Home() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND STRIPS */}
      <div className="absolute inset-0 grid grid-cols-5">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ y: "100vh" }}
            animate={{ y: 0 }}
            transition={{ delay: i * 0.15, duration: 1 }}
            className="bg-cover bg-center grayscale opacity-70"
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      {/* HERO CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-16 pt-48">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-[clamp(2.6rem,6vw,5.2rem)] font-extrabold leading-[0.98] max-w-5xl"
        >
          Not one passion.
          <br />
          <span className="text-red-600">Every single one.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-8 max-w-xl text-white/70 text-base md:text-lg"
        >
          Arts · Sports · Education · Technology · Culture
          <br />
          Different worlds. One stage.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-12 flex gap-8"
        >
          <button className="px-10 py-3 bg-red-600 text-sm tracking-widest hover:bg-red-700 transition">
            ENTER EXPERIENCE
          </button>

          <button className="px-10 py-3 border border-white/30 text-sm tracking-widest hover:bg-white/10 transition">
            VIEW SPEAKERS
          </button>
        </motion.div>

      </div>
    </section>
  );
}
