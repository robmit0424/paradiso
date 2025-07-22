"use client";
import { motion } from "framer-motion";
import GeneralSection from "../layout/GeneralSection";

const RestaurantOverview = () => {
  const features = [
    {
      icon: "🏊‍♀️",
      title: "Swim-Up Bar",
      description: "Order drinks without leaving the pool",
    },
    {
      icon: "🌮",
      title: "Poolside Bites",
      description: "Fresh, light meals perfect for day drinking",
    },
    {
      icon: "🍹",
      title: "Tropical Cocktails",
      description: "Instagram-worthy drinks that taste as good as they look",
    },
    {
      icon: "🌴",
      title: "Cabana Service",
      description: "VIP dining delivered to your private cabana",
    },
  ];

  return (
    <GeneralSection className="py-20 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left side - Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-[#1ACAD4] font-semibold text-sm uppercase tracking-wide mb-3 font-sans">
              Pool Club Eats
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-gray-900 mb-6 leading-tight">
              Fuel Your Day Club Experience
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 font-sans">
              From sunrise mimosas to sunset cocktails, our poolside kitchen
              serves up fresh, shareable bites and tropical drinks designed to
              keep you in vacation mode all day long.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="text-3xl flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="font-heading font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm font-sans">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Right side - Images */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5]">
                <img
                  src="/grid_images/large_group_table.jpeg"
                  alt="Poolside dining"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative overflow-hidden rounded-2xl aspect-square">
                <img
                  src="/grid_images/charcuterie.jpeg"
                  alt="Fresh tacos"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative overflow-hidden rounded-2xl aspect-square">
                <img
                  src="/grid_images/drink_cheers.jpeg"
                  alt="Tropical cocktails"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5]">
                <img
                  src="/grid_images/opening_bottle.jpeg"
                  alt="Swim-up bar"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
          {/* Floating element */}
          <motion.div
            className="absolute -top-4 -left-4 bg-[#ec9aad] text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg font-[family-name:var(--font-silverstreak)]"
            animate={{
              y: [0, -10, 0],
              rotate: [0, -2, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            Day Club Vibes
          </motion.div>
        </div>
      </div>
    </GeneralSection>
  );
};

export default RestaurantOverview;
