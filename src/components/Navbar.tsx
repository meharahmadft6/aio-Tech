// components/Navbar.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { COMPANY_PHONE } from "../app/constants";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full bg-[#f5f7f9] py-4 px-2 font-poppins">
      <div className="max-w-7xl mx-auto bg-white rounded-full shadow-sm px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 z-50">
          <Image src="/logo.png" alt="Brainforce Logo" width={60} height={60} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center relative">
          {/* Centered Links */}
          <div className="flex items-center space-x-10">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/about" },
              { name: "Services", href: "/services" },
              { name: "Contact Us", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-[15px] font-medium text-gray-900 transition-all duration-500 group"
              >
                <span className="relative z-10 block py-2">{item.name}</span>

                {/* Underline animation */}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-500 group-hover:w-full"></span>

                {/* Subtle lift effect */}
                <span className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md rounded-md"></span>
              </Link>
            ))}
          </div>

          {/* Phone Number absolutely positioned to right */}
          <div className="absolute hidden right-0 top-1/2 -translate-y-1/2 md:flex items-center space-x-2 group">
            <div className="relative p-1">
              {/* Phone icon with pulse animation */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-600 transition-transform duration-300 group-hover:scale-110"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              {/* Animated ring */}
              <span className="absolute inset-0 rounded-full border-2 border-blue-600 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></span>
            </div>

            {/* Phone number with slide-in underline */}
            <a
              href={`tel:${COMPANY_PHONE.replace(/\D/g, "")}`}
              className="relative text-[15px] font-medium text-gray-900 transition-all duration-300 hover:text-blue-600"
            >
              <span className="relative">
                {COMPANY_PHONE}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-500 group-hover:w-full"></span>
              </span>
            </a>
          </div>
        </div>
        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {/* Mobile Sidebar Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-end px-4 py-4 border-b">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-gray-900 transition"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-col px-4 py-6 space-y-4">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/about" },
              { name: "Services", href: "/services" },
              { name: "Contact Us", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-800 text-base font-medium border-b pb-2 border-gray-200 hover:text-blue-600 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <div className="flex items-center pt-4 border-t border-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-600 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <a
                href={`tel:${COMPANY_PHONE.replace(/\D/g, "")}`}
                className="text-[15px] font-medium text-gray-900 hover:text-blue-600 transition"
              >
                {COMPANY_PHONE}
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
