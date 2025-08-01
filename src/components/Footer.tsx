import React from "react";
import {
  COMPANY_PHONE,
  COMPANY_EMAIL,
  COMPANY_CITY_STATE,
} from "../app/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="relative md:p-5 bg-white">
        {" "}
        {/* Removed rounded-full class from here */}
        <footer
          className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white overflow-hidden"
          style={{
            borderRadius: "32px 32px 0 0", // Top border radius
            borderBottomLeftRadius: "20% 20%", // Adjust these values for the desired curve
            borderBottomRightRadius: "20% 20%", // Adjust these values for the desired curve
            // You might also need to use clip-path for more complex shapes,
            // but for a simple upward curve on the bottom, border-radius can work.
            // Ensure the bottom part of the footer (copyright) aligns visually.
          }}
        >
          {/* Background Energy Effects */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-40 w-64 h-64 bg-cyan-400/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>

          {/* Neural Network Lines */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1200 400" fill="none">
              <path
                d="M0 200 Q 200 100 400 200 T 800 150 L 1200 180"
                stroke="url(#gradient1)"
                strokeWidth="2"
                className="animate-pulse"
              />
              <path
                d="M0 250 Q 300 180 600 220 T 1200 200"
                stroke="url(#gradient2)"
                strokeWidth="1.5"
                className="animate-pulse delay-700"
              />
              <path
                d="M0 300 Q 400 250 800 280 L 1200 260"
                stroke="url(#gradient3)"
                strokeWidth="1"
                className="animate-pulse delay-300"
              />
              <defs>
                <linearGradient
                  id="gradient1"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                  <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="gradient2"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
                  <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="gradient3"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#1e40af" stopOpacity="0" />
                  <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#1e40af" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
            {/* Main CTA Section */}
            <div className="flex flex-col lg:flex-row items-center justify-between mb-16">
              <div className="lg:w-2/3 mb-8 lg:mb-0">
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4 hidden lg:block">
                  Ready to take your digital
                  <br />
                  <span className="">presence to the next</span>
                  <br />
                  level?
                </h2>
                <h2 className="text-3xl font-bold mb-4 leading-tight sm:hidden">
                  Ready to take your digital <span> </span>
                  <span className="">presence to the next</span>
                  <span> </span>
                  level?
                </h2>

                {/* Contact Information */}
                <div className="mt-6 space-y-2">
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <a
                      href={`mailto:${COMPANY_EMAIL}`}
                      className="hover:text-blue-400 transition-colors"
                    >
                      {COMPANY_EMAIL}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <a
                      href={`tel:${COMPANY_PHONE.replace(/[^0-9+]/g, "")}`}
                      className="hover:text-blue-400 transition-colors"
                    >
                      {COMPANY_PHONE}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z"
                      />
                    </svg>
                    <a className="hover:text-blue-400 transition-colors">
                      {COMPANY_CITY_STATE}
                    </a>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/3 flex justify-center lg:justify-end">
                <Link href="/contact" passHref>
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-400/30">
                    <span className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
                      Get in touch
                    </span>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </button>
                </Link>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="mb-12">
              <ul className="flex flex-wrap justify-center lg:justify-start gap-8 text-gray-300">
                <li>
                  <a
                    href="/services"
                    className="hover:text-blue-400 transition-colors duration-300 text-lg font-medium relative group"
                  >
                    Services
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-blue-400 transition-colors duration-300 text-lg font-medium relative group"
                  >
                    Contact
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="hover:text-blue-400 transition-colors duration-300 text-lg font-medium relative group"
                  >
                    About
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="/portfolio"
                    className="hover:text-blue-400 transition-colors duration-300 text-lg font-medium relative group"
                  >
                    Portfolio
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </footer>
      </div>
      <div className="bg-white relative">
        {/* Copyright Text */}
        <div className="bg-white px-6 pb-8 -mt-1">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-black text-base mt-3">
              © 2025 The AIO Tech. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
