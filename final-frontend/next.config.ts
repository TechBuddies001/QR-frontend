import type { NextConfig } from "next";

// eslint key was removed from NextConfig in this Next.js version
// Using type cast to preserve backward-compatible config
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
} satisfies NextConfig;

export default nextConfig;
