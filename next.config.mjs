import path from 'path';

const nextConfig = {
  webpack(config) {
    config.resolve.alias['@firebaseConfig'] = path.resolve('./firebaseConfig.js');
    return config;
  },
  env: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
  },
};

export default nextConfig;
