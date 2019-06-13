const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    })
 ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  }
};
