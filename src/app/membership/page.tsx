import ContactHero from "@/components/contact/ContactHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paradiso | Contact",
  description:
    "Contact Paradiso: find basic info, map, contact form, social links, and FAQs about waivers, daypass policy, pets, and more.",
};

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      <ContactHero />
    </div>
  );
}
