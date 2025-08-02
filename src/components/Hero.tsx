"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <section className="relative bg-[#f5f7f9]  overflow-hidden">
        {/* Hero Content */}
        <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-16 px-6 lg:px-12 py-12 lg:py-20">
          {/* Left Content */}
          <div className="flex flex-col justify-center items-center lg:items-start space-y-8 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 lg:ml-20">
            <div className="space-y-6 w-full text-center lg:text-left">
              <h1
                className={`text-2xl sm:text-xl xl:text-6xl font-bold leading-tight transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <span className="text-black">Anything you </span>
                {/* Line break only visible on large screens and up */}
                <br className="hidden lg:block" />
                <span className="text-black">expect -</span>{" "}
                {/* Gradient text */}
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  The AIO Tech
                </span>
              </h1>
            </div>

            <Link
              href="/contact"
              className="w-full lg:w-auto flex justify-center lg:justify-start"
            >
              <div
                className={`inline-flex px-8 py-4 bg-black text-white rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 items-center space-x-2 cursor-pointer transition-all duration-1000 delay-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <span>Get Started</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          </div>
          {/* Right Content - Robot Illustration */}
          <div
            className={`flex md:mr-20 items-center justify-center lg:justify-end transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Animated border glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl opacity-75 blur-sm animate-pulse"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-3xl opacity-30 blur-md animate-spin-slow"></div>

              {/* Corner accent lights */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-cyan-400 rounded-full blur-sm animate-ping"></div>
              <div
                className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full blur-sm animate-ping"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-400 rounded-full blur-sm animate-ping"
                style={{ animationDelay: "2s" }}
              ></div>
              <div
                className="absolute -bottom-2 -right-2 w-4 h-4 bg-pink-400 rounded-full blur-sm animate-ping"
                style={{ animationDelay: "3s" }}
              ></div>

              {/* Main image container */}
              <div className="relative w-full h-full">
                {/* Background with Hero Image */}
                <div
                  className="absolute inset-0 bg-black rounded-3xl overflow-hidden shadow-2xl"
                  style={{
                    backgroundImage: "url('/globe.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  {/* Dark overlay for better contrast */}
                  <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>

                  {/* Scanning line effect */}
                  <div className="absolute inset-0 overflow-hidden rounded-3xl">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60 animate-scan"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <style jsx>{`
            @keyframes spin-slow {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
            }

            @keyframes scan {
              0% {
                transform: translateY(0) scaleX(0);
              }
              50% {
                transform: translateY(320px) scaleX(1);
              }
              100% {
                transform: translateY(640px) scaleX(0);
              }
            }

            .animate-spin-slow {
              animation: spin-slow 8s linear infinite;
            }

            .animate-scan {
              animation: scan 3s ease-in-out infinite;
            }
          `}</style>{" "}
        </div>

        {/* Background Decorative Elements */}
      </section>
    </>
  );
}
