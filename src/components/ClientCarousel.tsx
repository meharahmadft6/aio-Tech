"use client";
import React, { useState, useEffect } from "react";

const ClientCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const clients = [
    { name: "SAFE PIANO", logo: "/ongoing1.png" },
    { name: "Rhino Movers", logo: "/ongoing4.webp" },
    { name: "Anna Senior", logo: "/ongoing2.avif" },
    { name: "SAFE PIANO", logo: "/ongoing1.png" },
    { name: "Rhino Movers", logo: "/ongoing4.webp" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (isMobile) {
          return prevIndex === clients.length - 1 ? 0 : prevIndex + 1;
        } else {
          return prevIndex >= clients.length - 3 ? 0 : prevIndex + 1;
        }
      });
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [isMobile, clients.length]);

  const visibleClients = isMobile
    ? clients
    : clients.slice(currentIndex, currentIndex + 3);

  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
          Ongoing <span className="text-blue-600">Clients</span>
        </h2>

        <div className="relative">
          {/* Client Carousel */}
          <div className="overflow-hidden">
            <div
              className={`flex transition-transform duration-500 ease-in-out ${
                !isMobile ? "justify-center" : ""
              }`}
              style={{
                transform: isMobile
                  ? `translateX(-${currentIndex * 100}%)`
                  : "none",
              }}
            >
              {visibleClients.map((client, index) => (
                <div
                  key={index}
                  className={`${
                    isMobile ? "w-full" : "w-1/3 px-4"
                  } flex-shrink-0 flex flex-col items-center`}
                >
                  <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md flex flex-col items-center">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="h-24 w-auto object-contain mb-6"
                      width={160}
                      height={96}
                    />
                    <h3 className="text-2xl font-semibold text-gray-800">
                      {client.name}
                    </h3>
                    <p className="mt-4 text-gray-600 text-center">
                      Currently working on exciting projects together
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {clients.map((_, index) => {
              if (!isMobile && index > clients.length - 3) return null;
              return (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    (isMobile && index === currentIndex) ||
                    (!isMobile &&
                      index >= currentIndex &&
                      index < currentIndex + 3)
                      ? "bg-blue-600"
                      : "bg-gray-300"
                  }`}
                  aria-label={`Go to client ${index + 1}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientCarousel;
