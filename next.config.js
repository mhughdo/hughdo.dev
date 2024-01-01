/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/hughdo-dev/**',
      },
    ],
    loader: 'custom',
    loaderFile: './src/utils/cloudinaryLoader.ts',
  },
}

module.exports = nextConfig
