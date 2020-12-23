/*
 * @Author: Hong Kai
 * @Date: 2020-03-27 10:45:22
 * @LastEditTime: 2020-12-23 15:01:16
 * @Description: *
 */
/* 用于修改 axios 的一些公用配置，具体参看文档 */
import axios from 'axios';
// import qs from 'qs'

const newAxios = axios.create({
  baseURL: '',
  timeout: 15000
});

newAxios.interceptors.request.use(config => {
  config.headers['accesstoken'] = JSON.parse(window.localStorage.getItem('user')).accessToken;
  return config;
}, err => {
  return Promise.reject(err);
});

newAxios.interceptors.response.use(response => {
  return response;
}, err => {
  return Promise.reject(err);
});

export default newAxios;
