/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Optional: Add a base path if deploying to a subdirectory
  // basePath: '/your-subdirectory',
  
  // Optional: Add asset prefix for CDN
  // assetPrefix: 'https://your-cdn.com',
}

export default nextConfig
