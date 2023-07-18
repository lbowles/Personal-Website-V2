/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: process.env.NODE_ENV === "development",
  },
  output: "export",
};

module.exports = nextConfig;
