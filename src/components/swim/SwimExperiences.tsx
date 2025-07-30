"use client";
import { motion } from "framer-motion";
import DrawOutlineButton from "../common/DrawOutlineButton";
import GeneralSection from "../layout/GeneralSection";

const SwimExperiences = () => {
  const experiences = [
    {
      title: "Day Pass Access",
      description:
        "Full pool access with food & drink ordering, perfect for a day of relaxation",
      image: "/grid_images/group_outside.jpeg",
      price: "From $50",
      duration: "10:00 AM - 8:00 PM",
      highlight: "Full Access",
      color: "blue",
      features: ["Pool Access", "Food & Drinks", "WiFi", "Towels"],
    },
    {
      title: "Private Cabana Rental",
      description:
        "Luxury cabana with dedicated service, perfect for groups and special occasions",
      image: "/grid_images/thinking_outside.jpeg",
      price: "From $300",
      duration: "All Day Rental",
      highlight: "VIP Service",
      color: "pink",
      features: ["Private Space", "Dedicated Service", "Premium Location", "Group Seating"],
    },
    {
      title: "Daybed Experience",
      description:
        "Premium poolside lounging with food & drink service included",
      image: "/grid_images/large_group_table.jpeg",
      price: "From $150",
      duration: "All Day Rental",
      highlight: "Premium Seating",
      color: "gradient",
      features: ["Premium Seating", "Table Service", "Shade", "VIP Treatment"],
    },
  ];

  return (
    <div className="relative py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-pink-50"></div>
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #1ACAD4 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>
      
      <GeneralSection className="relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-[#1ACAD4] font-semibold text-sm uppercase tracking-wide mb-3 font-sans">
              Pool Access Options
            </span>
            <h2 className="text-4xl md:text-6xl font-heading font-semibold text-gray-900 mb-6">
              Choose Your Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              From casual day passes to luxury cabana rentals, find the perfect
              way to enjoy Paradiso's tropical pool club
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, rotateY: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Main Card */}
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
                {/* Image with Overlay */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={experience.image || "/placeholder.svg"}
                    alt={experience.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Price Tag */}
                  <div className="absolute top-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                      <span className="text-gray-900 font-bold text-lg">{experience.price}</span>
                    </div>
                  </div>

                  {/* Highlight Badge */}
                  <div className="absolute top-6 left-6">
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                      experience.color === 'blue' ? 'bg-[#1ACAD4]' :
                      experience.color === 'pink' ? 'bg-[#ec9aad]' :
                      'bg-gradient-to-r from-[#1ACAD4] to-[#ec9aad]'
                    }`}>
                      {experience.highlight}
                    </div>
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="text-2xl font-heading font-bold text-white mb-1">
                      {experience.title}
                    </h3>
                    <div className="flex items-center text-white/90 text-sm">
                      <span>⏰ {experience.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed font-sans">
                    {experience.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {experience.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${
                          experience.color === 'blue' ? 'bg-[#1ACAD4]' :
                          experience.color === 'pink' ? 'bg-[#ec9aad]' :
                          'bg-gradient-to-r from-[#1ACAD4] to-[#ec9aad]'
                        }`}></div>
                        <span className="text-sm text-gray-700 font-sans">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <DrawOutlineButton>Book Now</DrawOutlineButton>
                </div>

                {/* Decorative Elements */}
                <div className={`absolute -top-2 -right-2 w-20 h-20 rounded-full opacity-20 blur-xl ${
                  experience.color === 'blue' ? 'bg-[#1ACAD4]' :
                  experience.color === 'pink' ? 'bg-[#ec9aad]' :
                  'bg-gradient-to-r from-[#1ACAD4] to-[#ec9aad]'
                }`}></div>
              </div>

              {/* Floating Shadow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#1ACAD4]/5 to-[#ec9aad]/5 rounded-3xl blur-lg -z-10 group-hover:scale-105 transition-transform duration-500"></div>
            </motion.div>
          ))}
        </div>
      </GeneralSection>
    </div>
  );
};

export default SwimExperiences; 