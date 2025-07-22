import DineHero from "@/components/dine/DineHero";
import DiningExperiences from "@/components/dine/DiningExperiences";
import MenuHighlights from "@/components/dine/MenuHighlights";
import PoolsideService from "@/components/dine/PoolsideService";
import ReservationCTA from "@/components/dine/ReservationCTA";
import RestaurantOverview from "@/components/dine/ResturauntOverview";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paradiso | Dine",
  description:
    "Discover Paradiso's restaurant: new food & cocktail photography, poolside service, sample menu, and easy reservations. Sip. Relax. Enjoy tropical luxury dining.",
};

export default function Dine() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      <DineHero />
      <RestaurantOverview />
      <DiningExperiences />
      <MenuHighlights />
      <PoolsideService />
      <ReservationCTA />
    </div>
  );
}
