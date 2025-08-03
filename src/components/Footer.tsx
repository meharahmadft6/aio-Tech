"use client";
import React from "react";
import {
  COMPANY_PHONE,
  COMPANY_EMAIL,
  COMPANY_CITY_STATE,
  COMPANY_SOCIAL_LINKS,
} from "../app/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="relative md:p-5 bg-white">
        <footer
          className="relative text-white overflow-hidden"
          style={{
            backgroundImage: "url('/footer.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "repeat",
            borderRadius: "32px 32px 0 0",
            borderBottomLeftRadius: "20% 20%",
            borderBottomRightRadius: "20% 20%",
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>

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

                {/* Social Icons */}
                <div className="mt-8 flex gap-6">
                  {COMPANY_SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:scale-110 transition-all duration-300"
                      aria-label={social.name}
                    >
                      {social.name === "Facebook" ? (
                        // Facebook Icon
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="w-8 h-8 text-blue-600 hover:text-blue-800 transition-colors duration-300"
                        >
                          <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.494v-9.294H9.691V11.01h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.098 2.795.142v3.24h-1.917c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.696h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
                        </svg>
                      ) : social.name === "Linkedin" ? (
                        // LinkedIn Icon
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="w-8 h-8 text-blue-500 hover:text-blue-700 transition-colors duration-300"
                        >
                          <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4v13h-4V8zm7.5 0h3.6v1.8h.05c.5-.9 1.8-1.85 3.7-1.85 4 0 4.75 2.6 4.75 6v7h-4v-6.2c0-1.5-.03-3.45-2.1-3.45-2.1 0-2.4 1.6-2.4 3.35V21h-4V8z" />
                        </svg>
                      ) : (
                        // Default (e.g., Instagram)
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="w-8 h-8 text-pink-600 hover:text-pink-800 transition-colors duration-300"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.973.24 2.43.403a4.92 4.92 0 011.675 1.093 4.92 4.92 0 011.093 1.675c.163.457.347 1.26.403 2.43.058 1.266.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.973-.403 2.43a4.902 4.902 0 01-2.768 2.768c-.457.163-1.26.347-2.43.403-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.973-.24-2.43-.403a4.902 4.902 0 01-2.768-2.768c-.163-.457-.347-1.26-.403-2.43C2.175 15.747 2.163 15.368 2.163 12s.012-3.584.07-4.85c.056-1.17.24-1.973.403-2.43a4.92 4.92 0 011.093-1.675A4.92 4.92 0 015.404 2.636c.457-.163 1.26-.347 2.43-.403C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.775.13 4.734.334 3.91.634a7.073 7.073 0 00-2.565 1.64A7.073 7.073 0 00.634 4.91C.334 5.734.13 6.775.072 8.052.014 9.332 0 9.741 0 12c0 2.259.014 2.668.072 3.948.058 1.277.262 2.318.562 3.142a7.088 7.088 0 001.64 2.565 7.088 7.088 0 002.565 1.64c.824.3 1.865.504 3.142.562C9.332 23.986 9.741 24 12 24s2.668-.014 3.948-.072c1.277-.058 2.318-.262 3.142-.562a7.088 7.088 0 002.565-1.64 7.088 7.088 0 001.64-2.565c.3-.824.504-1.865.562-3.142.058-1.28.072-1.689.072-3.948s-.014-2.668-.072-3.948c-.058-1.277-.262-2.318-.562-3.142a7.073 7.073 0 00-1.64-2.565 7.073 7.073 0 00-2.565-1.64C18.268.334 17.227.13 15.948.072 14.668.014 14.259 0 12 0zM12 5.838A6.162 6.162 0 005.838 12 6.162 6.162 0 0012 18.162 6.162 6.162 0 0018.162 12 6.162 6.162 0 0012 5.838zm0 10.162A3.999 3.999 0 1116 12a3.999 3.999 0 01-4 4zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                        </svg>
                      )}
                    </a>
                  ))}
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
                    className="hover:text-blue-400 hidden lg:block transition-colors duration-300 text-lg font-medium relative group"
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
              © 2025{" "}
              <strong>
                <Link href="/"> The AIO Tech US.</Link>
              </strong>{" "}
              All rights reserved.
            </p>
          </div>
        </div>
        <div
          className="shadow-2xl shadow-cyan-500/20 overflow-hidden transition-all duration-300 group-hover:scale-102 relative w-full h-64 md:h-82 lg:h-90 bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/footerdown.png')`,
          }}
        >
          <style jsx>{`
            @media (max-width: 768px) {
              div[style*="background-image"] {
                background-size: contain !important;
                height: 100px !important; /* Adjust this value as needed */
              }
            }

            @media (min-width: 769px) {
              div[style*="background-image"] {
                background-size: cover !important;
              }
            }
          `}</style>
        </div>
      </div>
    </>
  );
};

export default Footer;
