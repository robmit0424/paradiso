"use client";
import { motion } from "framer-motion";
import GeneralSection from "../layout/GeneralSection";

const FitnessWellnessOverview = () => {
  const features = [
    {
      icon: "/icons/pink/muscle.svg",
      title: "State-of-the-Art Gym",
      description: "Premium equipment and tropical views while you work out",
    },
    {
      icon: "/icons/pink/meditation.svg",
      title: "Wellness Center",
      description: "Yoga, meditation, and mindfulness in paradise",
    },
    {
      icon: "/icons/pink/running.svg",
      title: "Group Fitness",
      description: "High-energy classes with certified trainers",
    },
    {
      icon: "/icons/pink/sunrise.svg",
      title: "Outdoor Workouts",
      description: "Train under the sky with poolside fitness sessions",
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
              Fitness & Wellness
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-gray-900 mb-6 leading-tight">
              Elevate Your Mind & Body
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 font-sans">
              Transform your workout routine in our tropical fitness sanctuary.
              From sunrise yoga sessions to high-intensity group classes, 
              discover wellness that feels like vacation.
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
                <div className="flex-shrink-0">
                  <img src={feature.icon} alt={feature.title} className="w-8 h-8" />
                </div>
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
                  src="/grid_images/yoga_group.jpeg"
                  alt="Group yoga session"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative overflow-hidden rounded-2xl aspect-square">
                <img
                  src="/grid_images/thinking_outside.jpeg"
                  alt="Outdoor meditation"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative overflow-hidden rounded-2xl aspect-square">
                <img
                  src="/grid_images/squatting.jpeg"
                  alt="Fitness training"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5]">
                <img
                  src="/grid_images/group_outside.jpeg"
                  alt="Group fitness class"
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
            Wellness Vibes
          </motion.div>
        </div>
      </div>
    </GeneralSection>
  );
};

export default FitnessWellnessOverview;