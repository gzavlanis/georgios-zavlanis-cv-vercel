import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'X-Frame-Options',
              value: 'DENY', // Prevents other sites from embedding your site in an iframe
            },
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff', // Prevents browsers from guessing file types
            },
            {
              key: 'Referrer-Policy',
              value: 'strict-origin-when-cross-origin', // Protects where your traffic data goes
            }
          ],
        },
      ];
    },
};

export default nextConfig;
