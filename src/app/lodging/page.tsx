import GeneralSection from "@/components/layout/GeneralSection";
import HeroSection from "@/components/layout/HeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paradiso | Lodging",
  description:
    "Discover boutique rooms, private cabanas, and luxury amenities at Paradiso. Stay, relax, and enjoy tropical comfort.",
};

export default function Lodging() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      <HeroSection backgroundImage="/Pdiso-Private-Cabanas.webp">
        <section className="w-full px-8 py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">
              Stay at Paradiso
            </h1>
            <h3 className="font-medium md:text-2xl text-white/90 mb-8 max-w-xl drop-shadow">
              Boutique rooms, private cabanas, and luxury amenities for your
              perfect getaway.
            </h3>
          </div>
        </section>
      </HeroSection>
      <GeneralSection className="py-20 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div>
            <span className="inline-block text-[#1ACAD4] font-semibold text-sm uppercase tracking-wide mb-3 font-sans">
              Lodging & Amenities
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-gray-900 mb-6 leading-tight">
              Your Private Oasis
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 font-sans">
              Enjoy plush bedding, modern comforts, and exclusive access to all
              club amenities. Whether you want a serene escape or a vibrant
              group stay, Paradiso has the perfect space for you.
            </p>
            <ul className="list-disc pl-5 text-base text-gray-700">
              <li>Private cabanas & boutique rooms</li>
              <li>Luxury bedding & spa-inspired bathrooms</li>
              <li>Heated pool & wellness center</li>
              <li>Concierge & room service</li>
            </ul>
          </div>
          {/* Right side - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5]">
                  <img
                    src="/grid_images/Pdiso-Private-Cabanas.webp"
                    alt="Private cabana"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative overflow-hidden rounded-2xl aspect-square">
                  <img
                    src="/grid_images/group_outside.jpeg"
                    alt="Group outside"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative overflow-hidden rounded-2xl aspect-square">
                  <img
                    src="/grid_images/laughing.jpeg"
                    alt="Guests laughing"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5]">
                  <img
                    src="/grid_images/yoga_group.jpeg"
                    alt="Yoga group"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </GeneralSection>
    </div>
  );
}
