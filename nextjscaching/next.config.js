/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  headers: async () => [
    {
      // the `fresh` folder in the `public` folder contains the resources (`jpg`s) we want to cache for a short time
      source: "/:all*(svg|jpg|png)",
      locale: false,
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=1337, stale-while-revalidate", // resource is refreshed after 5 seconds
        },
      ],
    },
  ],
};

module.exports = nextConfig;
