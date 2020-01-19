const webpack = require("webpack");

module.exports = {
  entry: './src/QRCode.ts',
  output: {
    filename: './qrcode.min.js',
    libraryTarget:'umd'
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    rules: [
      {
         test: /\.ts$/,
         exclude: /node_modules/,
         loader: 'ts-loader'
      }
   ]
 }
};

