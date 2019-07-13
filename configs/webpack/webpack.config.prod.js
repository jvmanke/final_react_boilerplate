/* eslint-disable global-require, import/no-extraneous-dependencies */
const merge = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin')

const common = require('./webpack.config.common')

module.exports = (rootDir, entry, title, name, description) =>
  merge(common(rootDir, entry, title, name, description), {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          sourceMap: true,
        }),
      ],
    },
    plugins: [new CleanPlugin()],
  })
