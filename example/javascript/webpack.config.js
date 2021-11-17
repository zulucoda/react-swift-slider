/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2019/06/15.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
const webpack = require('webpack');
const path = require('path');

const PORT = 4000;

module.exports = {
  entry: {
    app: [
      `webpack-dev-server/client?http://0.0.0.0:${PORT}`,
      'webpack/hot/only-dev-server',
      './app/index.jsx',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/app/',
    filename: 'bundle.js',
  },
  devServer: {
    port: PORT,
    hot: true,
    static: {
      directory: '.',
    },
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_module)/,
        loader: 'babel-loader',
      },
    ],
  },
  devtool: 'source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
