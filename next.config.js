/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    trailingSlash: true,
    images: {
        domains: ['moods.imood.com', 'counter.websiteout.net'],
        path: '/',
        disableStaticImages: false,
        loader: 'custom',
    },
    exportPathMap: function (defaultMap) {
        return {
            ...Object.assign(
                {},
                ...Object.keys(defaultMap)
                    .filter((key) => !key.includes('not_found'))
                    .map((key) => ({ [key]: defaultMap[key] })),
            ),
            '/not_found': { page: '/not_found' },
        };
    },
};

module.exports = nextConfig;
