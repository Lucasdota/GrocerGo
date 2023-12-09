/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
    SPOONACULAR_API_KEY: process.env.SPOONACULAR_API_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "spoonacular.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

module.exports = nextConfig
