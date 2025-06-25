import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paradiso | Dine",
  description:
    "Discover Paradiso's restaurant: new food & cocktail photography, poolside service, sample menu, and easy reservations. Sip. Relax. Enjoy tropical luxury dining.",
};

export default function Dine() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <p>Dine</p>
      </main>
    </div>
  );
}
