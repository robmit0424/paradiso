import MembershipHero from "@/components/membership/MembershipHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paradiso | Membership",
  description:
    "Join Paradiso Club: exclusive membership benefits, unlimited pool & fitness access, priority dining, member events, and guest privileges.",
};

export default function Membership() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      <MembershipHero />
    </div>
  );
}
