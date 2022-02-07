/*
 * @Descripttion: 
 * @version: 
 * @Author: LiuXuFei
 * @Date: 2021-09-17 14:41:58
 * @LastEditors: LiuXuFei
 * @LastEditTime: 2022-01-21 15:47:27
 */
import Vue from 'vue'
const store = Vue.observable({
  state: {
    //form表单数据
    selectIndex: '',
    selectItem: {},
    selectItemParent: [],
    arr2: [],
    errArr: [],
    noDrag: false,
    formItemId: 100,
  }
})
export default store