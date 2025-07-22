"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CTAButton from "../common/CTAButton";
import GeneralSection from "../layout/GeneralSection";

const EventsPreview = () => {
  const [activeEvent, setActiveEvent] = useState(0);

  const events = [
    {
      title: "Sunset Yoga Sessions",
      date: "Every Tuesday & Thursday",
      time: "6:30 PM",
      description:
        "Find your zen as the sun sets over the water. All levels welcome.",
      image: "/grid_images/yoga_group.jpeg",
      category: "Wellness",
    },
    {
      title: "Wine & Dine Fridays",
      date: "First Friday Monthly",
      time: "7:00 PM",
      description:
        "Curated wine pairings with our chef's seasonal menu selections.",
      image: "/grid_images/charcuterie.jpeg",
      category: "Dining",
    },
    {
      title: "Pool Party Saturdays",
      date: "Every Saturday",
      time: "2:00 PM",
      description: "DJ sets, tropical cocktails, and good vibes by the pool.",
      image: "/grid_images/drink_cheers.jpeg",
      category: "Social",
    },
    {
      title: "Morning Aqua Fitness",
      date: "Monday, Wednesday, Friday",
      time: "8:00 AM",
      description:
        "Low-impact, high-energy water workouts to start your day right.",
      image: "/grid_images/inside_fridge.jpeg",
      category: "Fitness",
    },
  ];

  return (
    <GeneralSection className="w-full py-20 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 font-heading">
            What&apos;s Happening
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans">
            From wellness workshops to social celebrations, there&apos;s always
            something exciting at Paradiso
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Event Navigation */}
          <div className="space-y-4">
            {events.map((event, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeEvent === index
                    ? "bg-white shadow-lg border-2 border-[#1ACAD4]"
                    : "bg-white/50 hover:bg-white hover:shadow-md"
                }`}
                onClick={() => setActiveEvent(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          activeEvent === index
                            ? "bg-[#1ACAD4] text-white"
                            : "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {event.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-2 font-heading">
                      {event.title}
                    </h3>

                    <div className="flex items-center gap-4 text-sm text-gray-600 font-sans">
                      <span>{event.date}</span>
                      <span>•</span>
                      <span>{event.time}</span>
                    </div>
                  </div>

                  <div
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      activeEvent === index ? "bg-[#1ACAD4]" : "bg-gray-300"
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Event Details */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeEvent}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-3xl aspect-[4/3]">
                  <img
                    src={events[activeEvent].image || "/placeholder.svg"}
                    alt={events[activeEvent].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-semibold mb-3 text-white font-heading">
                      {events[activeEvent].title}
                    </h3>
                    <p className="text-lg leading-relaxed mb-6 text-white font-sans">
                      {events[activeEvent].description}
                    </p>
                    <CTAButton text="Join Event" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </GeneralSection>
  );
};

export default EventsPreview;
