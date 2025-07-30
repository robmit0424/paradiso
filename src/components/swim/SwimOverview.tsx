"use client";
import { motion } from "framer-motion";
import GeneralSection from "../layout/GeneralSection";

const SwimOverview = () => {
  const features = [
    {
      icon: "🏊‍♀️",
      title: "Heated Pool",
      description: "Year-round swimming in our tropical oasis",
      gradient: "from-[#1ACAD4] to-[#16a6b3]",
    },
    {
      icon: "🏖️",
      title: "Private Cabanas",
      description: "Luxury cabanas with dedicated service",
      gradient: "from-[#ec9aad] to-[#e88099]",
    },
    {
      icon: "🛏️",
      title: "Daybed Rentals",
      description: "Premium poolside lounging experience",
      gradient: "from-[#1ACAD4] to-[#ec9aad]",
    },
    {
      icon: "🍹",
      title: "Swim-Up Bar",
      description: "Order drinks without leaving the water",
      gradient: "from-[#ec9aad] to-[#1ACAD4]",
    },
  ];

  return (
    <GeneralSection className="py-20 bg-gradient-to-br from-blue-50 via-white to-pink-50">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-[#1ACAD4] font-semibold text-sm uppercase tracking-wide mb-3 font-sans">
            Pool Club Experience
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-semibold text-gray-900 mb-6 leading-tight">
            Your Tropical Escape Awaits
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto font-sans">
            Dive into luxury at Paradiso's heated pool complex. From private
            cabanas to swim-up bars, every detail is designed to create the
            ultimate day club experience in North Charleston.
          </p>
        </motion.div>
      </div>

      {/* Feature Cards in Circular Layout */}
      <div className="relative max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group relative"
            >
              <div className={`bg-gradient-to-br ${feature.gradient} rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300`}>
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-heading font-bold text-xl mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/90 font-sans text-sm leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Decorative element */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-white/20 rounded-full blur-sm"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-white/30 rounded-full blur-sm"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Central decorative element */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden lg:block"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-[#1ACAD4]/10 to-[#ec9aad]/10 blur-xl"></div>
        </motion.div>
      </div>

      {/* Bottom Image Gallery */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <div className="flex overflow-x-auto gap-6 px-4 pb-4 -mx-4">
          {[
            { src: "/grid_images/large_group_table.jpeg", alt: "Pool area" },
            { src: "/grid_images/drink_cheers.jpeg", alt: "Swim-up bar" },
            { src: "/grid_images/group_outside.jpeg", alt: "Poolside lounging" },
            { src: "/grid_images/thinking_outside.jpeg", alt: "Private cabana" },
          ].map((image, index) => (
            <div key={index} className="flex-shrink-0">
              <div className="relative overflow-hidden rounded-xl w-72 h-48 group">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent group-hover:from-black/50 transition-colors duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </GeneralSection>
  );
};

export default SwimOverview; 