import DineHero from "@/components/dine/DineHero";
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
    </div>
  );
}
