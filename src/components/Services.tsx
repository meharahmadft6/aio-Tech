"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
// Define types for the ServiceIcon props
type ServiceType = "seo" | "social" | "web" | "design";

interface ServiceIconProps {
  type: ServiceType;
}

const ServiceIcon = ({ type }: ServiceIconProps) => {
  const getIcon = () => {
    switch (type) {
      case "seo":
        return (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 rounded-full bg-gradient-to-br from-red-400 to-blue-500 flex items-center justify-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-300 to-blue-400 opacity-70"></div>
            <div className="absolute inset-2 rounded-full border-2 border-white/30"></div>
            <div className="w-8 h-1 bg-white/60 rounded-full transform rotate-45"></div>
            <div className="w-6 h-1 bg-white/60 rounded-full transform -rotate-45 absolute"></div>
          </motion.div>
        );
      case "social":
        return (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-blue-500 flex items-center justify-center relative overflow-hidden"
          >
            <div className="absolute inset-0">
              <div className="w-full h-full bg-gradient-to-br from-pink-300 to-blue-400 rounded-full"></div>
              <div className="absolute top-2 left-2 w-12 h-12 bg-gradient-to-br from-pink-200 to-blue-300 rounded-full opacity-70"></div>
            </div>
            <div className="relative z-10 w-6 h-6 bg-white/80 rounded-full"></div>
          </motion.div>
        );
      case "web":
        return (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-pink-400 rounded-full"></div>
            <div className="absolute inset-1 bg-white rounded-full"></div>
            <div className="absolute inset-3 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full"></div>
            <div className="relative z-10 w-4 h-4 bg-white rounded-full"></div>
          </motion.div>
        );
      case "design":
        return (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-red-500 flex items-center justify-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-pink-400 rounded-full"></div>
            <div className="absolute inset-1 bg-white rounded-full"></div>
            <div className="absolute inset-3 bg-gradient-to-br from-blue-200 to-pink-300 rounded-full"></div>
            <div className="relative z-10 w-4 h-4 bg-white rounded-full"></div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return getIcon();
};

const AIDigitalSolutions = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          variants={containerVariants}
        >
          {/* Left Column - Main Heading */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <motion.h1
              className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.8 }}
            >
              Empowering
              <br />
              businesses with
              <br />
              AI-powered digital
              <br />
              solutions
            </motion.h1>

            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-3 border border-gray-300 rounded-full text-white bg-gray-800 hover:bg-gray-800 transition-colors duration-200"
              >
                <span className="mr-2">▶</span>
                Explore all services
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Column - Services */}
          <motion.div
            className="space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            variants={containerVariants}
          >
            {/* SEO Service */}
            <motion.div
              className="flex items-start space-x-6"
              variants={itemVariants}
            >
              <div className="flex-shrink-0 mt-2">
                <ServiceIcon type="seo" />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Search Engine Optimisation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Optimize your website to rank higher on search engines,
                  <br />
                  driving organic traffic and improving visibility.
                </p>
                <div className="mt-4 h-px bg-gray-200"></div>
              </div>
            </motion.div>

            {/* Social Media Marketing */}
            <motion.div
              className="flex items-start space-x-6"
              variants={itemVariants}
            >
              <div className="flex-shrink-0 mt-2">
                <ServiceIcon type="social" />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Social Media Marketing
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Grow your brand with targeted campaigns, engaging content,
                  <br />
                  and strategic management on social media platforms.
                </p>
                <div className="mt-4 h-px bg-gray-200"></div>
              </div>
            </motion.div>

            {/* Web Development */}
            <motion.div
              className="flex items-start space-x-6"
              variants={itemVariants}
            >
              <div className="flex-shrink-0 mt-2">
                <ServiceIcon type="web" />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Web Development
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Build responsive, user-friendly websites that enhance your
                  <br />
                  online presence and engage your audience.
                </p>
                <div className="mt-4 h-px bg-gray-200"></div>
              </div>
            </motion.div>

            {/* Creative Design */}
            <motion.div
              className="flex items-start space-x-6"
              variants={itemVariants}
            >
              <div className="flex-shrink-0 mt-2">
                <ServiceIcon type="design" />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Mobile App Development
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Native and cross-platform mobile applications for iOS and
                  Android devices. create designs that not only look incredible
                  but also drive results.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AIDigitalSolutions;
