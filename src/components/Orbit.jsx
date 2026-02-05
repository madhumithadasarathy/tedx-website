import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

/* --------------------------------------------------
   CINEMATIC ANIMATION VARIANTS
-------------------------------------------------- */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.25,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 80 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* --------------------------------------------------
   SPEAKER DATA
-------------------------------------------------- */

const SPEAKERS = [
  {
    id: "01",
    name: "Ms. Mercy John",
    role: "Podcaster & Managing Director,St.John's Matriculation School",
    bio: "Audio storytelling, live conversations, and culture-forward narratives.",
    image: "/speaker1.svg",
    link: "https://www.instagram.com/rjmercyjohn?igsh=MmN0c2d6MWIzc3Jz",
    elements: [
      { title: "VOICE", value: "Podcasting • Radio" },
      { title: "CRAFT", value: "Storytelling • Interviews" },
      { title: "IMPACT", value: "Youth • Media Culture" },
      { title: "STYLE", value: "Conversational • Expressive" },
    ],
  },
  {
    id: "02",
    name: "Mr. Prasanna Venkatesh",
    role: "Photographer & Digital Creator",
    bio: "Frames that sell ideas: light, composition, and creator economics.",
    image: "/speaker2.svg",
    link: "https://www.instagram.com/rprasanavenkatesh?igsh=MXNuZHpnM3hhcDQyZw==",
    elements: [
      { title: "VISION", value: "Photography • Visual Design" },
      { title: "CRAFT", value: "Lighting • Composition" },
      { title: "IMPACT", value: "Digital Storytelling" },
      { title: "STYLE", value: "Minimal • Cinematic" },
    ],
  },
  {
    id: "03",
    name: "Mr. Sambashiva Srisailapathy",
    role: "Head of Regional Key Accounts Management, Grab",
    bio: "Scaling partnerships and platforms with real-world constraints.",
    image: "/speaker3.svg",
    link: "https://www.linkedin.com/in/putchutney",
    elements: [
      { title: "LEADERSHIP", value: "Enterprise Strategy" },
      { title: "EXPERTISE", value: "Mobility • Platforms" },
      { title: "IMPACT", value: "Urban Ecosystems" },
      { title: "PERSPECTIVE", value: "Business • Operations" },
    ],
  },
  {
    id: "04",
    name: "Ms. Drishyaa Dugaal",
    role: "AI & Cybersecurity Psychologist",
    bio: "Human factors meet AI: behavior, threat perception, and trust.",
    image: "/speaker4.svg",
    link: "https://www.linkedin.com/in/drishyaa-duggal-80a231254",
    elements: [
      { title: "EXPERTISE", value: "AI • Cybersecurity" },
      { title: "FOCUS", value: "Human Behavior" },
      { title: "IMPACT", value: "Digital Safety" },
      { title: "PERSPECTIVE", value: "Psychology • Ethics" },
    ],
  },
  {
    id: "05",
    name: "Mr. Sanjay",
    role: "Scientist, DRDO",
    bio: "Engineering under uncertainty: experiments, failures, and breakthroughs.",
    image: "/speaker5.svg",
    link: "https://www.linkedin.com/in/sanjay-s-s-0173431a6",
    elements: [
      { title: "RESEARCH", value: "Defense Science" },
      { title: "EXPERTISE", value: "Applied Engineering" },
      { title: "IMPACT", value: "National Innovation" },
      { title: "PERSPECTIVE", value: "Systems Thinking" },
    ],
  },
  {
    id: "06",
    name: "Mr. Deepak",
    role: "Mental Health Storyteller — Chennai Sixty Eight",
    bio: "Stories that normalize difficult conversations and build empathy.",
    image: "/speaker6.svg",
    link: "https://www.instagram.com/chennaisixtyeight?igsh=MXNnNm04dmdhcms0MA==",
    elements: [
      { title: "VOICE", value: "Mental Health Advocacy" },
      { title: "CRAFT", value: "Storytelling • Theatre" },
      { title: "IMPACT", value: "Community Awareness" },
      { title: "PERSPECTIVE", value: "Lived Experience" },
    ],
  },
];

