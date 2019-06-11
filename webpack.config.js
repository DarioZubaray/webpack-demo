const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Mi Asombrosa aplicacion',
      myPageHeader: 'hola webpack',
      template: './src/index.html',
      filename: './index.html' //relative to root of the application
    })
 ]

};
