const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  context: __dirname,
  mode: 'development',
  entry: ['whatwg-fetch', './js/main'],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'bundle.css' })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },      
      {
        test: /\.sass$/,
        use: [
          'style-loader',  //MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
          ]
      }
    ]
  }
};
