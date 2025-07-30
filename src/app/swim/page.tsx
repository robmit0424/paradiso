import SwimHero from "@/components/swim/SwimHero";
import SwimOverview from "@/components/swim/SwimOverview";
import SwimExperiences from "@/components/swim/SwimExperiences";
import PoolAmenities from "@/components/swim/PoolAmenities";
import PoolsideService from "@/components/swim/PoolsideService";
import BookingCTA from "@/components/swim/BookingCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paradiso | Swim",
  description:
    "Swim at Paradiso: enjoy the pool, amenities, cabana rentals, daypass info, and events & catering in a tropical luxury setting.",
};

export default function Swim() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      <SwimHero />
      <SwimOverview />
      <SwimExperiences />
      <PoolAmenities />
      <PoolsideService />
      <BookingCTA />
    </div>
  );
}
