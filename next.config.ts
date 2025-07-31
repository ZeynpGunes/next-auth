import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["next-auth.js.org", "s.gravatar.com", "cdn.auth0.com"],
  },
};

export default nextConfig;
