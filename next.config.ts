import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required for static export
    // domains won't be used - remove them
  },
};
export default nextConfig;
