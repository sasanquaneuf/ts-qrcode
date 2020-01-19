const webpack = require("webpack");

module.exports = {
  entry: './src/QRCode.ts',
  output: {
    filename: './dist/qrcode.min.js',
    libraryTarget:'umd'
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    loaders: [
      {
         test: /\.ts$/,
         exclude: /node_modules/,
         loader: 'ts-loader'
      }
   ]
 }
};

