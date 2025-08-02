"use client";
import React from "react";

const Marque = () => {
  const logos = [
    "/chatgpt.png",
    "/claude.png",
    "/metaai.png",
    "/gemini.png",
    "/googlelabs.png",
  ];

  return (
    <div className="relative w-full overflow-hidden py-8">
      <div className="flex w-max">
        {/* Render multiple sets of logos for seamless looping */}
        {[...Array(10)].map((_, setIndex) => (
          <div
            key={`set-${setIndex}`}
            className="flex animate-marquee whitespace-nowrap"
          >
            {logos.map((logo, index) => (
              <div
                key={`logo-${setIndex}-${index}`}
                className="mx-8 inline-flex items-center flex-shrink-0"
              >
                <img
                  src={logo}
                  alt="AI Platform Logo"
                  className="h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                  width={120}
                  height={108}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-marquee {
          animation: marquee 4s linear infinite;
          display: inline-flex;
        }
      `}</style>
    </div>
  );
};

export default Marque;
