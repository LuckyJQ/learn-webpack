const commonConfig = require('./webpack.common')
const { merge } = require('webpack-merge')

const devConfig = {
  mode: "development",

  // 配置tree-shaking
//   optimization: {
//     usedExports: true,
//   },

  // souce map 错误映射
  devtool: "cheap-module-eval-source-map",

  // weebpack-devServer
  devServer: {
    // 以什么目录作为读取目录
    contentBase: "./dist",
    hot: true,
  },
};

module.exports = merge(commonConfig, devConfig)