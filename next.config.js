module.exports = {
  reactStrictMode: true,
  experimental: {
    urlImports: ['https://example.com/modules/'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  distDir: 'build',
  images: {
    disableStaticImages: true,
  },
}
