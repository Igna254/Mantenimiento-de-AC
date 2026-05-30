/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const repoBasePath = '/Mantenimiento-de-AC'

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  ...(isProd
    ? {
        basePath: repoBasePath,
        assetPrefix: repoBasePath,
      }
    : {}),
}

export default nextConfig
