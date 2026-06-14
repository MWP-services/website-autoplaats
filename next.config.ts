import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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

export default nextConfig;
