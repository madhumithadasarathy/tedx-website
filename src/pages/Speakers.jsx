export default function Speakers() {
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
        {/* TEXT CONTENT */}
        <div
          className="
            relative z-20
            flex flex-col items-center text-center

            translate-y-6
            lg:-translate-y-20
          "
        >
          {/* CAPTION */}
          <p
            className="
              text-xs
              sm:text-sm
              md:text-base
              tracking-[0.45em]
              uppercase
              text-black/70
              mt-2
            "
          >
            Meet the minds behind the ideas.
          </p>

          {/* HERO WORD */}
          <h1
            className="
              font-anton
              text-red-600
              leading-none

              text-[clamp(5.8rem,18vw,22rem)]
            "
          >
            INNOVATORS
          </h1>
        </div>

        {/* GUEST IMAGE */}
        <img
          src="/speakers.svg"
          alt="Guest silhouettes"
          className="
            pointer-events-none
            absolute
            bottom-0
            left-1/2
            -translate-x-1/2
            select-none
            z-30
            brightness-75
            contrast-125
            sharpness-150
            w-[96%]
            sm:w-[92%]
            md:w-[87%]

            lg:w-[82%]
            xl:w-[78%]
            2xl:w-[75%]

            max-w-[1800px]
          "
        />
      </section>
    </main>
  );
}
