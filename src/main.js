import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import router from './router'
import store from './store'
import './assets/css/index.stylus'
import './assets/css/van.stylus'

Vue.config.productionTip = false
Vue.use(Vant);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

// 全局返回上一页的方法
Vue.prototype.backPage = function () {
  this.$router.go(-1);
}
