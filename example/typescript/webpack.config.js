const PORT = 5000;
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './app/main.tsx',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
  },
  devServer: {
    port: PORT,
    hot: true,
    static: {
      directory: '.',
    },
  },
};
