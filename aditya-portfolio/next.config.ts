import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Forces Next.js to generate a static HTML out directory
  output: 'export',
  
  // Disables the server-side image optimization API
  images: {
    unoptimized: true,
  },

  // NOTE: If your GitHub repo is named "portfolio" instead of "username.github.io", 
  // you MUST uncomment the lines below and replace "portfolio" with your repo name.
  // basePath: '/portfolio',
  // assetPrefix: '/portfolio/',
};

export default nextConfig;