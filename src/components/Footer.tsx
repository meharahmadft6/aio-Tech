import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white overflow-hidden">
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
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
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
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Ready to take your digital
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                presence to the next
              </span>
              <br />
              level?
            </h2>
          </div>

          <div className="lg:w-1/3 flex justify-center lg:justify-end">
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
                href="/privacy-policy"
                className="hover:text-blue-400 transition-colors duration-300 text-lg font-medium relative group"
              >
                Privacy Policy
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Copyright */}
        <div className="text-center lg:text-left">
          <p className="text-gray-400 text-sm">
            © 2025 The AIO Tech. All rights reserved.
          </p>
        </div>
      </div>

      {/* Additional decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
    </footer>
  );
};

export default Footer;
