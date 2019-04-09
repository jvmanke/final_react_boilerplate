/* eslint-disable global-require, import/no-extraneous-dependencies */
module.exports = {
  plugins: [
    require("postcss-preset-env")({
      features: {
        "nesting-rules": false,
      },
    }),
    require("postcss-nested"),
  ],
}
