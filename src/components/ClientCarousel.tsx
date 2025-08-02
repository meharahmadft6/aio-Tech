"use client";
import React, { useEffect, useState } from "react";

const ClientMarquee = () => {
  const [isMobile, setIsMobile] = useState(false);

  const clients = [
    { name: "SAFE PIANO", logo: "/ongoing1.png" },
    { name: "Kash Construction", logo: "/ongoing5.webp" },
    { name: "Anna Senior", logo: "/ongoing2.avif" },
    { name: "Allan Architectural", logo: "/ongoing6.jpg" },
    { name: "Shelter Roofing CO.", logo: "/ongoing7.jpg" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
          Ongoing <span className="text-blue-600">Clients</span>
        </h2>

        <div className="relative overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap w-max">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="w-80 mx-4 flex-shrink-0 flex flex-col items-center"
              >
                <div className="bg-white w-72 p-6 rounded-xl shadow-md flex flex-col items-center mb-3">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-35  w-auto object-contain mb-4"
                    width={160}
                    height={120}
                  />
                  <h3 className="text-xl font-semibold text-gray-800 text-center">
                    {client.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-marquee {
            animation: marquee 5s linear infinite;
          }
        `}</style>
      </div>
    </div>
  );
};

export default ClientMarquee;
