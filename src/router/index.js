import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//  app页面路由配置
const appRoute = [
  {
    path: '/',
    name: 'home',
    component: () => import( /* webpackChunkName: "event-deal" */ '@/components/HelloWorld.vue')
  }
]


export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    ...appRoute
  ]
})