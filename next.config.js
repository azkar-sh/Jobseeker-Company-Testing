/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blog.jobseeker.company',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
}

module.exports = nextConfig
