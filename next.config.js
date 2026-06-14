/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    localPatterns: [
      {
        pathname: "/cars/**",
      },
      {
        pathname: "/brand/**",
      },
    ],
  },
};

module.exports = nextConfig;