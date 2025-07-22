import React from "react";
import HeroSection from "../layout/HeroSection";

function DineHero() {
  return (
    <HeroSection backgroundImage="/grid_images/large_group_table.jpeg">
      <section className="w-full px-8 py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">
            Dine at Paradiso
          </h1>
          <h3 className="font-medium md:text-2xl text-white/90 mb-8 max-w-xl drop-shadow">
            Experience tropical luxury dining, poolside service, and vibrant
            flavors in a setting like no other.
          </h3>
        </div>
      </section>
    </HeroSection>
  );
}

export default DineHero;
