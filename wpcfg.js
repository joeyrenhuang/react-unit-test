import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
export default {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve('./dist'),
    filename: '[name].[hash:8].js',
    clean: true,
  },
  devtool: 'source-map',
  devServer: {
    open: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.styl', '.stylus'],
  },
  module: {
    rules: [
      { test: /.*.jsx?/, exclude: /node_modules/, use: 'babel-loader'},
      { test: /.*.styl(us)?/, exclude: /node_modules/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'stylus-loader']},
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new (require('react-displayname-webpack-plugin'))(),
  ]
}



































































































