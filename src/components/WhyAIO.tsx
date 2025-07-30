"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const WhyAIO = () => {
  const features = [
    {
      title: "Full-Service Expertise",
      description:
        "From SEO to Web Development, Social Media Marketing, and Google Business Profile Setup, we offer a comprehensive suite of services under one roof.",
    },
    {
      title: "Results-Oriented",
      description:
        "Our AI-enhanced strategies are rooted in analytics, delivering measurable results that drive your business forward.",
    },
    {
      title: "Tailored Solutions",
      description:
        "Our approach is rooted in understanding your unique needs and challenges.",
    },
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Why The AIO Tech?
          </motion.h2>
        </div>

        {/* Mobile Carousel - One card at a time */}
        <div
          ref={containerRef}
          className="md:hidden overflow-x-auto pb-4 -mx-4 snap-x snap-mandatory"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <style jsx>{`
            .md:hidden::-webkit-scrollbar {
              display: none;
            }
            .snap-item {
              scroll-snap-align: start;
            }
          `}</style>

          <div className="flex w-full">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="snap-item flex-shrink-0 w-[calc(100%-32px)] mx-4" // Adjusted width and margin
              >
                <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-full">
                  {" "}
                  {/* Added h-full */}
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Grid Layout for larger screens */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyAIO;
