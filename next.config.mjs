/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  typescript: { ignoreBuildErrors: true },
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
