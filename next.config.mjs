/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Keep production builds out of the dev server's .next to avoid corrupting each other
  distDir: process.env.NEXT_DIST_DIR || '.next',
  trailingSlash: true,
  images: {
    // Static export has no image optimization server; files are served as-is.
    unoptimized: true,
  },
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
};

export default nextConfig;
