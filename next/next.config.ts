import type { NextConfig } from 'next'

const nextConfig = {
  output: 'export', // Enables static export
  distDir: 'out', // Output directory
  basePath: '', // Ensures it's served at alexbao.net
}

export default nextConfig
