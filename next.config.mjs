/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // Set to false to allow production builds with type errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // Set to false to allow production builds with lint errors
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
