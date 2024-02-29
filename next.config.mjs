/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'classic-sushi-ec0.notion.site',
          },
        ],
      },
};

export default nextConfig;
