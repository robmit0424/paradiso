"use client";
import { useState } from "react";
import type React from "react";

import { motion } from "framer-motion";
import GeneralSection from "../layout/GeneralSection";

const EmailCapture = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setIsLoading(false);
    setEmail("");

    // Reset after 4 seconds
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <GeneralSection>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Images Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Main large image */}
              <div className="col-span-2 relative overflow-hidden rounded-2xl aspect-[16/10]">
                <img
                  src="/grid_images/paradiso_sign.jpeg"
                  alt="Silver Streak exclusive experience"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-sm font-medium bg-[#1ACAD4] px-3 py-1 rounded-full">
                    Member Exclusive
                  </span>
                </div>
              </div>

              {/* Two smaller images */}
              <div className="relative overflow-hidden rounded-xl aspect-square">
                <img
                  src="/grid_images/fridge_drinks.jpeg"
                  alt="Pool experience"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative overflow-hidden rounded-xl aspect-square">
                <img
                  src="/grid_images/burger.jpeg"
                  alt="Dining experience"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -top-4 -right-4 bg-[#ec9aad] text-white px-6 py-3 rounded-full font-semibold shadow-lg font-silverstreak"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 2, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              VIP Access
            </motion.div>
          </div>

          {/* Right Side - Email Capture Form */}
          <div className="space-y-8">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="inline-block text-[#1ACAD4] font-semibold text-sm uppercase tracking-wide mb-3">
                  Exclusive Access
                </span>
                <h2 className="text-4xl md:text-5xl font-heading font-semibold text-gray-900 mb-6 leading-tight">
                  Get First Access to Member Events
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8 font-sans">
                  Join our VIP list and be the first to know about exclusive
                  member events, private tastings, and special experiences at
                  Silver Streak. Plus, get a complimentary day pass when you
                  visit!
                </p>
              </motion.div>

              {/* Benefits list */}
              <div className="space-y-4 mb-8">
                {[
                  "Priority event notifications",
                  "Exclusive member-only experiences",
                  "Complimentary day pass ($50 value)",
                  "Special dining offers & tastings",
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-[#1ACAD4] rounded-full flex-shrink-0" />
                    <span className="text-gray-700 font-sans">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Email Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      disabled={isLoading}
                      className="w-full px-6 py-4 text-lg rounded-2xl border-2 border-gray-200 focus:border-[#1ACAD4] focus:outline-none text-gray-900 placeholder-gray-500 transition-all duration-300 font-sans disabled:opacity-50"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading || !email}
                    className="cursor-pointer w-full bg-gradient-to-r from-[#1ACAD4] to-[#ec9aad] text-white font-semibold py-4 px-8 rounded-2xl hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:transform-none font-sans"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Joining VIP List...</span>
                      </div>
                    ) : (
                      "Get My VIP Access"
                    )}
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center p-8 bg-gradient-to-r from-[#1ACAD4]/10 to-[#ec9aad]/10 rounded-2xl border border-[#1ACAD4]/20"
                >
                  <div className="text-4xl mb-4">🎉</div>
                  <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-2">
                    Welcome to the VIP List!
                  </h3>
                  <p className="text-gray-600 font-sans">
                    Check your email for your complimentary day pass and
                    exclusive event updates.
                  </p>
                </motion.div>
              )}

              <p className="text-sm text-gray-500 mt-4 text-center font-sans">
                No spam, ever. Unsubscribe with one click.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#ec9aad]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#1ACAD4]/5 rounded-full blur-3xl" />
    </GeneralSection>
  );
};

export default EmailCapture;
