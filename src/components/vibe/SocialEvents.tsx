"use client";
import { motion } from "framer-motion";
import DrawOutlineButton from "../common/DrawOutlineButton";
import GeneralSection from "../layout/GeneralSection";

const SocialEvents = () => {
  const events = [
    {
      title: "Full Moon Meditation",
      description:
        "Monthly guided meditation under the stars with sound healing and aromatherapy",
      image: "/grid_images/thinking_outside.jpeg",
      date: "Monthly",
      time: "8:00 PM - 9:30 PM",
      type: "Wellness Event",
    },
    {
      title: "Wellness Workshops",
      description:
        "Learn about nutrition, mindfulness, and healthy living from expert practitioners",
      image: "/grid_images/laughing.jpeg",
      date: "Bi-weekly",
      time: "2:00 PM - 4:00 PM",
      type: "Educational",
    },
    {
      title: "Fitness Challenges",
      description:
        "Monthly community challenges to motivate and connect with fellow members",
      image: "/grid_images/yoga_group.jpeg",
      date: "Monthly",
      time: "Various Times",
      type: "Community",
    },
  ];

  return (
    <GeneralSection className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-[#1ACAD4] font-semibold text-sm uppercase tracking-wide mb-3 font-sans">
            Social Events
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-gray-900 mb-6">
            Connect & Celebrate Wellness
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans">
            Join our vibrant community for special events that bring together 
            fitness, wellness, and social connection in paradise
          </p>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
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
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-[#1ACAD4] text-white px-3 py-1 rounded-full text-sm font-semibold">
                {event.type}
              </div>
              <div className="absolute top-4 right-4 bg-[#ec9aad] text-white px-3 py-1 rounded-full text-sm font-semibold">
                {event.date}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                {event.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed font-sans">
                {event.description}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-6 font-sans">
                <span>⏰ {event.time}</span>
              </div>
              <DrawOutlineButton>Learn More</DrawOutlineButton>
            </div>
          </motion.div>
        ))}
      </div>
    </GeneralSection>
  );
};

export default SocialEvents;