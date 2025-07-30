"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
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
              <span className="text-black">expect -</span> {/* Gradient text */}
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
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
        >
          <div className="relative w-80 h-80 lg:w-96 lg:h-96">
            {/* Background Circle */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-blue-500 rounded-3xl"></div>

            {/* Robot SVG */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 200 240" className="w-64 h-64 lg:w-80 lg:h-80">
                {/* SEO Bot Head - Magnifying Glass */}
                <ellipse
                  cx="100"
                  cy="80"
                  rx="50"
                  ry="45"
                  fill="#F0FDF4"
                  stroke="#86EFAC"
                  strokeWidth="2"
                />

                {/* Magnifying Glass Lens */}
                <circle
                  cx="100"
                  cy="80"
                  r="25"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="3"
                >
                  <animate
                    attributeName="r"
                    values="25;30;25"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Magnifying Glass Handle */}
                <line
                  x1="120"
                  y1="100"
                  x2="150"
                  y2="130"
                  stroke="#3B82F6"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* SEO Bot Body - Search Bar */}
                <rect
                  x="60"
                  y="110"
                  width="80"
                  height="90"
                  rx="15"
                  fill="#ECFDF5"
                  stroke="#6EE7B7"
                  strokeWidth="2"
                />

                {/* Search Input */}
                <rect
                  x="70"
                  y="125"
                  width="60"
                  height="20"
                  rx="5"
                  fill="white"
                  stroke="#A7F3D0"
                  strokeWidth="1"
                />

                {/* Search Button */}
                <rect
                  x="135"
                  y="125"
                  width="20"
                  height="20"
                  rx="5"
                  fill="#10B981"
                  stroke="#059669"
                  strokeWidth="1"
                />

                {/* Search Icon */}
                <g transform="translate(140, 130) scale(0.8)">
                  <circle
                    cx="10"
                    cy="10"
                    r="7"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <line
                    x1="15"
                    y1="15"
                    x2="20"
                    y2="20"
                    stroke="white"
                    strokeWidth="2"
                  />
                </g>

                {/* Ranking Bars (SEO Metrics) */}
                <rect
                  x="75"
                  y="155"
                  width="10"
                  height="30"
                  rx="2"
                  fill="#10B981"
                >
                  <animate
                    attributeName="height"
                    values="30;15;30"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect
                  x="90"
                  y="155"
                  width="10"
                  height="40"
                  rx="2"
                  fill="#3B82F6"
                >
                  <animate
                    attributeName="height"
                    values="40;20;40"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect
                  x="105"
                  y="155"
                  width="10"
                  height="25"
                  rx="2"
                  fill="#F59E0B"
                >
                  <animate
                    attributeName="height"
                    values="25;10;25"
                    dur="1.8s"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect
                  x="120"
                  y="155"
                  width="10"
                  height="35"
                  rx="2"
                  fill="#EC4899"
                >
                  <animate
                    attributeName="height"
                    values="35;18;35"
                    dur="2.2s"
                    repeatCount="indefinite"
                  />
                </rect>

                {/* SEO Bot Arms - Connecting Lines */}
                <path
                  d="M40 130 Q60 140 60 150"
                  stroke="#A7F3D0"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="4 2"
                />
                <path
                  d="M160 130 Q140 140 140 150"
                  stroke="#A7F3D0"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="4 2"
                />

                {/* SEO Bot Hands - Data Nodes */}
                <circle cx="40" cy="130" r="8" fill="#3B82F6">
                  <animate
                    attributeName="r"
                    values="8;10;8"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="160" cy="130" r="8" fill="#EC4899">
                  <animate
                    attributeName="r"
                    values="8;10;8"
                    dur="2s"
                    repeatCount="indefinite"
                    begin="0.5s"
                  />
                </circle>

                {/* SEO Bot Legs - Traffic Arrows */}
                <path
                  d="M75 200 L85 215 L75 215 Z"
                  fill="#10B981"
                  stroke="#059669"
                  strokeWidth="1"
                >
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="0 0; 0 -5; 0 0"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </path>
                <path
                  d="M125 200 L115 215 L125 215 Z"
                  fill="#3B82F6"
                  stroke="#2563EB"
                  strokeWidth="1"
                >
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="0 0; 0 -5; 0 0"
                    dur="2s"
                    repeatCount="indefinite"
                    begin="0.3s"
                  />
                </path>

                {/* SEO Bot Antenna - Signal Waves */}
                <line
                  x1="100"
                  y1="35"
                  x2="100"
                  y2="20"
                  stroke="#3B82F6"
                  strokeWidth="2"
                />
                <circle cx="100" cy="18" r="5" fill="#3B82F6">
                  <animate
                    attributeName="r"
                    values="5;8;5"
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Pulsing Signal Waves */}
                <circle
                  cx="100"
                  cy="18"
                  r="15"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="1"
                  opacity="0"
                >
                  <animate
                    attributeName="r"
                    values="15;30;15"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.5;0;0"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* SEO Title */}
                <text
                  x="100"
                  y="50"
                  textAnchor="middle"
                  fontSize="12"
                  fill="#065F46"
                  fontWeight="bold"
                >
                  SEO
                </text>
              </svg>
            </div>

            {/* Floating Elements */}
            <div
              className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-60 animate-bounce"
              style={{ animationDelay: "0s" }}
            ></div>
            <div
              className="absolute top-12 -left-6 w-6 h-6 bg-purple-500 rounded-full opacity-60 animate-bounce"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute -bottom-6 right-8 w-10 h-10 bg-green-500 rounded-full opacity-60 animate-bounce"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
    </section>
  );
}
