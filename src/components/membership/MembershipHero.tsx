import React from "react";
import HeroSection from "../layout/HeroSection";

function MembershipHero() {
  const benefits = [
    "Unlimited pool & fitness access",
    "Priority dining reservations",
    "Exclusive member events",
    "Guest privileges",
    "Cabana booking discounts",
  ];

  return (
    <HeroSection backgroundImage="/grid_images/group_outside.jpeg">
      <section className="w-full px-8 py-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">
              Join the Club
            </h1>
            <h3 className="font-medium md:text-2xl text-white/90 mb-8 max-w-xl drop-shadow">
              Become part of North Charleston&apos;s most exclusive social
              destination. Where every day feels like a vacation.
            </h3>

            <div className="text-white space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full flex-shrink-0" />
                  <span className="text-lg font-sans drop-shadow">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-6 font-heading">
                Membership Options
              </h3>

              <div className="space-y-6">
                <div className="border-b border-white/20 pb-4">
                  <h4 className="text-lg font-medium text-white mb-2">
                    Individual
                  </h4>
                  <p className="text-white/80 font-sans">
                    Perfect for the solo adventurer
                  </p>
                </div>

                <div className="border-b border-white/20 pb-4">
                  <h4 className="text-lg font-medium text-white mb-2">Dual</h4>
                  <p className="text-white/80 font-sans">
                    Ideal for couples and partners
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-white mb-2">
                    Family
                  </h4>
                  <p className="text-white/80 font-sans">
                    Complete access for the whole family
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HeroSection>
  );
}

export default MembershipHero; 