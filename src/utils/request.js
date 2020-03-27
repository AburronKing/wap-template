/* 用于修改 axios 的一些公用配置，具体参看文档 */
import axios from 'axios'
// import qs from 'qs'
import { isJSON } from '@/common/js/utils'

const newAxios = axios.create({
  baseURL: '',
  timeout: 15000
})

newAxios.interceptors.request.use(config => {
  config.headers['accesstoken'] = JSON.parse(window.localStorage.getItem('user')).accessToken
  return config
}, err => {
  return Promise.reject(err)
})

newAxios.interceptors.response.use(response => {
  const accesstoken = response.headers.accesstoken
  // debugger
  const res = isJSON(response.data) ? JSON.parse(response.data) : response.data
  if (accesstoken && res.data) {
    res.data.accesstoken = accesstoken
  }
  return response.data
}, err => {
  return Promise.reject(err)
})

export function request(_param) {
  const {
    method = 'get',
    // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
    responseType = 'json', // 默认的
    headers = {},
    url = '',
    params,
    data,
    ...otherData
  } = _param

  if (!url) {
    return new Promise((resolve, reject) => {
      reject(new Error('url is null'))
    })
  }
  const _method = method.toLowerCase()
  // debugger
  if (_method === 'get') {
    return newAxios({
      responseType,
      url,
      headers,
      method,
      params: params || data || otherData
    })
  }

  if (_method === 'post' || _method === 'delete' || _method === 'put') {
    if (!Object.prototype.hasOwnProperty.call(headers, 'Content-Type')) {
      headers['Content-Type'] = 'application/json'
    }
    if (params || data) {
      return newAxios({
        responseType,
        url,
        headers,
        method,
        params,
        data
      })
    } else {
      const { start, limit, ...resetData } = otherData
      return newAxios({
        responseType,
        url,
        headers,
        method,
        params: params || { start, limit },
        data: JSON.stringify(data) || resetData
      })
    }
  }
}

export default newAxios