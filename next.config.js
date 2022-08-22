/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['moods.imood.com', 'counter.websiteout.net'],
        loader: 'akamai',
        path: '/',
    },
};

module.exports = nextConfig;
