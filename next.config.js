/** @type {import('next').NextConfig} */
module.exports = {
  distDir: "build",
  trailingSlash: true,
  reactStrictMode: false,
  basePath: "/truscape-crm-app",
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};
