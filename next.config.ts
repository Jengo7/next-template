import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    ppr: 'incremental',
    dynamicIO: true,
    reactCompiler: true
  }
};

export default nextConfig;
