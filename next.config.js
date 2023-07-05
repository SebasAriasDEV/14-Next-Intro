/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')();

const nextConfig = {
  experimental: {
    mdxRs: true, // <-- add this option
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.punkapi.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = withMDX(nextConfig);
