"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DrawOutlineButton from "../common/DrawOutlineButton";
import GeneralSection from "../layout/GeneralSection";

const PoolAmenities = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      name: "Pool Features",
      icon: "🏊‍♀️",
      color: "from-[#1ACAD4] to-[#16a6b3]",
      items: [
        {
          name: "Heated Pool",
          description: "Year-round swimming at perfect temperature",
          price: "Included",
          icon: "🌡️",
        },
        {
          name: "Swim-Up Bar",
          description: "Order drinks without leaving the water",
          price: "Included",
          icon: "🍹",
        },
        {
          name: "Pool Towels",
          description: "Fresh towels provided for all guests",
          price: "Included",
          icon: "🏖️",
        },
        {
          name: "Pool Toys",
          description: "Floats, noodles, and games available",
          price: "Included",
          icon: "🏐",
        },
      ],
    },
    {
      name: "Premium Services",
      icon: "⭐",
      color: "from-[#ec9aad] to-[#e88099]",
      items: [
        {
          name: "Cabana Service",
          description: "Dedicated attendant for cabana guests",
          price: "$300/day",
          icon: "🏖️",
        },
        {
          name: "Daybed Service",
          description: "Food & drink delivery to your daybed",
          price: "$150/day",
          icon: "🛏️",
        },
        {
          name: "Bottle Service",
          description: "Premium spirits and mixers at your spot",
          price: "From $200",
          icon: "🍾",
        },
        {
          name: "Private Events",
          description: "Exclusive pool area for special occasions",
          price: "Contact Us",
          icon: "🎉",
        },
      ],
    },
    {
      name: "Additional Services",
      icon: "🛠️",
      color: "from-[#1ACAD4] to-[#ec9aad]",
      items: [
        {
          name: "Locker Rooms",
          description: "Private changing rooms with showers",
          price: "Included",
          icon: "🚿",
        },
        {
          name: "Spa Services",
          description: "Massage and wellness treatments",
          price: "From $120",
          icon: "💆‍♀️",
        },
        {
          name: "Fitness Access",
          description: "Full access to wellness center",
          price: "Included",
          icon: "💪",
        },
        {
          name: "Event Catering",
          description: "Custom catering for poolside events",
          price: "Contact Us",
          icon: "🍽️",
        },
      ],
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-indigo-50 via-white to-pink-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#1ACAD4] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#ec9aad] rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-[#16a6b3] rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <GeneralSection className="relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-[#1ACAD4] font-semibold text-sm uppercase tracking-wide mb-3 font-sans">
              Paradiso Pool Club
            </span>
            <h2 className="text-4xl md:text-6xl font-heading font-semibold text-gray-900 mb-6">
              Pool Amenities & Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              Everything you need for the perfect pool day at Paradiso
            </p>
          </motion.div>
        </div>

        {/* Horizontal Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center space-x-3 px-8 py-4 rounded-full transition-all duration-300 ${
                activeCategory === index
                  ? "bg-white shadow-xl scale-105"
                  : "bg-white/70 hover:bg-white hover:shadow-lg"
              }`}
              whileHover={{ scale: activeCategory === index ? 1.05 : 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-2xl">{category.icon}</span>
              <span className={`font-heading font-semibold ${
                activeCategory === index ? "text-gray-900" : "text-gray-700"
              }`}>
                {category.name}
              </span>
              <span className={`text-sm px-2 py-1 rounded-full ${
                activeCategory === index 
                  ? `bg-gradient-to-r ${category.color} text-white` 
                  : "bg-gray-200 text-gray-600"
              }`}>
                {category.items.length}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Amenities Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {categories[activeCategory].items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group relative"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden">
                    {/* Background Gradient */}
                    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${categories[activeCategory].color} opacity-10 rounded-bl-2xl transition-opacity group-hover:opacity-20`}></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${categories[activeCategory].color} flex items-center justify-center text-white text-xl shadow-lg`}>
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="text-xl font-heading font-bold text-gray-900 mb-1">
                              {item.name}
                            </h4>
                            <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${categories[activeCategory].color} text-white`}>
                              {item.price}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed font-sans">
                        {item.description}
                      </p>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-gray-200 rounded-2xl transition-colors duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#1ACAD4] to-[#ec9aad] rounded-2xl p-8 text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-bold mb-4">Ready to Experience Paradise?</h3>
            <p className="mb-6 opacity-90">Book your perfect pool day and enjoy all our amazing amenities</p>
            <DrawOutlineButton>Book Now</DrawOutlineButton>
          </div>
        </motion.div>
      </GeneralSection>
    </div>
  );
};

export default PoolAmenities; 