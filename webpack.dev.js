const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge.smart(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    https: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
          ]
      }
    ]
  }
});