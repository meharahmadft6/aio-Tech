"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface HeroWithBgProps {
  title: string;
  backgroundImage?: string;
  overlayGradient?: string;
  interval?: number;
}

const HeroWithBg: React.FC<HeroWithBgProps> = ({
  title,
  backgroundImage = "/abstract1.jpg", // Default image path
  overlayGradient = "bg-gradient-to-b from-black/70 via-black/40 to-black/70",
  interval = 3000,
}) => {
  const [activeEffect, setActiveEffect] = useState<string>("holographic-grid");
  const effects = [
    "holographic-grid",
    "neon-pulse",
    "digital-rain",
    "particle-orb",
    "energy-wave",
  ];

  useEffect(() => {
    const effectInterval = setInterval(() => {
      setActiveEffect((prev) => {
        const currentIndex = effects.indexOf(prev);
        return effects[(currentIndex + 1) % effects.length];
      });
    }, interval);

    return () => clearInterval(effectInterval);
  }, [interval]);

  return (
    <section className="relative overflow-hidden h-110 md:h-[40rem]">
      {/* Optimized Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          priority
          quality={100}
          className="object-cover"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>

      {/* Rest of your component remains the same */}
      <div
        className={`absolute inset-0 effect-${activeEffect}`}
        style={{ zIndex: 10 }}
      />
      <div className={`absolute inset-0 ${overlayGradient} z-15`}></div>

      <div className="relative flex flex-col items-center justify-center h-full w-full z-30 px-4">
        <motion.h1
          className="text-white text-5xl md:text-7xl font-bold text-center mb-4 glow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h1>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-30" />
          
      {/* Global styles for our effects */}
      <style jsx global>{`
        /* Holographic Grid Effect */
        .effect-holographic-grid {
          background-image: linear-gradient(
              rgba(0, 200, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(90deg, rgba(0, 200, 255, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
          animation: gridPulse 4s infinite alternate;
        }

        @keyframes gridPulse {
          0% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.5;
            background-size: 35px 35px;
          }
          100% {
            opacity: 0.2;
          }
        }

        /* Neon Pulse Effect */
        .effect-neon-pulse {
          background: radial-gradient(
            circle,
            rgba(0, 255, 255, 0.1) 0%,
            transparent 70%
          );
          animation: neonPulse 3s infinite alternate;
        }

        @keyframes neonPulse {
          0% {
            transform: scale(1);
            opacity: 0.1;
          }
          100% {
            transform: scale(1.5);
            opacity: 0.3;
          }
        }

        /* Digital Rain Effect */
        .effect-digital-rain {
          background: linear-gradient(
            transparent 95%,
            rgba(0, 255, 0, 0.1) 96%
          );
          background-size: 100% 0.5em;
          animation: digitalRain 1s linear infinite;
        }

        @keyframes digitalRain {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 0 100%;
          }
        }

        /* Particle Orb Effect */
        .effect-particle-orb {
          background: radial-gradient(
            circle at center,
            rgba(255, 0, 255, 0.2) 0%,
            rgba(255, 0, 255, 0) 70%
          );
          animation: orbFloat 8s infinite ease-in-out;
        }

        @keyframes orbFloat {
          0%,
          100% {
            transform: translate(-20%, -20%) scale(1);
          }
          50% {
            transform: translate(20%, 20%) scale(1.2);
          }
        }

        /* Energy Wave Effect */
        .effect-energy-wave {
          background: linear-gradient(
            90deg,
            rgba(0, 255, 255, 0) 0%,
            rgba(0, 255, 255, 0.1) 50%,
            rgba(0, 255, 255, 0) 100%
          );
          animation: energyWave 6s linear infinite;
        }

        @keyframes energyWave {
          0% {
            transform: translateX(-100%) skewX(-20deg);
          }
          100% {
            transform: translateX(100%) skewX(-20deg);
          }
        }

        /* Glow effect for text */
        .glow {
          text-shadow: 0 0 10px rgba(100, 200, 255, 0.8);
        }
      `}</style>
    </section>
  );
};

export default HeroWithBg;
