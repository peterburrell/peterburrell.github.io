const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/}
    ]
}};

module.exports = config;