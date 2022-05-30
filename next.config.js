const withImages = require('next-images')

module.exports = {
    i18n: {
        // providing the locales supported by your application
        locales: ["fa-IR", "en-US"],
        //  default locale used when the non-locale paths are visited
        defaultLocale: "en-US",
    },
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
        test: /\.(png|jpe?g|gif|webp)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      })
    );
    return config;
  },
};
