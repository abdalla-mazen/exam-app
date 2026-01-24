/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "exam.elevateegy.com",
      },
    ],
  },
  redirects: async () => {
    return [{ source: "/", destination: "/dashboard", permanent: true }];
  },
};

export default nextConfig;