/* --------------------------------------------------
   COMPONENT
-------------------------------------------------- */

function ElementCard({ title, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/45 backdrop-blur-xl p-4 hover:border-red-500/50 transition">
      <p className="text-[11px] tracking-[0.28em] text-red-500 uppercase">
        {title}
      </p>
      <p className="mt-2 text-sm font-medium text-white/90">{value}</p>
    </div>
  );
}

export default function Orbit() {
  const [active, setActive] = useState(SPEAKERS[0]);
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      variants={container}
      initial="hidden"
      animate="show"
      className="min-h-screen bg-[#050505] text-white overflow-hidden relative"
    >
      {/* GLOWS */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-red-600/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-60 -left-40 h-[520px] w-[520px] rounded-full bg-red-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1200px] px-4 py-14">

        {/* HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
          <motion.div variants={slideLeft}>
            <p className="text-xs tracking-[0.35em] text-white/60 uppercase">
              <span className="text-red-500 mr-1">●</span>
              TEDx Sairam · Speakers
            </p>

            <h1 className="mt-3 text-4xl sm:text-5xl font-semibold">
              Voices <span className="text-red-500">That Matter</span>
            </h1>

            <p className="mt-4 text-white/65 max-w-[70ch]">
              Introducing the speakers who bring stories, science, creativity,
              and courage to the TEDxSairam stage.
            </p>
          </motion.div>

          {/* QUOTE */}
          <motion.div
            variants={slideRight}
            className="relative rounded-3xl border border-white/10 bg-black/45 backdrop-blur-xl px-8 py-7"
          >
            <div className="absolute -top-10 -right-10 h-40 w-40 bg-red-600/25 blur-3xl" />
            <p className="text-2xl sm:text-3xl italic leading-snug font-medium">
              “There’s zero correlation between being the best talker and having
              the best ideas.”
            </p>
            <p className="mt-4 text-sm tracking-widest uppercase text-red-500 font-semibold">
              — Susan Cain
            </p>
          </motion.div>
        </div>

        {/* CONTENT */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-6">

          {/* GRID */}
          <motion.div
            variants={container}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {SPEAKERS.map((s) => (
              <motion.button
                key={s.id}
                variants={fadeUp}
                onClick={() => setActive(s)}
                className={
                  active.id === s.id
                    ? "rounded-3xl border border-red-500/70 shadow-[0_0_25px_rgba(239,68,68,0.45)] overflow-hidden text-left"
                    : "rounded-3xl border border-white/10 hover:border-red-500/60 overflow-hidden text-left"
                }
              >
                <div className="relative h-[160px] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />
                </div>
                <div className="p-4">
                  <p className="font-semibold">{s.name}</p>
                  <p className="text-sm text-white/60">{s.role}</p>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* DETAIL PANEL */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -35 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl border border-white/10 bg-black/45 backdrop-blur-xl p-7"
            >
              <div className="relative h-[260px] rounded-3xl overflow-hidden border border-white/10">
                <img
                  src={active.image}
                  alt={active.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <h2 className="mt-5 text-3xl font-semibold">
                {active.name}
              </h2>

              <p className="mt-1 text-red-500 font-medium">
                {active.role}
              </p>

              <p className="mt-4 text-sm text-white/65">
                {active.bio}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {active.elements.map((el) => (
                  <ElementCard key={el.title} {...el} />
                ))}
              </div>

              <a
                href={active.link}
                target="_blank"
                rel="noreferrer"
                className="mt-6 block w-full text-center rounded-xl border border-red-500 bg-red-500/10 backdrop-blur-xl py-3 font-semibold text-white hover:bg-white/20 hover:border-white transition"
              >
                Learn More
              </a>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.p
          variants={fadeUp}
          className="mt-12 text-xs text-white/45 italic text-center"
        >
          ⚠️ Warning: exposure to powerful ideas may permanently expand your perspective.
        </motion.p>
      </div>
    </motion.div>
  );
}
