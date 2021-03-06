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

  // 配置tree-shaking
  optimization: {
    usedExports: true,
  },

  // souce map 错误映射
  devtool: "cheap-module-eval-source-map",

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
