import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Redirige interly.org et interly.online vers interly.io (SEO + branding unifié)
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "(www\\.)?interly\\.org" }],
        destination: "https://interly.io/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "(www\\.)?interly\\.online" }],
        destination: "https://interly.io/:path*",
        permanent: true,
      },
      // Force apex (interly.io sans www)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.interly.io" }],
        destination: "https://interly.io/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
