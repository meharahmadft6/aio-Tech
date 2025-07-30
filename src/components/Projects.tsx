"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counter, setCounter] = useState(0);
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Kash Construction",
      description: "General and Rebuilding Contractor",
      image: "/project1.png", // Make sure these images exist in your public folder
      link: "https://kashconstructioninc.com/",
      bgColor: "bg-[#FFD700]",
      textColor: "text-white",
    },
    {
      id: 2,
      title: "Rhino Movers",
      description: "Piano Moving Services",
      image: "/project2.png", // Make sure these images exist in your public folder
      link: "https://rhino-movers.com/",
      bgColor: "bg-[#87CEEB]",
      textColor: "text-white",
    },
    {
      id: 3,
      title: "Anna Senior Home Care",
      description: "Senior Home Health Care",
      image: "/project3.png", // Make sure these images exist in your public folder
      link: "https://annaseniorhome.care/",
      bgColor: "bg-[#98FB98]",
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
      const end = 50;
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
          <p className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
            Explore our diverse portfolio of creative work
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {projects.map((project) => (
            <div key={project.id} className="group relative">
              {/* Project Card */}
              <div
                className={`${project.bgColor} rounded-3xl aspect-square overflow-hidden mb-4 transition-all duration-300 group-hover:shadow-xl`}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full w-full relative"
                >
                  {/* Using Next.js Image component for optimized images */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-fit group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </a>
              </div>

              {/* Project Info */}
              <div className="px-2">
                <h3
                  className={`text-lg md:text-xl font-bold ${project.textColor} mb-1`}
                >
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section - Improved for mobile */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Explore Button - Made larger on mobile */}
          <Link href="/about" className="w-full md:w-auto">
            <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 md:px-8 md:py-3 rounded-full transition-all duration-300 text-sm md:text-base">
              Explore our work
            </button>
          </Link>

          {/* Counter - Centered on mobile */}
          <div className="text-center md:text-right w-full md:w-auto">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {counter}+
              </span>
            </div>
            <p className="text-gray-400 text-sm md:text-base">
              Completed projects
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
