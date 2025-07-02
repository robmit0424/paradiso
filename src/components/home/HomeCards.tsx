import React from "react";
import GeneralSection from "../layout/GeneralSection";
import BackgroundCard from "../common/BackgroundCard";

function HomeCards() {
  return (
    <GeneralSection>
      <div className="relative w-full">
        {/* Centered Leaf Background */}
        <img
          src="/leaf.png"
          alt="Decorative leaf"
          className="absolute left-1/2 top-1/2 w-80 md:w-[32rem] opacity-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 object-contain"
          style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.08))" }}
        />
        {/* Card Grid */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          <BackgroundCard
            headerText="Dine"
            backgroundImage={"/grid_images/large_group_table.jpeg"}
            hoverBackgroundImage={"/grid_images/thinking_outside.jpeg"}
          />
          <BackgroundCard
            headerText="Swim"
            backgroundImage={"/grid_images/group_outside.jpeg"}
            hoverBackgroundImage={"/grid_images/paradiso_sign.jpeg"}
          />
          <BackgroundCard
            headerText="Vibe"
            backgroundImage={"/grid_images/charcuterie.jpeg"}
            hoverBackgroundImage={"/grid_images/opening_bottle.jpeg"}
          />
          <BackgroundCard
            headerText="Market"
            backgroundImage={"/grid_images/squatting.jpeg"}
            hoverBackgroundImage={"/grid_images/drink_cheers.jpeg"}
          />
        </div>
      </div>
    </GeneralSection>
  );
}

export default HomeCards;
