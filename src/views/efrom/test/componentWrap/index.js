/*
 * @Descripttion: 
 * @version: 
 * @Author: LiuXuFei
 * @Date: 2021-11-03 11:29:33
 * @LastEditors: LiuXuFei
 * @LastEditTime: 2022-01-25 09:50:52
 */
const componentsContext = require.context('./', true, /\.vue$/)

// export default (Vue)=>{
//     componentsContext.keys().forEach(file_name => {
//         // 获取文件中的 default 模块
//         let defaultObj = componentsContext(file_name).default
//         Vue.component(defaultObj.name, defaultObj)
//     })
// }

let arr = {}
componentsContext.keys().forEach(file_name => {
    // 获取文件中的 default 模块
    let defaultObj = componentsContext(file_name).default
    arr[defaultObj.name] = defaultObj
})
export default arr