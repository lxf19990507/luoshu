/*
 * @Descripttion: 
 * @version: 
 * @Author: LiuXuFei
 * @Date: 2021-12-23 09:16:09
 * @LastEditors: LiuXuFei
 * @LastEditTime: 2022-01-24 17:13:13
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "@/assets/css/index.scss"
import "./permission"
import luoshu from "./views/index.js"
// import luoshu from "luoshu"
// import "luoshu/lib/luoshu.css"
Vue.use(luoshu)

Vue.config.productionTip = false

import componentWrap from "@/views/efrom/test/componentWrap.vue"
Vue.component('componentWrap', componentWrap)

// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);
window.luoshuToken = ""

import request from "./Interface.js"
Vue.prototype.$request = request

Vue.prototype.$back = () => {
  window.history.back()
}
import timefun from "@/utils/time.js"
Vue.prototype.$time=timefun

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
