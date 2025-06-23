import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      'cdn.sanity.io',

    ],
    unoptimized: true,
  },
};

export default nextConfig;
