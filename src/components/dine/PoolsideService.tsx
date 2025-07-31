"use client";
import { motion } from "framer-motion";
import DrawOutlineButton from "../common/DrawOutlineButton";
import GeneralSection from "../layout/GeneralSection";

const PoolsideService = () => {
  const serviceFeatures = [
    {
      icon: "/icons/swimming.svg",
      title: "Swim-Up Ordering",
      description: "Order directly from the pool - bartenders come to you",
    },
    {
      icon: "/icons/bed.svg",
      title: "Daybed Service",
      description: "Premium service for daybed and cabana guests",
    },
    {
      icon: "/icons/mobile.svg",
      title: "QR Code Ordering",
      description: "Scan, order, and pay from your phone",
    },
    {
      icon: "/icons/rocket.svg",
      title: "Fast Delivery",
      description: "Food and drinks delivered in under 15 minutes",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/grid_images/group_outside.jpeg"
          alt="Pool day club service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1ACAD4]/90 to-[#ec9aad]/90" />
      </div>
      <GeneralSection className="py-20 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-white/90 font-semibold text-sm uppercase tracking-wide mb-3 font-sans">
              VIP Pool Service
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-white mb-6 leading-tight">
              Never Leave Your Spot
            </h2>
            <p className="text-xl text-white/95 leading-relaxed mb-12 max-w-3xl mx-auto font-sans">
              Why interrupt your pool day? Our dedicated service team brings
              restaurant-quality food and premium cocktails directly to your
              lounge chair, daybed, or cabana.
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-colors duration-300">
                <div className="mb-4 flex justify-center">
                  <img src={feature.icon} alt={feature.title} className="w-10 h-10" />
                </div>
                <h3 className="font-heading font-semibold text-white mb-3 text-lg">
                  {feature.title}
                </h3>
                <p className="text-white/90 font-sans text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <DrawOutlineButton>Start Ordering</DrawOutlineButton>
            <DrawOutlineButton>Reserve Daybed</DrawOutlineButton>
          </div>
        </div>
      </GeneralSection>
    </div>
  );
};

export default PoolsideService;
