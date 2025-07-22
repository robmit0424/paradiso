"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DrawOutlineButton from "../common/DrawOutlineButton";
import GeneralSection from "../layout/GeneralSection";

const MenuHighlights = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      name: "Pool Bites",
      items: [
        {
          name: "Fish Tacos",
          description: "Blackened mahi, cabbage slaw, chipotle crema, lime",
          price: "$16",
        },
        {
          name: "Loaded Nachos",
          description:
            "Perfect for sharing, queso, jalapeños, guac, sour cream",
          price: "$18",
        },
        {
          name: "Coconut Shrimp",
          description: "Crispy coconut coating, sweet chili dipping sauce",
          price: "$14",
        },
        {
          name: "Caesar Wrap",
          description: "Grilled chicken, romaine, parmesan, caesar dressing",
          price: "$13",
        },
      ],
    },
    {
      name: "Tropical Cocktails",
      items: [
        {
          name: "Paradiso Punch",
          description: "Rum, passion fruit, pineapple, grenadine, mint",
          price: "$14",
        },
        {
          name: "Frozen Piña Colada",
          description: "Coconut rum, pineapple juice, coconut cream",
          price: "$12",
        },
        {
          name: "Watermelon Margarita",
          description: "Fresh watermelon, tequila, lime, tajín rim",
          price: "$13",
        },
        {
          name: "Pool Day Spritz",
          description: "Aperol, prosecco, orange, soda water",
          price: "$11",
        },
      ],
    },
    {
      name: "Refreshers",
      items: [
        {
          name: "Cucumber Mint Water",
          description: "Infused water, refreshing and hydrating",
          price: "$4",
        },
        {
          name: "Tropical Smoothie",
          description: "Mango, pineapple, coconut milk, banana",
          price: "$8",
        },
        {
          name: "Cold Brew Coffee",
          description: "Locally roasted, served over ice",
          price: "$5",
        },
        {
          name: "Fresh Coconut Water",
          description: "Straight from the coconut",
          price: "$6",
        },
      ],
    },
  ];

  return (
    <GeneralSection className="py-20 bg-gray-50">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-[#1ACAD4] font-semibold text-sm uppercase tracking-wide mb-3 font-sans">
            Paradiso Pool Menu
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-gray-900 mb-6">
            Poolside Favorites
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans">
            Light bites and tropical drinks designed for all-day poolside
            enjoyment at Paradiso
          </p>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Category Navigation */}
        <div className="lg:col-span-1">
          <div className="sticky top-8 space-y-4">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                  activeCategory === index
                    ? "bg-white shadow-lg border-2 border-[#1ACAD4] text-[#1ACAD4]"
                    : "bg-white/50 hover:bg-white hover:shadow-md text-gray-700"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-xl font-heading font-semibold">
                  {category.name}
                </h3>
                <p className="text-sm opacity-70 mt-1 font-sans">
                  {category.items.length} items
                </p>
              </motion.button>
            ))}
            <div className="pt-6">
              <DrawOutlineButton>Order Now</DrawOutlineButton>
            </div>
          </div>
        </div>
        {/* Menu Items */}
        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {categories[activeCategory].items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-heading font-semibold text-gray-900">
                      {item.name}
                    </h4>
                    <span className="text-xl font-semibold text-[#ec9aad] ml-4">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </GeneralSection>
  );
};

export default MenuHighlights;
