import { ColouredButton } from "@/app/ui/button";
import React from "react";

const HeroSection = () => {
  return (
    <div id="hero-section" className="h-[680px] md:h-[800px] w-full relative flex justify-center">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="/assets/hero-section-video.mp4"
      ></video>
      <div className="absolute inset-0 bg-black/40 z-10" />

      <div className="absolute z-20 top-[400px] md:top-[486px] w-[300px] md:w-[672px] flex justify-center flex-col gap-y-4 md:gap-y-9">
        <div>
          <p className="text-3xl md:text-5xl flex justify-center font-bold font-cormorant text-white">
            Glide Beyond the Usual.
          </p>
          <p className="text-xs md:text-lg font-normal p-4 text-center font-inter text-white">
            Discover Drift — a premium sneaker brand redefining comfort and style for the modern
            explorer. Designed for all-day wear, our shoes blend streetwise aesthetics with
            performance-driven innovation.
          </p>
        </div>
        <div className="flex justify-center">
          <ColouredButton buttonText="Explore" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
