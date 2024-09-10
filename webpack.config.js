const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/scripts/index.js',
  output: {
    filename: '[name].bundle.js',
    // filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.sass$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './index.html',
      filename: 'index.html',
    }),
  ],
  devServer: {
    // contentBase: './dist',
    host: 'localhost',
    open: true,
  },
  devtool:'source-map',
};
