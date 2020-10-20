const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'browser.entry': path.join(__dirname, '../react/browser.entry.js'),
  },
  mode: 'development',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../index.html'),
      chunks: ['browser.entry']
    }),
  ]
};
