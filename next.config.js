/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['lh3.googleusercontent.com', 'storage.googleapis.com'],
  },remotePatterns: [
    {
      protocol: "https",
      hostname: "**",
    },
  ],
}

module.exports = nextConfig
