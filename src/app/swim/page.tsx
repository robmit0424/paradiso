import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paradiso | Swim",
  description:
    "Swim at Paradiso: enjoy the pool, amenities, cabana rentals, ResortPass, daypass info, waiver automation, and events & catering in a tropical luxury setting.",
};

export default function Swim() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <p>Swim</p>
      </main>
    </div>
  );
}
