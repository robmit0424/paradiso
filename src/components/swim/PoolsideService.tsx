"use client";
import { motion } from "framer-motion";
import DrawOutlineButton from "../common/DrawOutlineButton";
import GeneralSection from "../layout/GeneralSection";

const PoolsideService = () => {
  const serviceFeatures = [
    {
      icon: "/icons/swimming.svg",
      title: "Swim-Up Service",
      description: "Order food and drinks directly from the pool",
      benefit: "No interruption to your pool time",
    },
    {
      icon: "/icons/bed.svg",
      title: "Daybed Service",
      description: "Premium service for daybed and cabana guests",
      benefit: "VIP treatment at your spot",
    },
    {
      icon: "/icons/mobile.svg",
      title: "Mobile Ordering",
      description: "Order from your phone with QR codes",
      benefit: "Fast & contactless ordering",
    },
    {
      icon: "/icons/rocket.svg",
      title: "Fast Delivery",
      description: "Food and drinks delivered in under 15 minutes",
      benefit: "Quick service guarantee",
    },
  ];

  return (
    <div className="relative py-20 overflow-hidden">
      {/* Layered Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black"></div>
      
      {/* Animated mesh gradient overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1ACAD4]/40 to-[#ec9aad]/40"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, #1ACAD4 0%, transparent 50%), radial-gradient(circle at 80% 20%, #ec9aad 0%, transparent 50%), radial-gradient(circle at 40% 40%, #16a6b3 0%, transparent 50%)`,
        }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -60, -20],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <GeneralSection className="relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-[#1ACAD4] font-semibold text-sm uppercase tracking-wide mb-4 font-sans">
              VIP Pool Service
            </span>
            <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-8 leading-tight">
              Never Leave Your Spot
            </h2>
            <p className="text-2xl text-white/95 leading-relaxed mb-12 max-w-4xl mx-auto font-sans">
              Why interrupt your pool day? Our dedicated service team brings
              restaurant-quality food and premium cocktails directly to your
              lounge chair, daybed, or cabana.
            </p>
          </motion.div>
        </div>

        {/* Service Features in Staggered Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
          {serviceFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group relative"
            >
              <div className={`relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 hover:border-white/40 transition-all duration-500 ${
                index % 2 === 0 ? 'lg:ml-8' : 'lg:mr-8 lg:mt-8'
              }`}>
                {/* Gradient background that shows on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1ACAD4]/20 to-[#ec9aad]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#1ACAD4] to-[#ec9aad] rounded-2xl flex items-center justify-center shadow-xl">
                        <img src={feature.icon} alt={feature.title} className="w-8 h-8" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-heading font-bold text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-white/90 font-sans text-lg mb-4 leading-relaxed">
                        {feature.description}
                      </p>
                      <div className="inline-block px-4 py-2 bg-white/20 rounded-full">
                        <span className="text-white/80 text-sm font-semibold">
                          {feature.benefit}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative corner element */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#1ACAD4] to-[#ec9aad] rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <h3 className="text-3xl font-heading font-bold text-white mb-6">
                Ready to Relax?
              </h3>
              <p className="text-white/90 text-lg mb-8">
                Experience our premium poolside service today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <DrawOutlineButton>Start Ordering</DrawOutlineButton>
                <DrawOutlineButton>Reserve Daybed</DrawOutlineButton>
              </div>
            </div>
          </div>
        </motion.div>
      </GeneralSection>
    </div>
  );
};

export default PoolsideService; 