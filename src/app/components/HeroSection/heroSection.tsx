import { ColouredButton } from "@/app/ui/button";
import React from "react";

const HeroSection = () => {
  return (
    <div id="hero-section" className="h-[800px] w-full relative flex justify-center">
      <video
        className="w-full h-full"
        autoPlay
        loop
        muted
        playsInline
        src="/assets/hero-section-video.mp4"
      ></video>

      <div className="absolute top-[486px] w-[672px] flex justify-center flex-col gap-y-9">
        <div>
          <p className="text-5xl flex justify-center font-bold font-cormorant">
            Glide Beyond the Usual.
          </p>
          <p className="text-lg font-normal p-4 text-center font-inter">
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
