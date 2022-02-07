/*
 * @Descripttion: 
 * @version: 
 * @Author: LiuXuFei
 * @Date: 2021-07-14 11:53:54
 * @LastEditors: LiuXuFei
 * @LastEditTime: 2022-01-21 15:13:03
 */
import request from "@/utils/request.js";
export default {
    //获取部门
    async getDepartments(obj) {
        let res = await request.get(`/api/departments`, { params: obj, baseURL: process.env.VUE_APP_USER_API })
        return res
    },

    //获取人员
    async getUsers(obj) {
        let res = await request.get(`/api/users`, { params: obj, baseURL: process.env.VUE_APP_USER_API })
        return res
    },
}