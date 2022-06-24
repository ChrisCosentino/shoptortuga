/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'trek.scene7.com',
      'media.everlane.com',
      'cdn.shopify.com',
      'images.journeys.ca',
      'images.unsplash.com',
      'assets.adidas.com',
    ],
  },
};

module.exports = nextConfig;
