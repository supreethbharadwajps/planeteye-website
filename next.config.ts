/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.planeteye.in',
        port: '',
        pathname: '/img/**',
      },
      {
        protocol: 'https',
        hostname: 'www.planeteye.in',
        port: '',
        pathname: '/imgs/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
};
module.exports = nextConfig;