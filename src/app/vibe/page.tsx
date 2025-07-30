import VibeHero from "@/components/vibe/VibeHero";
import FitnessWellnessOverview from "@/components/vibe/FitnessWellnessOverview";
import GroupClasses from "@/components/vibe/GroupClasses";
import SocialEvents from "@/components/vibe/SocialEvents";
import JoinClassCTA from "@/components/vibe/JoinClassCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paradiso | Vibe",
  description:
    "Experience the vibe at Paradiso: fitness & wellness center, group classes, social events, and lifestyle photos & videos. Join a class and feel the energy.",
};

export default function Vibe() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      <VibeHero />
      <FitnessWellnessOverview />
      <GroupClasses />
      <SocialEvents />
      <JoinClassCTA />
    </div>
  );
}
