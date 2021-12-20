const withPreact = require("next-plugin-preact");

module.exports = withPreact({
  images: {
    formats: ["image/avif", "image/webp"],
  },
});
