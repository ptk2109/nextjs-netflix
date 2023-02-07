/** @type {import('next').NextConfig} */
const path = require('path'); // 1. path 선언

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')], // 2. sassOptions 옵션 추가
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'yts.mx',
        port: '',
        pathname: '/assets/images/movies/**',
      },
    ],
  },
}

module.exports = nextConfig
