import { Metadata } from "next";
import HomeHero from "@/components/home/HomeHero";
import HomeCards from "@/components/home/HomeCards";

export const metadata: Metadata = {
  title: "Paradiso | Home",
  description:
    "Paradiso is a high-end, immersive, and fully functional club experience. Explore tropical luxury, seamless booking, food ordering, membership management, and engaging visuals—all in one core business hub.",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      <HomeHero />
      <HomeCards />
    </div>
  );
}
