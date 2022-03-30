const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

/** @type {import('next').NextConfig} */
const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        MONGODB_PASSWORD: process.env.MONGODB_PASSWORD,
        MONGODB_USER: process.env.MONGODB_USER,
        MONGODB_DATABASE: process.env.MONGODB_DATABASE,
        MONGODB_CLUSTER: process.env.MONGODB_CLUSTER,
      },
    };
  }

  return {
    reactStrictMode: true,
    env: {
      MONGODB_PASSWORD: process.env.MONGODB_PASSWORD,
      MONGODB_USER: process.env.MONGODB_USER,
      MONGODB_DATABASE: process.env.MONGODB_DATABASE,
      MONGODB_CLUSTER: process.env.MONGODB_CLUSTER,
    },
  };
};

module.exports = nextConfig;
