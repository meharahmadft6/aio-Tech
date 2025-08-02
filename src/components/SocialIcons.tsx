// components/SocialIcons.tsx
"use client";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import React from "react";

export const socialIcons = {
  facebook: <Facebook className="h-10 w-10" />,
  instagram: <Instagram className="h-10 w-10" />,
  linkedin: <Linkedin className="h-10 w-10" />,
};

export type SocialIconName = keyof typeof socialIcons;
