import SwimHero from "@/components/swim/SwimHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paradiso | Swim",
  description:
    "Swim at Paradiso: enjoy the pool, amenities, cabana rentals, ResortPass, daypass info, waiver automation, and events & catering in a tropical luxury setting.",
};

export default function Swim() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      <SwimHero />
    </div>
  );
}
