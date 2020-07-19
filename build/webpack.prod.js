const commonConfig = require('./webpack.common.js')
const { merge } = require('webpack-merge')

const prodConfig = {
  mode: "production",
  // souce map 错误映射
  devtool: "cheap-module-source-map",
};

module.exports = merge(commonConfig, prodConfig)