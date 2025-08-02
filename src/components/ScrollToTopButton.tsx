"use client";
import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="group relative w-14 h-14 bg-gray-900 rounded-full shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center border border-gray-700 hover:border-blue-400"
        aria-label="Scroll to top"
      >
        {/* Floating effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

        {/* Main icon with subtle animation */}
        <ChevronUp
          size={20}
          className="text-gray-300 group-hover:text-blue-400 transition-all duration-300 transform group-hover:-translate-y-0.5"
        />

        {/* Minimal pulse effect */}
        <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-blue-400/30 transition-all duration-500 animate-pulse opacity-0 group-hover:opacity-100"></div>

        {/* Click ripple effect */}
        <div className="absolute inset-0 rounded-full bg-white opacity-0 group-active:opacity-10 transition-opacity duration-150"></div>
      </button>

      {/* Subtle tooltip */}
      <div className="absolute bottom-full right-0 mb-3 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md">
        Back to top
        <div className="absolute top-full right-3 w-0 h-0 border-l-3 border-r-3 border-t-3 border-transparent border-t-gray-800"></div>
      </div>
    </div>
  );
};

export default ScrollToTopButton;
