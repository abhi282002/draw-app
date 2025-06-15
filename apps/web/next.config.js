/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@repo/ui', '@repo/design-system',],
  async rewrites(){
    return [
      {
        "source": "/api/:path*",
        "destination": "/api/:path*"
      },
    ]
  }
};

export default nextConfig;
