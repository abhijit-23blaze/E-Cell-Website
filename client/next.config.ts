// next.config.js

const nextConfig = {
  output : "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: false,  // Disable strict mode for debugging
  images: {
    unoptimized: true
  },
  // async headers() {
  //   return [
  //     {
  //       // Matching all API routes
  //       source: "/api/:path*",
  //       headers: [
  //         { key: "Access-Control-Allow-Credentials", value: "true" },
  //         { key: "Access-Control-Allow-Origin", value: "https://code-cell-website.onrender.com" },
  //         { key: "Access-Control-Allow-Methods", value: "GET,POST,PUT,DELETE,OPTIONS" },
  //         { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
  //       ]
  //     }
  //   ];
  // }
};

export default nextConfig;