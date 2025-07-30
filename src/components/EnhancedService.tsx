"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type ServiceType = "seo" | "social" | "web" | "design" | "google" | "ads";

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
      case "google":
        return (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-300 to-blue-400 rounded-full"></div>
            <div className="absolute inset-2 rounded-full border-2 border-white/30"></div>
            <div className="relative z-10 flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-full"></div>
              <div
                className="absolute w-2 h-2 bg-white rounded-full"
                style={{ top: "20%", left: "20%" }}
              ></div>
              <div
                className="absolute w-2 h-2 bg-white rounded-full"
                style={{ top: "20%", right: "20%" }}
              ></div>
            </div>
          </motion.div>
        );
      case "ads":
        return (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full"></div>
            <div className="absolute inset-1 bg-white rounded-full"></div>
            <div className="relative z-10 w-6 h-4 bg-white rounded-sm"></div>
            <div className="absolute bottom-4 w-8 h-1 bg-white rounded-full"></div>
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

  const services = [
    {
      type: "seo",
      title: "Search Engine Optimisation",
      description:
        "Optimize your website to rank higher on search engines, driving organic traffic and improving visibility.",
    },
    {
      type: "web",
      title: "Web Development",
      description:
        "Build responsive, user-friendly websites that enhance your online presence and engage your audience.",
    },
    {
      type: "design",
      title: "AI Optimization",
      description:
        "Boost your online presence with AI-driven strategies that enhance visibility, drive organic traffic, and deliver measurable results.",
    },
    {
      type: "social",
      title: "Social Media Marketing",
      description:
        "Grow your brand with targeted campaigns, engaging content, and strategic management on social media platforms.",
    },
    {
      type: "google",
      title: "Google Business Profile Opimization",
      description:
        "Create and optimize your Google Business Profile to improve local search visibility and attract more customers.",
    },
    {
      type: "ads",
      title: "Branding and Advertising",
      description:
        "We craft ad campaigns that cut through the noise and ensure your message reaches the right audience at the right time.",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading Section */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          variants={containerVariants}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            variants={itemVariants}
          >
            AI-Powered Solutions for Digital Excellence
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            At The Aio Tech, we harness the power of AI and innovation to
            deliver transformative digital services. our solutions are tailored
            to meet your business goals and drive success. Lets innovate
            together!
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.type}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
              custom={index}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  <ServiceIcon type={service.type as ServiceType} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 border border-gray-300 rounded-full text-white bg-black hover:bg-gray-900 transition-colors duration-200"
            >
              <span className="mr-2">▶</span>
              Get Started
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default AIDigitalSolutions;
