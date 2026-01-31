export default function Speakers() {
  return (
    <main className="w-full">
      <section
        className="h-[100svh] flex flex-col items-center justify-center text-center"
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
        {/* CAPTION */}
        <p className="mb-2 font-bold text-sm md:text-base tracking-[0.45em] uppercase text-black/70">
          Meet the minds behind the ideas.
        </p>

        {/* HERO WORD */}
        <h1 className="font-anton text-red-600 leading-none text-[clamp(6rem,18vw,20rem)]">
          INNOVATORS
        </h1>
      </section>
    </main>
  );
}
