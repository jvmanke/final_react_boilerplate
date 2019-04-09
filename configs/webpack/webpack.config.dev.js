const path = require("path")

const merge = require("webpack-merge")
const HardSourcePlugin = require("hard-source-webpack-plugin")

const common = require("./webpack.config.common")

module.exports = (rootDir, title, name, description, port) =>
  merge(common(rootDir, title, name, description), {
    mode: "development",
    devtool: "eval-source-map",
    plugins: [new HardSourcePlugin()],
    devServer: {
      contentBase: path.join(rootDir, "dist"),
      compress: true,
      port,
    },
  })
