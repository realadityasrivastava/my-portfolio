import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  
  // CRITICAL FIX: Removed the trailing slash from the basePath
  basePath: '/my-portfolio',
};

export default nextConfig;