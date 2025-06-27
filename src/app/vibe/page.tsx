import HeroSection from "@/components/layout/HeroSection";
import VibeHero from "@/components/vibe/VibeHero";
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
    </div>
  );
}
