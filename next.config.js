/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  experimental: {
    outputFileTracingExcludes: {
      '/': ['./contentsx4/hersteller/**/*'],
    },
  },
}

module.exports = nextConfig
