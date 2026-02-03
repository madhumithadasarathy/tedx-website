import React from "react";

function Sponsors() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/broke.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Optional overlay (remove if you don't want darkening) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content Layer */}

    </section>
  );
}

export default Sponsors;
