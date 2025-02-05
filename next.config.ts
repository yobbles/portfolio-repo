import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['i.gr-assets.com'], // For Goodreads images
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self' 'unsafe-inline' 'unsafe-eval' *.goodreads.com data:;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;