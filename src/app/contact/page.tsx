import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paradiso | Contact",
  description:
    "Contact Paradiso: find basic info, map, contact form, social links, and FAQs about waivers, daypass policy, pets, and more.",
};

export default function Contact() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <p>contact</p>
      </main>
    </div>
  );
}
