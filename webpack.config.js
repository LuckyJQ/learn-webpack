const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // 默认模式production
  mode: "development",
  // 完整写法 对应chunk name
  // entry: {
  //     main: './src/index.js'
  // }
  entry: ["./src/index.js"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  // souce map 错误映射
  // 只有在production模式下，开启才有效果。developement下默认就开的
  devtool: "inline-source-map",

  // weebpack-devServer
  devServer: {
    // 以什么目录作为读取目录
    contentBase: "./dist",
    open: true,
    hot: true,
  },

  // 使用loader
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
};
