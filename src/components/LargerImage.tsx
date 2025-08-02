"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface LargerImageProps {
  imageUrl: string;
  altText?: string;
  className?: string;
  mobileHeight?: string;
  desktopHeight?: string;
  priority?: boolean;
}

const LargerImage: React.FC<LargerImageProps> = ({
  imageUrl,
  altText = "Featured image",
  className = "",
  mobileHeight = "min-h-[400px] h-[60vh]", // Added min-height for mobile
  desktopHeight = "h-[80vh]",
  priority = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      className={`relative bg-white overflow-hidden w-full ${className}`}
    >
      {/* Main image container */}
      <div
        className={`rounded-3xl overflow-hidden shadow-xl  my-5 h-70 md:mx-5 md:h-80 lg:h-96`}
      >
        <div
          className="shadow-2xl shadow-cyan-500/20  overflow-hidden mb-4 transition-all duration-300  group-hover:scale-102 relative w-full h-70 md:h-82 lg:h-96"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </motion.div>
  );
};

export default LargerImage;
