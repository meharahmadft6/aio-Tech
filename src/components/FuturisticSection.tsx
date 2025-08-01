"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface FuturisticRevealProps {
  imageUrl: string;
  altText?: string;
}

interface ParagraphData {
  text: string;
  className: string;
}

const FuturisticReveal: React.FC<FuturisticRevealProps> = ({
  imageUrl,
  altText = "Featured image",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  const paragraphs: ParagraphData[] = [
    {
      text: "THE AIO TECH US is your smart business partner — your digital co-founder for instant growth. It monitors your operations, anticipates trends, and recommends your next best step.",
      className: "text-2xl md:text-3xl font-bold text-white",
    },
    {
      text: "No more juggling between apps, hunting for key metrics, or waiting on delayed reports. Everything updates live — right on your screen. You can tweak campaigns on the go without restarting from scratch.",
      className: "text-xl md:text-2xl text-white",
    },
    {
      text: "With our unified control center, you can manage, monitor, and scale your business from a single, streamlined dashboard. Gain full visibility into what drives your revenue and performance.",
      className: "text-xl md:text-2xl text-white",
    },
    {
      text: "We fast-track your growth — from professional websites and scroll-stopping content to performance-driven marketing that turns visitors into customers.",
      className: "text-xl md:text-2xl text-white",
    },
    {
      text: "While others promise, THE AIO TECH US delivers.",
      className: "text-2xl md:text-3xl font-bold text-white",
    },
  ];

  // Create individual refs for each paragraph at the top level
  const paragraph0Ref = useRef<HTMLDivElement>(null);
  const paragraph1Ref = useRef<HTMLDivElement>(null);
  const paragraph2Ref = useRef<HTMLDivElement>(null);
  const paragraph3Ref = useRef<HTMLDivElement>(null);
  const paragraph4Ref = useRef<HTMLDivElement>(null);

  // Create scroll progress for each paragraph at the top level
  const { scrollYProgress: scroll0 } = useScroll({
    target: paragraph0Ref,
    offset: ["start end", "center start"],
  });
  const { scrollYProgress: scroll1 } = useScroll({
    target: paragraph1Ref,
    offset: ["start end", "center start"],
  });
  const { scrollYProgress: scroll2 } = useScroll({
    target: paragraph2Ref,
    offset: ["start end", "center start"],
  });
  const { scrollYProgress: scroll3 } = useScroll({
    target: paragraph3Ref,
    offset: ["start end", "center start"],
  });
  const { scrollYProgress: scroll4 } = useScroll({
    target: paragraph4Ref,
    offset: ["start end", "center start"],
  });

  // Create transforms for each paragraph at the top level
  const opacity0 = useTransform(scroll0, [0, 0.5, 1], [0, 1, 1]);
  const y0 = useTransform(scroll0, [0, 0.5], [30, 0]);

  const opacity1 = useTransform(scroll1, [0, 0.5, 1], [0, 1, 1]);
  const y1 = useTransform(scroll1, [0, 0.5], [30, 0]);

  const opacity2 = useTransform(scroll2, [0, 0.5, 1], [0, 1, 1]);
  const y2 = useTransform(scroll2, [0, 0.5], [30, 0]);

  const opacity3 = useTransform(scroll3, [0, 0.5, 1], [0, 1, 1]);
  const y3 = useTransform(scroll3, [0, 0.5], [30, 0]);

  const opacity4 = useTransform(scroll4, [0, 0.5, 1], [0, 1, 1]);
  const y4 = useTransform(scroll4, [0, 0.5], [30, 0]);

  // Array of refs and animations for easier mapping
  const paragraphRefs = [
    paragraph0Ref,
    paragraph1Ref,
    paragraph2Ref,
    paragraph3Ref,
    paragraph4Ref,
  ];
  const paragraphAnimations = [
    { opacity: opacity0, y: y0 },
    { opacity: opacity1, y: y1 },
    { opacity: opacity2, y: y2 },
    { opacity: opacity3, y: y3 },
    { opacity: opacity4, y: y4 },
  ];

  useEffect(() => {
    // Set ready state after mount
    setIsReady(true);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Full-screen static image */}
      <div className="h-screen w-full">
        <img
          src={imageUrl}
          alt={altText}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text section with sequential reveal */}
      <div className="bg-black w-full py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          {paragraphs.map((paragraph, index) => (
            <motion.div
              key={index}
              ref={paragraphRefs[index]}
              style={isReady ? paragraphAnimations[index] : {}}
              className={`${paragraph.className} mb-8 md:mb-12`}
            >
              {paragraph.text}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FuturisticReveal;
