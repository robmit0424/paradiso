import CTAButton from "../common/CTAButton";

const MembershipTeaser = () => {
  const benefits = [
    "Unlimited pool & fitness access",
    "Priority dining reservations",
    "Exclusive member events",
    "Guest privileges",
    "Cabana booking discounts",
  ];

  return (
    <section className="w-full py-20 px-8 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/grid_images/group_outside.jpeg"
          alt="Membership background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#ec9aad]/90 to-[#1ACAD4]/90" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-white text-5xl md:text-6xl font-semibold mb-6 font-heading">
              Join the Club
            </h2>

            <p className="text-white text-xl mb-8 leading-relaxed opacity-95 font-sans">
              Become part of North Charleston's most exclusive social
              destination. Where every day feels like a vacation.
            </p>

            <div className="text-white space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full flex-shrink-0" />
                  <span className="text-lg font-sans">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton text="Become a Member" />
              <CTAButton text="Learn More" isSecondaryButton />
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
      </div>
    </section>
  );
};

export default MembershipTeaser;
