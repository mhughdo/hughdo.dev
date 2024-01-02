/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hughdo-dev.imgix.net',
        port: '',
        pathname: '/**',
      },
    ],
    loader: 'custom',
    path: 'https://hughdo-dev.imgix.net/',
    loaderFile: './src/helpers/imgixLoader.ts',
  },
}

module.exports = nextConfig
