/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: process.env.NODE_ENV === "development",
  },
  output: "export",
  // Pin the workspace root so Next doesn't infer it from stray lockfiles
  // elsewhere on the machine (e.g. ~/yarn.lock).
  turbopack: {
    root: __dirname,
  },
  outputFileTracingRoot: __dirname,
};

module.exports = nextConfig;
