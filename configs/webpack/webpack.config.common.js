/* eslint-disable global-require, import/no-extraneous-dependencies */
const path = require('path')

const HtmlPlugin = require('html-webpack-plugin')
const PwaManifest = require('webpack-pwa-manifest')
const WorkboxPlugin = require('workbox-webpack-plugin')

module.exports = (rootDir, entry, title, name, description) => ({
  entry,
  output: {
    path: path.join(rootDir, 'dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: require('../babel.config.js')(rootDir),
        },
        exclude: /node-modules/,
      },
      {
        test: /.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {},
          },
          {
            loader: 'css-loader',
            options: { importLoaders: 1, modules: true },
          },
          {
            loader: 'postcss-loader',
            options: { config: { path: path.join(__dirname, '..') } },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlPlugin({
      filename: 'index.html',
      template: path.join(rootDir, 'src/index.ejs'),
      title,
    }),
    new PwaManifest({
      name,
      description,
      background_color: '#ffffff',
    }),
    new WorkboxPlugin.GenerateSW({
      swDest: 'sw.js',
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
})
