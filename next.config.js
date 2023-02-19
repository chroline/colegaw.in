module.exports = {
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
  images: {
    formats: ["image/avif", "image/webp"],
  },
};
