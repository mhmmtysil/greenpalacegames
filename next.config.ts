import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/greenpalacegames' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/greenpalacegames/' : '',
};

export default nextConfig;
