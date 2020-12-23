/*
 * @Author: your name
 * @Date: 2020-03-20 16:17:23
 * @LastEditTime: 2020-12-23 17:04:55
 * @LastEditors: Hong Kai
 * @Description: In User Settings Edit
 * @FilePath: /wap-template/src/main.js
 */
import Vue from 'vue';
import App from './App.vue';
import Vant from 'vant';
import 'vant/lib/index.css';
import router from './router';
import '@/assets/css/index.less';
import '@/assets/css/van.less';
import '@/assets/css/theme.less';
import 'amfe-flexible';

Vue.config.productionTip = false;
Vue.use(Vant);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

// 全局返回上一页的方法
Vue.prototype.backPage = function() {
  this.$router.go(-1);
};
