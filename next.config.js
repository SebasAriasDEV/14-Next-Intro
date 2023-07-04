/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')();

const nextConfig = {
  experimental: {
    mdxRs: true, // <-- add this option
  },
};

module.exports = withMDX(nextConfig);
