/** @type {import('next').NextConfig} */
const path = require('path'); // 1. path 선언

// key 까먹었다면, https://api.themoviedb.org -> 회원가입 -> 로그인 ->  설정 -> api -> 등록 -> 하면 api 받을 수 있다.
const API_KEY = process.env.MOVIE_API_KEY;

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')], // 2. sassOptions 옵션 추가
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/contact",             // 연습용
        destination: "/form",
        permanent: false
      },
      {
        source: "/old-blog/:path",      // 연습용
        destination: "/new-blog/:path",
        permanent: false
      }
    ];
  },
  async rewrites(){
    return[
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
      }
    ];
  }
}

module.exports = nextConfig
