const path = require('path');

module.exports = {
    // 默认模式production
    mode: 'development',
    // 完整写法 对应chunk name
    // entry: {
    //     main: './src/index.js'
    // }
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    // 使用loader
    module: {
        rules: [
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },
        ],
      },
}