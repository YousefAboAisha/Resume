/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [".firebaseapp.com", "firebasestorage.googleapis.com"],
  },
};

module.exports = nextConfig;
