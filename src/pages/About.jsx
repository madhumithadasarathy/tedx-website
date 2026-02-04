import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  Lightbulb,
  Mic2,
  School,
  Sparkles,
  Users,
} from "lucide-react";

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
      {/* ================= HERO ================= */}
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
          style={{ backgroundImage: "url('/aboutbg.jpg')", scale: bgScale }}
          className="absolute inset-0 bg-cover bg-center"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />

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

        <motion.div
          style={{ y: textY, opacity: opacityFade }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.8 }}
          className="relative z-20 w-full h-full flex items-center justify-center px-6"
        >
          <div className="text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4 }}
              className="tracking-[0.25em] text-xs text-red-400 mb-5"
            >
              ENTER THE FUTURE OF IDEAS
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: false }}
              transition={{ delay: 0.7, duration: 1.8 }}
              className="text-4xl sm:text-6xl md:text-7xl uppercase tracking-[10px]"
            >
              Intelligence Reimagined
            </motion.h1>

            {/* Expanded hero content */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 1.2, duration: 1.6 }}
              className="mt-8 text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed"
            >
              Where imagination meets intelligence, and ideas are shaped into
              powerful narratives. A space where thinkers challenge conventions,
              perspectives collide, and conversations extend far beyond the
              stage—igniting curiosity, reflection, and change.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 1.8 }}
              className="mt-12 flex flex-col items-center"
            >
              <span className="text-[10px] tracking-widest text-gray-400">
                SCROLL TO EXPLORE
              </span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="mt-2 w-[2px] h-12 bg-gradient-to-b from-red-600 to-transparent"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ================= SECTION 2 ================= */}
      <section className="relative w-full h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="/clg.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/80" />
        </div>

        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 grid grid-rows-[1fr_auto] py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.2 }}
              className="max-w-xl"
            >
              <span className="text-xs tracking-[0.35em] text-red-500">
                ABOUT TEDxSEC
              </span>

              <h2 className="mt-4 text-4xl sm:text-5xl font-semibold">
                Where Knowledge Meets
                <span className="text-red-600"> Ideas Worth Spreading</span>
              </h2>

              <p className="mt-6 text-gray-300 text-lg leading-relaxed">
                TEDx Sri Sairam Engineering College is an independently organized
                TEDx event that bridges academic excellence with transformative
                ideas, bringing thinkers, innovators, and storytellers together
                to inspire meaningful change.
              </p>
            </motion.div>

            <div className="flex flex-col gap-4">
              {[
                {
                  icon: Lightbulb,
                  title: "Curated Ideas",
                  text: "Thought-provoking talks that challenge perspectives and assumptions.",
                },
                {
                  icon: Mic2,
                  title: "Diverse Voices",
                  text: "Authentic stories and insights from multiple domains.",
                },
                {
                  icon: School,
                  title: "Academic Roots",
                  text: "Grounded in the culture of Sri Sairam Engineering College.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: i * 0.2, duration: 1 }}
                  className="rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 p-5"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <item.icon className="text-red-600" size={22} />
                    <h4 className="text-sm font-medium text-red-500">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-300">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.2 }}
            className="mt-12 max-w-4xl relative pl-6"
          >
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
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 3 ================= */}
      <section className="relative w-full min-h-screen bg-black text-white overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-red-600/25 rounded-full blur-[180px]" />
          <div className="absolute bottom-[-200px] right-1/4 w-[620px] h-[620px] bg-red-600/15 rounded-full blur-[220px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <span className="text-xs tracking-[0.35em] text-red-500">
              THE EVENT
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-semibold">
              What’s in Store at <span className="text-red-600">TEDxSEC</span>
            </h2>
            <p className="mt-6 text-gray-300 text-lg">
              A carefully crafted convergence of ideas, people, and experiences
              designed to inspire thought and conversation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Mic2,
                title: "Talks & Performances",
                text: "Powerful TED-style talks and creative performances delivered with clarity and intent.",
                style:
                  "bg-black/65 border border-red-500/25 text-red-500",
              },
              {
                icon: Users,
                title: "People & Perspectives",
                text: "A diverse gathering of thinkers, creators, and innovators sharing the same space.",
                style:
                  "bg-red-600/65 border border-red-300/35 text-white",
              },
              {
                icon: Sparkles,
                title: "The Experience",
                text: "An atmosphere designed for reflection, dialogue, and inspiration beyond the stage.",
                style:
                  "bg-white/65 border border-black/15 text-black",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.2, duration: 1 }}
                className={`rounded-2xl backdrop-blur-2xl p-8 text-center ${item.style}`}
              >
                <item.icon
                  className="mx-auto mb-6"
                  size={32}
                />
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed opacity-80">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= SECTION 4 : OUR TEAM ================= */}
<section className="relative w-full bg-black text-white py-20 overflow-hidden">
  {/* Background accent */}
  <div className="absolute inset-0">
    <div className="absolute -top-28 left-1/3 w-[520px] h-[520px] bg-red-600/14 rounded-full blur-[220px]" />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-6">
    {/* Title */}
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12"
    >
      <span className="text-xs tracking-[0.35em] text-red-500">
        OUR TEAM
      </span>

      <h2 className="mt-3 text-4xl uppercase tracking-widest sm:text-5xl font-medium">
        The People Behind <span className="text-red-600">TEDxSEC</span>
      </h2>

      <p className="mt-3 text-gray-300 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
        A committed team working together behind the scenes to shape ideas,
        experiences, and conversations worth spreading.
      </p>
    </motion.div>
{/* Team Grid */}
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-3 gap-y-5">
  {[
    ["Sri Raman M", "Curator", "sriraman.svg"],
    ["Kanish R B", "Co Curator", "kanish.svg"],
    ["Dheena Dhayalan R", "Designer", "dheena.svg"],
    ["Tharushi S S", "Creative Team", "tharushi.svg"],
    ["Pragati", "Creative Team", "pragati.svg"],

    ["Tamilvani A S", "Hospitality Team", "tamilvani.svg"],
    ["Abirami S", "Hospitality Team", "abirami.svg"],
    ["Naveen M", "Hospitality Team", "naveen.svg"],

    ["Gowtham P N", "Logistics Team", "gowtham.svg"],
    ["Surya S", "Logistics Team", "surya.svg"],

    ["Tharunkarthi G", "Production Team", "tharunkarthi.svg"],
    ["Srikanth V T", "Production Team", "srikanth.svg"],

    ["Anjali", "MC Team", "anjali.svg"],
    ["Akshaya", "MC Team", "akshaya.svg"],

    ["Karthik Vendhan", "Video Team", "karthik.svg"],
    ["Pavithran M", "Video Team", "pavithran.svg"],

    ["Madumitha I V", "Executive Team", "madumitha.svg"],
    ["Ruthi Shankari S", "Executive Team", "ruthi.svg"],

    // 🔥 LAST & CENTERED
    ["Madhumitha Dasarathy", "Developer", "madhumitha.svg"],
  ].map(([name, role, img], i, arr) => {
    const isLast = i === arr.length - 1;

    return (
      <motion.div
        key={name}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ delay: i * 0.025, duration: 0.6 }}
        className={
          isLast
            ? "col-span-full flex justify-center"
            : "text-center"
        }
      >
        <div className="text-center">
          <img
            src={`/team-members/${img}`}
            alt={name}
            className="
              w-40 h-40
              mx-auto
              rounded-xl
              mb-1.5
              object-contain
              bg-white/10
              p-2
            "
          />

          <h4 className="text-xs font-medium leading-tight">
            {name}
          </h4>

          <p className="text-[10px] text-red-500 mt-0.5">
            {role}
          </p>
        </div>
      </motion.div>
    );
  })}
