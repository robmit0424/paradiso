"use client";
import { motion } from "framer-motion";
import DrawOutlineButton from "../common/DrawOutlineButton";
import GeneralSection from "../layout/GeneralSection";

const JoinClassCTA = () => {
  return (
    <GeneralSection className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-[#1ACAD4] font-semibold text-sm uppercase tracking-wide mb-3 font-sans">
            Ready to Move?
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-gray-900 mb-6">
            Your Wellness Journey Starts Here
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto font-sans">
            Join our vibrant fitness community and discover wellness in paradise. 
            From sunrise yoga to high-energy HIIT, find your perfect class at Paradiso.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl mb-3">🧘‍♀️</div>
              <h3 className="font-heading font-semibold text-gray-900 mb-2">
                Drop-In Class
              </h3>
              <p className="text-gray-600 text-sm mb-4 font-sans">
                Single class access to any group fitness session
              </p>
              <div className="text-2xl font-bold text-[#1ACAD4] mb-4">$25</div>
              <DrawOutlineButton>Book Single Class</DrawOutlineButton>
            </div>
            <div className="text-center border-l border-r border-gray-100 px-4">
              <div className="text-3xl mb-3">💪</div>
              <h3 className="font-heading font-semibold text-gray-900 mb-2">
                Class Package
              </h3>
              <p className="text-gray-600 text-sm mb-4 font-sans">
                10 classes to use within 3 months
              </p>
              <div className="text-2xl font-bold text-[#1ACAD4] mb-4">$200</div>
              <DrawOutlineButton>Get Package</DrawOutlineButton>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🌟</div>
              <h3 className="font-heading font-semibold text-gray-900 mb-2">
                Unlimited Monthly
              </h3>
              <p className="text-gray-600 text-sm mb-4 font-sans">
                Access to all classes plus wellness events
              </p>
              <div className="text-2xl font-bold text-[#1ACAD4] mb-4">$150</div>
              <DrawOutlineButton>Go Unlimited</DrawOutlineButton>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-100">
            <p className="text-gray-600 mb-4 font-sans">
              <strong>Fitness Center Hours:</strong> Daily 6 AM - 10 PM | Group Classes vary by schedule
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500 font-sans">
              <span>📞 (843) 555-VIBE</span>
              <span className="hidden sm:block">•</span>
              <span>📧 fitness@paradiso.com</span>
            </div>
          </div>
        </motion.div>
      </div>
    </GeneralSection>
  );
};

export default JoinClassCTA;