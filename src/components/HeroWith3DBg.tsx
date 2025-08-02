"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
interface HeroWithBgProps {
  title: string;
  backgroundImages?: string[];
  backgroundImage?: string;
  overlayGradient?: string;
  interval?: number;
}

const HeroWithBg: React.FC<HeroWithBgProps> = ({
  title,
  backgroundImages,
  backgroundImage,
  overlayGradient = "bg-gradient-to-b from-black/70 via-black/40 to-black/70",
  interval = 3000,
}) => {
  const images = backgroundImages || (backgroundImage ? [backgroundImage] : []);
  const [currentImageIndex] = useState(0); // We'll use just one image but with multiple effects
  const [activeEffect, setActiveEffect] = useState<string>("holographic-grid");
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });

  // Futuristic effects for our single image
  const effects = [
    "holographic-grid",
    "neon-pulse",
    "digital-rain",
    "particle-orb",
    "energy-wave",
  ];

  useEffect(() => {
    // Cycle through effects for continuous animation
    const effectInterval = setInterval(() => {
      setActiveEffect((prev) => {
        const currentIndex = effects.indexOf(prev);
        return effects[(currentIndex + 1) % effects.length];
      });
    }, interval);

    return () => clearInterval(effectInterval);
  }, [interval]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 40;
      const y = (clientY / window.innerHeight - 0.5) * 40;
      setParallaxOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseenter", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative  overflow-hidden  h-110 md:h-[40rem] bg-cover bg-center">
      {/* 3D Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out"
        style={{
          backgroundImage: `url(/abstract1.jpg)`,
          transform: `translate(${parallaxOffset.x}px, ${parallaxOffset.y}px) scale(1.1)`,
          zIndex: 5,
        }}
      />

      {/* Animated Effects Layer */}
      <div
        className={`absolute inset-0 effect-${activeEffect}`}
        style={{ zIndex: 10 }}
      />

      {/* Overlay gradient */}
      <div className={`absolute inset-0 ${overlayGradient} z-15`}></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full w-full z-30 px-4">
        <motion.h1
          className="text-white text-5xl md:text-7xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h1>
      </div>

      {/* Futuristic UI Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-30" />
      <div className="absolute top-4 left-4 right-4 flex justify-between z-30">
        <div className="h-1 w-8 bg-blue-400 rounded-full" />
        <div className="h-1 w-8 bg-purple-400 rounded-full" />
        <div className="h-1 w-8 bg-pink-400 rounded-full" />
      </div>

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
