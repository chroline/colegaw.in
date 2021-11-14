module.exports = {
  /*experimental: {
    concurrentFeatures: true,
    serverComponents: true,
  },*/
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: "@mdx-js/loader",
        },
      ],
    });

    return config;
  },
};
