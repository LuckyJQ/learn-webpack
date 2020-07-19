const commonConfig = require('./webpack.common')
const { merge } = require('webpack-merge')

console.log('commonConfig', commonConfig)

const prodConfig = {
  mode: "production",
  // souce map 错误映射
  devtool: "cheap-module-source-map",
};

module.exports = merge(commonConfig, prodConfig)