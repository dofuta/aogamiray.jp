/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    sassOptions: {
        additionalData: `@use "sass:math"; @import "src/styles/variables.scss"; @import "src/styles/mixins.scss"; @import "src/styles/animations.scss";`,
    },
    swcMinify: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        })

        return config
    },
}

module.exports = nextConfig
