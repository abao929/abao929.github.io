import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'out',
  basePath: '', // Keep empty if deploying to root domain
  compiler: {
    styledComponents: true,
  },
}

export default nextConfig
