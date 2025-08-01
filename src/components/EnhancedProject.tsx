"use client";
import React, { useState, useEffect, useRef } from "react";
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
      textColor: "text-black",
    },
    {
      id: 2,
      title: "Rhino Movers",
      description: "Piano Moving Services",
      image: "/project2.png", // Make sure these images exist in your public folder
      link: "https://rhino-movers.com/",
      bgColor: "bg-[#87CEEB]",
      textColor: "text-black",
    },
    {
      id: 3,
      title: "Anna Senior Home Care",
      description: "Senior Home Health Care",
      image: "/project3.png", // Make sure these images exist in your public folder
      link: "https://annaseniorhome.care/",
      bgColor: "bg-[#98FB98]",
      textColor: "text-black",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-white text-black py-12 md:py-20 px-4 sm:px-6 lg:px-8 "
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
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
                <h3
                  className={`text-lg md:text-xl font-bold ${project.textColor} mb-1`}
                >
                  {project.title}
                </h3>
                <p className="text-black text-sm md:text-base">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
