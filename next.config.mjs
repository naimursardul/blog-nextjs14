/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.com",
        // hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
