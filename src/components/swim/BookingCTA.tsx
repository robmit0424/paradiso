"use client";
import { motion } from "framer-motion";
import DrawOutlineButton from "../common/DrawOutlineButton";
import GeneralSection from "../layout/GeneralSection";

const BookingCTA = () => {
  const bookingOptions = [
    {
      title: "Day Pass",
      icon: "🏊‍♀️",
      price: "$50",
      originalPrice: "$75",
      description: "Pool access + food & drink ordering",
      features: ["Pool Access", "Food & Drinks", "WiFi", "Towels"],
      popular: false,
      gradient: "from-[#1ACAD4] to-[#16a6b3]",
    },
    {
      title: "Daybed Rental",
      icon: "🛏️",
      price: "$150",
      originalPrice: "$200",
      description: "Premium poolside seating + VIP service",
      features: ["Premium Seating", "VIP Service", "Shade", "Table Service"],
      popular: true,
      gradient: "from-[#ec9aad] to-[#e88099]",
    },
    {
      title: "Private Cabana",
      icon: "🏖️",
      price: "$300",
      originalPrice: "$400",
      description: "Ultimate luxury with dedicated service",
      features: ["Private Space", "Dedicated Staff", "Premium Location", "Group Seating"],
      popular: false,
      gradient: "from-[#1ACAD4] to-[#ec9aad]",
    },
  ];

  return (
    <div className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-gray-800"></div>
      
      {/* Animated geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-24 -left-24 w-96 h-96 bg-[#1ACAD4]/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#ec9aad]/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#16a6b3]/20 rounded-full blur-2xl"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
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
              Ready to Dive In?
            </span>
            <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-8 leading-tight">
              Your Paradiso Pool Day Awaits
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto font-sans leading-relaxed">
              Book your daybed, grab your crew, and get ready for the ultimate
              pool club experience at Paradiso. Swimming, dining, and good vibes
              included.
            </p>
          </motion.div>
        </div>

        {/* Booking Options Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {bookingOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, rotateY: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Popular badge */}
              {option.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              <div className={`relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 ${
                option.popular ? 'ring-4 ring-yellow-400/30' : ''
              }`}>
                {/* Header with gradient */}
                <div className={`bg-gradient-to-br ${option.gradient} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-8 -translate-y-8"></div>
                  <div className="relative z-10">
                    <div className="text-4xl mb-4">{option.icon}</div>
                    <h3 className="text-2xl font-heading font-bold mb-2">
                      {option.title}
                    </h3>
                    <p className="text-white/90 font-sans">
                      {option.description}
                    </p>
                  </div>
                </div>

                {/* Pricing */}
                <div className="p-8">
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-4xl font-bold text-gray-900">{option.price}</span>
                      <div className="text-left">
                        <div className="text-sm text-gray-500 line-through">{option.originalPrice}</div>
                        <div className="text-xs text-green-600 font-semibold">Save 25%</div>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {option.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${option.gradient}`}></div>
                        <span className="text-gray-700 font-sans">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <DrawOutlineButton>
                    {option.title === "Day Pass" ? "Get Day Pass" :
                     option.title === "Daybed Rental" ? "Reserve Daybed" :
                     "Book Cabana"}
                  </DrawOutlineButton>
                </div>

                {/* Decorative elements */}
                <div className={`absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br ${option.gradient} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity duration-500`}></div>
              </div>

              {/* Floating shadow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#1ACAD4]/10 to-[#ec9aad]/10 rounded-3xl blur-xl -z-10 group-hover:scale-105 transition-transform duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-heading font-bold text-white mb-4">Pool Hours</h3>
                <p className="text-white/90 font-sans">
                  <strong>Daily:</strong> 10 AM - 8 PM<br />
                  <strong>Last entry:</strong> 6 PM
                </p>
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-white mb-4">Contact Us</h3>
                <div className="space-y-2 text-white/90 font-sans">
                  <div>📞 (843) 555-POOL</div>
                  <div>📧 pool@paradiso.com</div>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-white/20">
              <p className="text-white/80 text-sm font-sans">
                *Prices subject to change. Advance booking recommended. Cancellation policy applies.
              </p>
            </div>
          </div>
        </motion.div>
      </GeneralSection>
    </div>
  );
};

export default BookingCTA; 