import { Metadata } from "next";
import HomeHero from "@/components/home/HomeHero";
import BackgroundCard from "@/components/common/BackgroundCard";
import HeroSection from "@/components/layout/HeroSection";
import GeneralSection from "@/components/layout/GeneralSection";

export const metadata: Metadata = {
  title: "Paradiso | Home",
  description:
    "Paradiso is a high-end, immersive, and fully functional club experience. Explore tropical luxury, seamless booking, food ordering, membership management, and engaging visuals—all in one core business hub.",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      <HeroSection backgroundImage="/homehero.jpg">
        <HomeHero />
      </HeroSection>
      <GeneralSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
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
      </GeneralSection>
    </div>
  );
}
