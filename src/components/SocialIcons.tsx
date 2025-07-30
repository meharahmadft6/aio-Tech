// components/SocialIcons.tsx
"use client";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import React from "react";

export const socialIcons = {
  facebook: <Facebook className="h-6 w-6" />,
  instagram: <Instagram className="h-6 w-6" />,
  linkedin: <Linkedin className="h-6 w-6" />,
};

export type SocialIconName = keyof typeof socialIcons;
