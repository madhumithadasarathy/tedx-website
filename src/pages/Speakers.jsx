export default function Speakers() {
  return (
    <main className="w-full">
      {/* FULL SCREEN HERO */}
      <section
        className="relative h-[100svh] w-full flex items-center justify-center overflow-hidden"
        style={{
          background: `
            radial-gradient(
              circle at center,
              #ffffff 0%,
              #ffffff 45%,
              #f3f3f3 65%,
              #e6e6e6 85%,
              #dcdcdc 100%
            )
          `,
        }}
      >
        {/* CONTENT */}
        <div className="relative z-10 text-center px-6">
          {/* ONE WORD */}
          <h1 className="text-[clamp(3.5rem,10vw,7rem)] font-extrabold tracking-[0.3em] text-black">
            VOICES
          </h1>

          {/* CAPTION */}
          <p className="mt-6 text-sm md:text-base tracking-[0.35em] text-black/70 uppercase">
            Ideas worth hearing
          </p>
        </div>
      </section>
    </main>
  );
}
