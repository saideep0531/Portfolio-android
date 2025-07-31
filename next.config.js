/** @type {import('next').NextConfig} */
/**
 * Next.js Configuration
 * 
 * This file configures Next.js build and runtime behavior.
 * Currently includes:
 * - React Strict Mode for better development experience
 * - Image optimization settings (currently empty but ready for future use)
 */
const nextConfig = {
  // Enable React Strict Mode for better development experience and future React features
  reactStrictMode: true,
  
  // Image optimization configuration
  // Add external domains here if you need to load images from external sources
  images: {
    // domains: ['example.com'], // Add external image domains here if needed
  },
};

module.exports = nextConfig;