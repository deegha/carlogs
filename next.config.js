const withCSS = require('@zeit/next-css')
const withSass = require("@zeit/next-sass");
const withImages = require('next-images');

require("dotenv").config();

module.exports =  withImages(withSass(withCSS({
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: "empty"
      };
    }
    return config;
  },
  devIndicators: {
    autoPrerender: false,
  },
})));



