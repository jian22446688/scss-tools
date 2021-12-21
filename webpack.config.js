/*
 * @Author: Cary
 * @Date: 2021-12-17 15:11:40
 * @FilePath: \alien-docse:\cary\project\scss-tools\webpack.config.js
 */
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: "development",
  entry: ["./src/main.js", "./src/scss/index.scss"], // string | object | array
  target: "web", // <=== 默认为 'web'，可省略
  devServer: {
    hot: true,
    open: true,
    static: path.join(__dirname, "static"),
    port: 8888,
  },
  devtool: "inline-source-map", // 帮助发现错误
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].[hash:8].js',
    chunkFilename: '[name].[hash:8].js'
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "css/cc-tools.css", //css打包输出出口及文件名称
      chunkFilename: '[id].css'
    }),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      }
    ]
  }
};
