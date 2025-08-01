"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import styles from "../../footer.module.css";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counter, setCounter] = useState(0);
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Kash Construction",
      description: "General and Rebuilding Contractor",
      image: "/project1.png",
      link: "https://kashconstructioninc.com/",
      bgColor: "bg-gradient-to-br from-yellow-400 to-yellow-600",
      textColor: "text-white",
    },
    {
      id: 2,
      title: "Rhino Movers",
      description: "Piano Moving Services",
      image: "/project2.png",
      link: "https://rhino-movers.com/",
      bgColor: "bg-gradient-to-br from-blue-400 to-blue-600",
      textColor: "text-white",
    },
    {
      id: 3,
      title: "Anna Senior Home Care",
      description: "Senior Home Health Care",
      image: "/project3.png",
      link: "https://annaseniorhome.care/",
      bgColor: "bg-gradient-to-br from-green-400 to-green-600",
      textColor: "text-white",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = 187;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCounter(end);
          clearInterval(timer);
        } else {
          setCounter(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white py-12 md:py-20 px-4 sm:px-6 lg:px-8 mx-2 md:mx-5 mb-5 rounded-2xl shadow-md border border-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Our Featured Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {projects.map((project) => (
            <div key={project.id} className="group relative">
              {/* Project Card */}
              <div
                className="backdrop-blur-md bg-white/10 border border-white-300/60 shadow-2xl shadow-cyan-500/20 rounded-3xl overflow-hidden mb-4 transition-all duration-300  group-hover:scale-102 relative w-full h-64 md:h-72 lg:h-80"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: "100% 100%",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  {/* Gradient/overlay as before */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-800/30 via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300" />
                </a>
              </div>

              {/* Project Info */}
              <div className="px-2">
                <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Explore Button */}
          <Link href="/about" className="w-full md:w-auto inline-block">
            <motion.button
              className="relative w-full md:w-auto bg-black text-white px-8 py-4 rounded-full text-sm md:text-base font-medium overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Button text with glow */}
              <span className="relative z-10 group-hover:text-cyan-300 transition-colors duration-300">
                Explore our work
              </span>

              {/* Thicker animated border with neon effect */}
              <motion.span
                className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              />
              <motion.span
                className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
                initial={{ y: "-100%" }}
                whileHover={{ y: "100%" }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0.3,
                }}
              />
              <motion.span
                className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                initial={{ x: "100%" }}
                whileHover={{ x: "-100%" }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0.6,
                }}
              />
              <motion.span
                className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
                initial={{ y: "100%" }}
                whileHover={{ y: "-100%" }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0.9,
                }}
              />

              {/* Stronger pulsing glow */}
              <motion.span
                className="absolute inset-0 rounded-full border-2 border-cyan-400/50 pointer-events-none"
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  boxShadow: [
                    "0 0 10px rgba(34, 211, 238, 0)",
                    "0 0 20px rgba(34, 211, 238, 0.5)",
                    "0 0 10px rgba(34, 211, 238, 0)",
                  ],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Additional particle effect */}
              <motion.span
                className="absolute inset-0 rounded-full pointer-events-none overflow-hidden"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                {[...Array(8)].map((_, i) => (
                  <motion.span
                    key={i}
                    className="absolute bg-cyan-400 rounded-full"
                    initial={{
                      width: "4px",
                      height: "4px",
                      x: `${Math.random() * 100}%`,
                      y: `${Math.random() * 100}%`,
                      opacity: 0,
                    }}
                    animate={{
                      x: `${Math.random() * 100}%`,
                      y: `${Math.random() * 100}%`,
                      opacity: [0, 0.8, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </motion.span>
            </motion.button>
          </Link>
          <div className="text-center md:text-right w-full md:w-auto">
            <div className="relative mb-2">
              <span
                className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ${styles.gradientStrokeText}`}
                data-text={`${counter}+`}
              >
                {counter}+
              </span>
              <p className="text-gray-400 text-sm md:text-base">
                Completed projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
