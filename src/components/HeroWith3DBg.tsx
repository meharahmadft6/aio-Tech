"use client";
import React, { useEffect, useState } from "react";

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
  overlayGradient = "",
  interval = 3000,
}) => {
  const images = backgroundImages || (backgroundImage ? [backgroundImage] : []);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [transitionEffect, setTransitionEffect] = useState<string>("");
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);

  // Different effects for each transition
  const effects = [
    "digital-rain",
    "holographic",
    "neon-wave",
    "particle-explosion",
    "matrix",
  ];

  // Preload all images on component mount
  useEffect(() => {
    if (images.length <= 0) return;

    const loadStatus = new Array(images.length).fill(false);
    setImagesLoaded(loadStatus);

    images.forEach((img, index) => {
      const image = new Image();
      image.src = img;
      image.onload = () => {
        loadStatus[index] = true;
        setImagesLoaded([...loadStatus]);
      };
      image.onerror = () => {
        loadStatus[index] = true; // Mark as loaded even if error to avoid blocking
        setImagesLoaded([...loadStatus]);
      };
    });
  }, [images]);

  useEffect(() => {
    if (
      images.length <= 1 ||
      imagesLoaded.length === 0 ||
      !imagesLoaded[currentImageIndex]
    )
      return;

    const timer = setInterval(() => {
      // Select a random effect for each transition
      const randomEffect = effects[Math.floor(Math.random() * effects.length)];
      setTransitionEffect(randomEffect);

      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => {
          let nextIndex = prevIndex + 1;
          if (nextIndex >= images.length) nextIndex = 0;

          // Find the next loaded image
          while (!imagesLoaded[nextIndex] && nextIndex !== prevIndex) {
            nextIndex = (nextIndex + 1) % images.length;
          }

          return nextIndex;
        });
      }, 500); // Halfway through the animation
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval, imagesLoaded, currentImageIndex]);

  const handleDotClick = (index: number) => {
    if (index !== currentImageIndex && imagesLoaded[index]) {
      const randomEffect = effects[Math.floor(Math.random() * effects.length)];
      setTransitionEffect(randomEffect);
      setTimeout(() => {
        setCurrentImageIndex(index);
      }, 500);
    }
  };

  return (
    <section className="relative rounded-2xl overflow-hidden ms-5 me-5 mb-4 h-96 md:h-[32rem] bg-cover bg-center">
      {/* Background images with transitions */}
      {images.map((image, index) => (
        <React.Fragment key={index}>
          {/* Show a loading placeholder until images are loaded */}
          {!imagesLoaded[index] && index === 0 && (
            <div
              className="absolute inset-0 bg-gray-800 z-10"
              style={{ zIndex: 10 }}
            />
          )}

          <div
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: imagesLoaded[index] ? `url(${image})` : "none",
              backgroundSize: "cover",
              zIndex: 10,
            }}
          />

          {/* Active transition effect */}
          {index === currentImageIndex && imagesLoaded[index] && (
            <div className={`absolute inset-0 z-20 effect-${transitionEffect}`}>
              {/* Effect-specific elements will be styled via CSS */}
            </div>
          )}
        </React.Fragment>
      ))}

      {/* Overlay gradient */}
      <div className={`absolute inset-0 ${overlayGradient} z-15`}></div>

      {/* Content */}
      <div className="relative flex items-center justify-center h-full w-full z-30">
        <h1 className="text-white text-4xl md:text-6xl font-semibold text-center px-4">
          {title}
        </h1>
      </div>

      {/* Navigation dots - only show for loaded images */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-30">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentImageIndex
                  ? "bg-white w-6"
                  : imagesLoaded[index]
                  ? "bg-white/50"
                  : "bg-gray-500/30"
              }`}
              onClick={() => handleDotClick(index)}
              disabled={!imagesLoaded[index]}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Same global styles as before */}
      <style jsx global>{`
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

        /* Holographic Grid Effect */
        .effect-holographic {
          background-image: linear-gradient(
              rgba(0, 200, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(90deg, rgba(0, 200, 255, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: holographicPulse 2s infinite alternate;
        }

        @keyframes holographicPulse {
          0% {
            opacity: 0.3;
          }
          100% {
            opacity: 0.8;
          }
        }

        /* Neon Wave Effect */
        .effect-neon-wave {
          background: linear-gradient(
            90deg,
            rgba(255, 0, 255, 0) 0%,
            rgba(255, 0, 255, 0.2) 50%,
            rgba(255, 0, 255, 0) 100%
          );
          animation: neonWave 2s linear infinite;
        }

        @keyframes neonWave {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        /* Particle Explosion */
        .effect-particle-explosion {
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.8) 0%,
            rgba(255, 255, 255, 0) 70%
          );
          animation: particleExplode 1s ease-out forwards;
        }

        @keyframes particleExplode {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(3);
            opacity: 0;
          }
        }

        /* Matrix Code Effect */
        .effect-matrix::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(0, 255, 0, 0.2) 50%,
            transparent 100%
          );
          animation: matrixScan 1.5s linear infinite;
        }

        @keyframes matrixScan {
          from {
            top: -100%;
          }
          to {
            top: 100%;
          }
        }

        /* Base transition effects */
        .effect-digital-rain,
        .effect-holographic,
        .effect-neon-wave,
        .effect-particle-explosion,
        .effect-matrix {
          pointer-events: none;
        }
      `}</style>
    </section>
  );
};

export default HeroWithBg;
