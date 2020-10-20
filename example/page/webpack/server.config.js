const path = require('path');

module.exports = {
  entry: {
    'server.entry': path.join(__dirname,  '../react/server.entry.js'),
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
    libraryTarget: "commonjs",
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ],
  },
};
