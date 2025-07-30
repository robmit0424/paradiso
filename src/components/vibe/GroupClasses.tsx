"use client";
import { motion } from "framer-motion";
import DrawOutlineButton from "../common/DrawOutlineButton";
import GeneralSection from "../layout/GeneralSection";

const GroupClasses = () => {
  const classes = [
    {
      title: "Sunrise Yoga",
      description:
        "Start your day with peaceful flow sessions overlooking the tropical paradise",
      image: "/grid_images/yoga_group.jpeg",
      time: "7:00 AM - 8:00 AM",
      days: "Mon, Wed, Fri",
      level: "All Levels",
    },
    {
      title: "HIIT by the Pool",
      description:
        "High-intensity interval training with the motivation of paradise views",
      image: "/grid_images/squatting.jpeg",
      time: "6:00 PM - 7:00 PM",
      days: "Tue, Thu, Sat",
      level: "Intermediate",
    },
    {
      title: "Aqua Fitness",
      description:
        "Low-impact, high-energy water workouts perfect for all fitness levels",
      image: "/grid_images/group_outside.jpeg",
      time: "10:00 AM - 11:00 AM",
      days: "Daily",
      level: "All Levels",
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
            Group Classes
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-gray-900 mb-6">
            Move Together in Paradise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans">
            Join our community of wellness enthusiasts in classes designed to 
            energize your body and elevate your spirit
          </p>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {classes.map((classItem, index) => (
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
                src={classItem.image || "/placeholder.svg"}
                alt={classItem.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-[#1ACAD4] text-white px-3 py-1 rounded-full text-sm font-semibold">
                {classItem.level}
              </div>
              <div className="absolute top-4 right-4 bg-[#ec9aad] text-white px-3 py-1 rounded-full text-sm font-semibold">
                {classItem.days}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                {classItem.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed font-sans">
                {classItem.description}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-6 font-sans">
                <span>⏰ {classItem.time}</span>
              </div>
              <DrawOutlineButton>Join Class</DrawOutlineButton>
            </div>
          </motion.div>
        ))}
      </div>
    </GeneralSection>
  );
};

export default GroupClasses;