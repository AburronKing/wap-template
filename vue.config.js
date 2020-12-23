// const path = require('path');

module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 37.5,
            propList: ['*']
          })
        ]
      }
    }
  },
  configureWebpack: function() {
    return {
      plugins: []
    };
  },
  productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
  devServer: {
    
  }
};
