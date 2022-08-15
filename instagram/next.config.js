/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["instagram.com", "instagram.fblr2-1.fna.fbcdn.net"],
  },
}

module.exports = nextConfig
