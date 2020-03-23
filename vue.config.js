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
  devServer: {
    
  }
}
