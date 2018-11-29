const path = require('path');

module.exports = {
  context: __dirname,
  mode: 'development',
  entry: ['whatwg-fetch', './js/main'],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'main.js',
    publicPath: '/public/'
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
};
