/*
 * @Author: Hong Kai
 * @Date: 2020-03-20 16:45:58
 * @LastEditors: Hong Kai
 * @LastEditTime: 2020-12-23 16:04:47
 * @Description: * 
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//  app页面路由配置
const appRoute = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home')
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('@/views/layout'),
    children: [
      {
        path: '/page',
        name: 'page',
        component: () => import('@/views/page')
      },
    ]
  },
]


export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    ...appRoute
  ]
})