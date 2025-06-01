/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@repo/ui', '@repo/design-system',],
  async rewrites(){
    return [
      {
        source:"/api/:path*",
        destination: "http://localhost:3001/api/:path*"
      }
    ]
  }
};

export default nextConfig;
