/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/assessment": { page: "/assessment" },
      "/disclaimer": { page: "/disclaimer" },
      "/norecommendations": { page: "/norecommendations" },
      "/origin_assessment": { page: "/origin_assessment" },
      "/recommend": { page: "/recommend" },
      "/thankyou": { page: "/thankyou" },
      "/contact/index": { page: "/contact" },
      "/signup": {
        page: "/signup",
      },
    };
  },
};

module.exports = nextConfig;
