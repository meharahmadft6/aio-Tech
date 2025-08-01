"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

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
    <div className="bg-white py-16 px-8 ">
      <div className="mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          variants={containerVariants}
        >
          {/* Left Column - Main Heading */}
          <motion.div className="space-y-8 " variants={itemVariants}>
            <motion.h1
              className="text-2xl lg:text-6xl font-bold text-gray-900 leading-tight hidden lg:block ms-10"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.8 }}
            >
              <span className="block lg:inline">Empowering </span>
              <span className="block lg:inline">businesses with </span>
              <span className="block lg:inline">AI-powered digital </span>
              <span className="block lg:inline">solutions</span>
            </motion.h1>

            <motion.h1
              className="text-2xl font-bold text-gray-900 leading-tight sm:hidden"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.8 }}
            >
              Empowering businesses with AI-powered digital solutions.
            </motion.h1>

            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden ms-10 lg:inline-flex items-center px-8 py-3 border border-gray-300 rounded-full text-white bg-black hover:bg-gray-900 transition-colors duration-200"
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
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                  transition={{ duration: 0.5 }}
                >
                  <img src="/point1.svg" alt="SEO Icon" className="w-16 h-16" />
                </motion.div>
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
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <img
                    src="/point2.svg"
                    alt="Social Media Icon"
                    className="w-16 h-16"
                  />
                </motion.div>
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
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <img
                    src="/point3.svg"
                    alt="Web Development Icon"
                    className="w-16 h-16"
                  />
                </motion.div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Website & App Development
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Build responsive, user-friendly websites and native or
                  cross-platform mobile apps for iOS and Android. Enhance your
                  online presence, engage your audience, and deliver seamless
                  digital experiences across devices.
                </p>
                <div className="mt-4 h-px bg-gray-200"></div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AIDigitalSolutions;
