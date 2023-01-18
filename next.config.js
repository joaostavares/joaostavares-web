/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/github",
        destination:
            "https://github.com/joaostavares",
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig