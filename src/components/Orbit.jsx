import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Activity, Brain, Flame } from "lucide-react";

const RED = "#e10600";

/* ============================
   ASSETS
============================ */
const SPEAKER_IMAGES = [
  "/speaker1.svg",
  "/speaker2.svg",
  "/speaker3.svg",
  "/speaker4.svg",
  "/speaker5.svg",
  "/speaker6.svg",
];

/* ============================
   ORBIT MATH
============================ */
function computeOrbitNodes(count) {
  const r = 135;
  const cx = 180;
  const cy = 180;

  return Array.from({ length: count }).map((_, i) => {
    const a = (Math.PI * 2 * i) / count - Math.PI / 2;
    return {
      x: cx + r * Math.cos(a),
      y: cy + r * Math.sin(a),
    };
  });
}

/* ============================
   METRIC
============================ */
function Metric({ icon, label }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
      <div className="flex items-center gap-2 text-xs text-white/70 mb-2">
        {icon}
        {label}
      </div>
      <div className="flex gap-1 items-end">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className={`w-[4px] rounded-full ${
              Math.random() > 0.5
                ? "h-6 bg-red-600"
                : "h-4 bg-white/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ============================
   MAIN PAGE
============================ */
export default function Orbit() {
  const [index, setIndex] = useState(0);

  const speakers = [
    {
      name: "Ms. Mercy John",
      role: "Podcaster & RJ",
      bio: "Believes in the power of conversation to inspire and connect.",
      image: SPEAKER_IMAGES[0],
    },
    {
      name: "Mr. Prasanna Venkatesh",
      role: "Photographer & Digital Creator",
      bio: "Capturing emotion, culture and identity through imagery.",
      image: SPEAKER_IMAGES[1],
    },
    {
      name: "Mr. Sambashiva Srisailapathy",
      role: "Head – Regional Key Accounts · Grab",
      bio: "Driving strategic partnerships across regional ecosystems.",
      image: SPEAKER_IMAGES[2],
    },
    {
      name: "Ms. Drishyaa Dugaal",
      role: "AI & Cybersecurity Psychologist",
      bio: "Exploring intelligence, safety and human behaviour.",
      image: SPEAKER_IMAGES[3],
    },
    {
      name: "Mr. Sanjay",
      role: "Scientist · DRDO",
      bio: "Advanced technology development for national security.",
      image: SPEAKER_IMAGES[4],
    },
    {
      name: "Mr. Deepak",
      role: "Mental Health Storyteller",
      bio: "Breaking stigma through lived experiences.",
      image: SPEAKER_IMAGES[5],
    },
  ];

  const active = speakers[index];
  const nodes = useMemo(
    () => computeOrbitNodes(speakers.length),
    [speakers.length]
  );

  return (
    <section className="min-h-screen bg-black px-6 py-8 flex flex-col">

      {/* ======================
          BENTO DASHBOARD
      ====================== */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-12 gap-6 flex-grow">

        {/* LEFT — ORBIT */}
        <div className="col-span-12 lg:col-span-6 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 flex items-center justify-center">

          <div className="relative w-[360px] h-[360px]">

            <motion.div
              className="absolute inset-0 rounded-full blur-3xl opacity-30"
              style={{
                background: `radial-gradient(circle, ${RED}, transparent 70%)`,
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />

            <div className="absolute inset-0 rounded-full border border-white/10" />
            <div className="absolute inset-[40px] rounded-full border border-white/10" />

            {nodes.map((p, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                style={{ left: p.x, top: p.y }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 px-3 py-2 rounded-lg border text-[10px]
                  ${
                    index === i
                      ? "border-red-600 bg-red-600/20"
                      : "border-white/10 bg-white/5 hover:bg-white/10"
                  }`}
              >
                <img src={speakers[i].image} className="w-5 h-5 mx-auto" />
                <div className="mt-1 text-white text-center">
                  {speakers[i].name}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT — INFO STACK */}
        <div className="col-span-12 lg:col-span-6 grid grid-rows-[auto_1fr_auto] gap-6">

          {/* HEADER */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6">
            <p className="text-xs tracking-[0.35em] text-white/40 mb-2">
              SPEAKERS
            </p>
            <h2 className="text-3xl font-semibold text-white">
              Orbit the voices
            </h2>
            <p className="text-sm text-white/60 mt-2">
              Six minds. One stage. Infinite perspectives.
            </p>
          </div>

          {/* SPEAKER CARD */}
          <div className="rounded-3xl border border-white/10 bg-[#0b0b0b] p-6 flex gap-6">

            <img
              src={active.image}
              className="w-40 h-40 object-contain"
            />

            <div className="flex flex-col justify-center">
              <h3 className="text-2xl text-white font-semibold">
                {active.name}
              </h3>
              <p className="text-white/60">{active.role}</p>
              <p className="text-sm text-white/60 mt-3 leading-relaxed">
                {active.bio}
              </p>
            </div>
          </div>

          {/* METRICS */}
          <div className="grid grid-cols-3 gap-4">
            <Metric icon={<Activity size={16} />} label="Tech" />
            <Metric icon={<Brain size={16} />} label="Leadership" />
            <Metric icon={<Flame size={16} />} label="Impact" />
          </div>
        </div>
      </div>

      {/* ======================
          CTA SECTION
      ====================== */}
      <section className="mt-8">
        <div
          className="
            max-w-7xl mx-auto
            rounded-[36px]
            border border-white/10
            bg-gradient-to-r
            from-red-900/40
            via-black/80
            to-black
            backdrop-blur-xl
            px-10 py-12
            flex flex-col md:flex-row
            items-center justify-between
            gap-10
          "
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              One stage.{" "}
              <span className="text-red-600">Six voices.</span>{" "}
              Countless ideas.
            </h2>
            <p className="text-sm text-white/60 mt-3 max-w-xl">
              Minimal red. Slow motion. Strong hierarchy.
              Anything extra kills the vibe.
            </p>
          </div>

          <div className="flex flex-col gap-4 min-w-[260px]">
            <button className="h-12 rounded-full bg-red-600/20 border border-red-600/40 text-white hover:bg-red-600/30 transition">
              Attend TEDxSairam
            </button>

            <button className="h-12 rounded-full bg-white/5 border border-white/20 text-white/80 hover:bg-white/10 transition">
              Become a sponsor
            </button>
          </div>
        </div>
      </section>

    </section>
  );
}
