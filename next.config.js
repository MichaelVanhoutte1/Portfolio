/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        styledComponents: true,
    },
    async rewrites() {
        return {
            afterFiles: [{ source: "/:path*", destination: "/_404/:path*" }],
        };
    },
};

module.exports = nextConfig;
