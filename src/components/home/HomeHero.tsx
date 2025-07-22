import React from "react";
import CTAButton from "../common/CTAButton";
import HeroSection from "../layout/HeroSection";

const HomeHero = () => {
  return (
    <HeroSection backgroundImage="/homehero.jpg">
      <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
        <div>
          <h3 className="block mb-1 text-xs md:text-lg font-medium text-[var(--color-secondary)] drop-shadow-md">
            Dine + Swim + Vibe
          </h3>
          <h1 className="text-4xl md:text-6xl font-semibold text-white drop-shadow-lg">
            North Charleston’s premiere social club
          </h1>

          <div className="flex gap-4 mt-8">
            <CTAButton text="Learn More" />
            <CTAButton text="Join the club" isSecondaryButton />
          </div>
        </div>
      </section>
    </HeroSection>
  );
};

export default HomeHero;