</div>

  </div>
</section>

{/* ================= SECTION 4 : EVENT MILESTONES ================= */}
<section className="relative w-full min-h-screen bg-black text-white overflow-hidden flex items-center">
  {/* Background glow */}
  <div className="absolute inset-0">
    <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-red-600/20 rounded-full blur-[200px]" />
    <div className="absolute bottom-[-200px] right-1/4 w-[620px] h-[620px] bg-red-600/15 rounded-full blur-[240px]" />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

      {/* LEFT : TEXT BLOCK */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
        className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left"
      >
        <span className="text-xs tracking-[0.35em] text-red-500">
          EVENT MILESTONES
        </span>

        <h2 className="mt-4 text-4xl sm:text-5xl font-semibold leading-tight">
          The Journey to{" "}
          <span className="text-red-600">TEDxSEC</span>
        </h2>

        <p className="mt-6 text-gray-300 text-base sm:text-lg leading-relaxed">
          A clearly defined progression leading up to a day of ideas,
          conversations, and experiences designed to leave a lasting
          impact. Each phase brings us closer to the moment where ideas
          take the stage.
        </p>
      </motion.div>

      {/* RIGHT : CONNECTED MILESTONES */}
      <div className="relative flex flex-col gap-8 max-w-xl mx-auto lg:mx-0">
        {[
          {
            phase: "REGISTRATION OPENS",
            date: "04 FEB",
            desc:
              "Registrations are now open for individuals eager to engage with ideas that challenge and inspire.",
          },
          {
            phase: "REGISTRATION CLOSES",
            date: "11 FEB",
            desc:
              "Registrations conclude as we finalize speakers, sessions, and the experience.",
          },
          {
            phase: "EVENT DAY",
            date: "14 FEB",
            desc:
              "TEDx Sri Sairam Engineering College comes alive with talks, performances, and shared perspectives.",
          },
        ].map((item, i) => (
          <motion.div
            key={item.phase}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: i * 0.15, duration: 0.9 }}
            className="relative"
          >
            {/* Connector line (desktop only) */}
            {i < 2 && (
              <div className="hidden lg:block absolute left-6 top-full h-8 w-[2px] bg-gradient-to-b from-red-600/60 to-transparent" />
            )}

            <div className="relative rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 p-5 pl-9">
              {/* Dot */}
              <div className="absolute left-4 top-5 w-2.5 h-2.5 rounded-full bg-red-600" />

              <div className="text-[10px] tracking-[0.3em] text-red-500 mb-1">
                {item.phase}
              </div>

              <div className="text-lg sm:text-xl font-semibold mb-2">
                {item.date}
              </div>

              <p className="text-[13px] text-gray-300 leading-snug">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  </div>
</section>




    </>
  );
}
