var path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'app'),
    assetModuleFilename: 'dynamic-assets/[name][ext][query]'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.png$/,
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
    }
  },
}
