const path = require("path");

module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      
    }
  },
  pluginOptions: {
    
  },
  configureWebpack: function() {
    if (process.env.NODE_ENV === 'production') {
      return {
        resolve: {
          alias: {
            "@": path.resolve(__dirname, "./src")
          }
        }
      }
    } else {
      return {
        resolve: {
          alias: {
            "@": path.resolve(__dirname, "./src")
          }
        }
      }
    }
  },
  productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
  devServer: {
    
  }
}
