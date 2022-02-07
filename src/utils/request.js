/*
 * @Descripttion: 
 * @version: 
 * @Author: LiuXuFei
 * @Date: 2021-12-29 16:38:47
 * @LastEditors: LiuXuFei
 * @LastEditTime: 2022-01-21 17:40:02
 */
import axios from 'axios'
import { Notification, MessageBox, Message } from 'element-ui'
import {encrypt,decrypt} from "./aes"

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: process.env.VUE_APP_BASE_API,
  // 超时
  timeout: 100000,
  publicEncrypt:false
})
// request拦截器
service.interceptors.request.use(config => {

  if ( window.hasOwnProperty("luoshuToken") ) {
    config.headers.Authorization =  "Bearer "+ (window.luoshuToken || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiJkamhAZ3pzdW5ydW4uY24iLCJleHAiOjE2NDQxMzAwMDAsImlzcyI6Im9hcnMtaWRhYXMiLCJzdWIiOiJ7XCJ1c2VySWRcIjpcImRqaEBnenN1bnJ1bi5jblwiLFwidXNlcm5hbWVcIjpcIlwiLFwibmlja05hbWVcIjpcIlwiLFwiZGVwdElkXCI6XCJcIixcImRlcHRQYXRoXCI6XCJcIixcImFwcElkXCI6XCJcIixcInJlYWxJZFwiOlwiXCIsXCJraW5kXCI6MSxcInZlcmlmaWVkXCI6ZmFsc2V9In0.L85Uwb-xMleSPffH7y9i7jtE9PTxZVwNFGw_lg2z6Zs")
    config.headers["X-Oars-Token"] = window.luoshuToken || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiJkamhAZ3pzdW5ydW4uY24iLCJleHAiOjE2NDQxMzAwMDAsImlzcyI6Im9hcnMtaWRhYXMiLCJzdWIiOiJ7XCJ1c2VySWRcIjpcImRqaEBnenN1bnJ1bi5jblwiLFwidXNlcm5hbWVcIjpcIlwiLFwibmlja05hbWVcIjpcIlwiLFwiZGVwdElkXCI6XCJcIixcImRlcHRQYXRoXCI6XCJcIixcImFwcElkXCI6XCJcIixcInJlYWxJZFwiOlwiXCIsXCJraW5kXCI6MSxcInZlcmlmaWVkXCI6ZmFsc2V9In0.L85Uwb-xMleSPffH7y9i7jtE9PTxZVwNFGw_lg2z6Zs"
  }
  
  //是否需要加密  
  if(config.encrypt===true){
    config.data?config.data=encrypt(config.params):""
    config.params?config.params=encrypt(config.params):""
  }else if(config.encrypt===false){
    
  }else if(config.publicEncrypt){
    config.data?config.data=encrypt(config.params):""
    config.params?config.params=encrypt(config.params):""
  }
  

  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(res => {
  // 未设置状态码则默认成功状态
  const code = res.data.code || 200;
  let errorCode = {
    '401': '认证失败，无法访问系统资源',
    '403': '当前操作没有权限',
    '404': '访问资源不存在',
    'default': '系统未知错误，请反馈给管理员'
  }

  // 获取错误信息
  const msg = errorCode[code] || res.data.msg || errorCode['default']
  if (code === 401) {
    Message({
      message: msg,
      type: 'error'
    })
    return Promise.reject(new Error(msg))
  } else if (code === 500) {
    Message({
      message: msg,
      type: 'error'
    })
    return Promise.reject(new Error(msg))
  } else if (code !== 200 && code!=10000) {
    Message({
      message: msg,
      type: 'error',
      // duration:0,
    })
    return Promise.reject('error')
  } else {
    if (res.data.state) {
      Message({
        message: msg,
        type: res.data.state
      })
    }
    return res.data
  }
},
  error => {
    console.log('err' + error)
    let { message } = error;
    if (message == "Network Error") {
      message = "后端接口连接异常";
    }
    else if (message.includes("timeout")) {
      message = "系统接口请求超时";
    }
    else if (message.includes("Request failed with status code")) {
      message = "系统接口" + message.substr(message.length - 3) + "异常";
    }
    Message({
      message: message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
