/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/best-school-kids-transportation-service',
        destination: '/blog/best-school-kids-transportation-california-illinois',
        permanent: true,
      },
    ];
  },
}

export default nextConfig;