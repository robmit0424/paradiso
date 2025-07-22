"use client";
import { motion } from "framer-motion";
import DrawOutlineButton from "../common/DrawOutlineButton";
import GeneralSection from "../layout/GeneralSection";

const DiningExperiences = () => {
  const experiences = [
    {
      title: "Sunday Pool Brunch",
      description:
        "Bottomless mimosas, fresh fruit, and poolside breakfast favorites every Sunday",
      image: "/grid_images/eating_sandwich.jpeg",
      price: "From $35",
      duration: "11:00 AM - 3:00 PM",
      highlight: "Bottomless Mimosas",
    },
    {
      title: "Happy Hour Daily",
      description:
        "$2 off all cocktails and half-price appetizers during golden hour",
      image: "/grid_images/drink_cheers.jpeg",
      price: "From $6",
      duration: "4:00 PM - 6:00 PM",
      highlight: "Daily Special",
    },
    {
      title: "Taco Tuesday",
      description:
        "Build-your-own taco bar with fresh fish, chicken, and veggie options",
      image: "/grid_images/burger.jpeg",
      price: "From $3",
      duration: "All Day Tuesday",
      highlight: "Build Your Own",
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
            Weekly Specials
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-gray-900 mb-6">
            Pool Club Events
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans">
            Special dining experiences that make every day at the pool feel like
            a celebration
          </p>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                src={experience.image || "/placeholder.svg"}
                alt={experience.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-[#1ACAD4] text-white px-3 py-1 rounded-full text-sm font-semibold">
                {experience.highlight}
              </div>
              <div className="absolute top-4 right-4 bg-[#ec9aad] text-white px-3 py-1 rounded-full text-sm font-semibold">
                {experience.price}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                {experience.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed font-sans">
                {experience.description}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-6 font-sans">
                <span>⏰ {experience.duration}</span>
              </div>
              <DrawOutlineButton>Join the Fun</DrawOutlineButton>
            </div>
          </motion.div>
        ))}
      </div>
    </GeneralSection>
  );
};

export default DiningExperiences;
