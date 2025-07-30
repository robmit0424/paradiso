"use client";
import { motion } from "framer-motion";
import DrawOutlineButton from "../common/DrawOutlineButton";
import GeneralSection from "../layout/GeneralSection";

const MembershipTiers = () => {
  const tiers = [
    {
      name: "Individual",
      price: "$150",
      period: "per month",
      description: "Perfect for the solo adventurer seeking tropical luxury",
      features: [
        "Unlimited pool & fitness access",
        "Priority dining reservations", 
        "2 guest passes per month",
        "Access to member events",
        "10% discount on food & drinks",
      ],
      popular: false,
      gradient: "from-[#1ACAD4] to-[#16a6b3]",
    },
    {
      name: "Dual",
      price: "$250",
      period: "per month",
      description: "Ideal for couples and partners sharing the paradise",
      features: [
        "2 full memberships included",
        "Unlimited pool & fitness access",
        "Priority dining for 2",
        "4 guest passes per month", 
        "15% discount on food & drinks",
        "Preferred cabana booking",
      ],
      popular: true,
      gradient: "from-[#ec9aad] to-[#e88099]",
    },
    {
      name: "Family",
      price: "$400",
      period: "per month",
      description: "Complete access for the whole family to enjoy",
      features: [
        "Up to 4 family members",
        "Unlimited pool & fitness access",
        "Family dining priority",
        "8 guest passes per month",
        "20% discount on food & drinks",
        "Free cabana rental (1x monthly)",
      ],
      popular: false,
      gradient: "from-[#1ACAD4] to-[#ec9aad]",
    },
  ];

  return (
    <GeneralSection className="py-20 bg-white">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-[#1ACAD4] font-semibold text-sm uppercase tracking-wide mb-3 font-sans">
            Membership Tiers
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-gray-900 mb-6">
            Choose Your Paradise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans">
            Select the membership that fits your lifestyle. All plans include 
            full access to our tropical oasis and exclusive member benefits.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {tiers.map((tier, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative group ${
              tier.popular ? "lg:scale-105 lg:-mt-4" : ""
            }`}
          >
            {tier.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#ec9aad] to-[#1ACAD4] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg font-sans">
                Most Popular
              </div>
            )}

            <div className={`bg-gradient-to-br ${tier.gradient} rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-105 h-full flex flex-col`}>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-heading font-bold mb-2">
                  {tier.name}
                </h3>
                <p className="text-white/90 font-sans text-sm mb-4">
                  {tier.description}
                </p>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-white/80 font-sans text-sm ml-2">
                    {tier.period}
                  </span>
                </div>
              </div>

              <div className="flex-grow">
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full flex-shrink-0 mt-2" />
                      <span className="text-white/90 font-sans text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4">
                <DrawOutlineButton className="w-full text-white border-white hover:bg-white hover:text-gray-900">
                  Choose {tier.name}
                </DrawOutlineButton>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-white/20 rounded-full blur-sm"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-white/30 rounded-full blur-sm"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </GeneralSection>
  );
};

export default MembershipTiers;