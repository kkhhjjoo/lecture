import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // rettime (a dependency of msw) ships ESM-only with no CJS build,
  // so it needs to be transpiled instead of being left as raw node_modules
  transpilePackages: [
    "rettime",
    "@open-draft/deferred-promise",
    "headers-polyfill",
    "until-async",
  ],
};

export default nextConfig;
