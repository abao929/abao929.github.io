import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'out',
  basePath: '', // Keep empty if deploying to root domain
}

export default nextConfig
