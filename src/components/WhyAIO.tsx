"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

interface Feature {
  title: string;
  description: string;
}

const WhyAIO = () => {
  const features: Feature[] = [
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

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Auto-advance carousel
  useEffect(() => {
    if (!isInView || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === features.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isInView, isPaused, features.length]);

  // Smooth scroll to current item
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const itemWidth = container.scrollWidth / features.length;
      const scrollPosition = currentIndex * itemWidth;

      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [currentIndex, features.length]);

  // Properly typed number formatting function
  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, "0");
  };

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
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Why The AIO Tech?
          </motion.h2>
        </div>

        {/* Mobile Carousel */}
        <div
          ref={containerRef}
          className="md:hidden overflow-x-auto pb-4 -mx-4 snap-x snap-mandatory"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
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
                className="snap-item flex-shrink-0 w-[calc(100%-32px)] mx-4"
              >
                <motion.div
                  className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-500 w-full h-full relative overflow-hidden"
                  whileHover={{
                    scale: 1.02,
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Rotating Number with Gradient Border */}
                  <motion.div
                    className="absolute -top-3 -right-3 w-16 h-16 rounded-full flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4)",
                      padding: "2px",
                    }}
                    animate={{
                      rotate: currentIndex === index ? 360 : 0,
                      scale: currentIndex === index ? 1.1 : 1,
                    }}
                    transition={{
                      rotate: { duration: 2, ease: "easeInOut" },
                      scale: { duration: 0.3 },
                    }}
                  >
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center mt-2 me-3">
                      <motion.span
                        className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                        animate={{
                          scale: currentIndex === index ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {formatNumber(index + 1)}
                      </motion.span>
                    </div>
                  </motion.div>

                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0"
                    animate={{
                      opacity: currentIndex === index ? 0.5 : 0,
                    }}
                    transition={{ duration: 0.8 }}
                  />

                  {/* Content with stagger animation */}
                  <motion.div
                    className="relative z-10"
                    animate={{
                      y: currentIndex === index ? 0 : 10,
                      opacity: currentIndex === index ? 1 : 0.8,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                  >
                    <motion.h3
                      className="text-2xl font-bold text-blue-600 mb-4"
                      animate={{
                        scale: currentIndex === index ? 1.05 : 1,
                        color: currentIndex === index ? "#2563eb" : "#3b82f6",
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      {feature.title}
                    </motion.h3>
                    <motion.p
                      className="text-gray-600 leading-relaxed"
                      animate={{
                        opacity: currentIndex === index ? 1 : 0.9,
                      }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      {feature.description}
                    </motion.p>
                  </motion.div>

                  {/* Active indicator */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600"
                    initial={{ width: 0 }}
                    animate={{
                      width: currentIndex === index ? "100%" : "0%",
                    }}
                    transition={{
                      duration: currentIndex === index ? 4 : 0.3,
                      ease: currentIndex === index ? "linear" : "easeOut",
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center mt-6 space-x-3 md:hidden">
          {features.map((_, index) => (
            <motion.button
              key={index}
              className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 h-3 bg-blue-600"
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {index === currentIndex && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-700"
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 4, ease: "linear" }}
                />
              )}
            </motion.button>
          ))}
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
              className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 relative"
            >
              {/* Rotating Number with Gradient Border - Desktop */}
              <motion.div
                className="absolute -top-3 -right-3 w-16 h-16 rounded-full flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4)",
                  padding: "2px",
                }}
                initial={{ rotate: 0, scale: 0 }}
                whileInView={{
                  rotate: 360,
                  scale: 1,
                }}
                transition={{
                  rotate: {
                    duration: 1.5,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  },
                  scale: { duration: 0.5, delay: index * 0.1 },
                }}
                viewport={{ once: true }}
                whileHover={{
                  rotate: 360,
                  scale: 1.1,
                }}
              >
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                  <motion.span
                    className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {formatNumber(index + 1)}
                  </motion.span>
                </div>
              </motion.div>

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
