/*
 * @Descripttion: 
 * @version: 
 * @Author: LiuXuFei
 * @Date: 2021-09-16 17:18:23
 * @LastEditors: LiuXuFei
 * @LastEditTime: 2022-01-25 11:00:36
 */
import store from "@/store/store.js"
import App from "./efrom"
import componentWrap from "@/views/efrom/test/componentWrap.vue"
import lsPreview from "@/views/efrom/preview.vue"
import leftMenu from "./efrom/indexConfig"
import ctxComponents from "./efrom/test/componentWrap/index";
import { TimePicker,RadioGroup,Radio,Image,DatePicker,CheckboxGroup,Checkbox,Slider,Button,Form,FormItem,Switch,Select,Option,Input,Divider,Upload,InputNumber,ColorPicker } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "@/assets/css/index.scss"
import setComponentConfig from "./efrom/test/setComponentConfig/index.js";

class luoshuoInstall {
    constructor() {
    }
    install(Vue) {
        this.installInitComponents(Vue)
        this.installElComponents(Vue)
        this.initData(Vue)
        this.installCtxComponents(Vue)
        this.installSetCtxComponents(Vue)
    }
    /**
     * @remarks: 初始化数据
     * @param {*} Vue
     */    
    initData(Vue){
        Vue.prototype.$lsStore = store
        Vue.prototype.$luoShu={
            lsLeftMenu:JSON.parse( JSON.stringify(leftMenu) ),//左侧导航
            contextComponents:ctxComponents,
            setComponentConfig:setComponentConfig
        }

        //监听setComponentConfig，当有新的组件时注册组件
        Vue.prototype.$luoShu.setComponentConfig = new Proxy(Vue.prototype.$luoShu.setComponentConfig, {
            set:function(target, key, value, receiver){
                Vue.component('set'+key,value)
                return true
            }
        })
        //监听contextComponents，当有新的组件时注册组件
        Vue.prototype.$luoShu.contextComponents = new Proxy(Vue.prototype.$luoShu.contextComponents, {
            set:function(target, key, value, receiver){
                Vue.component(key,value)
                return true
            }
        })
    }
    /**
     * @remarks: 注册内置组件
     * @param {*} Vue
     */    
    installInitComponents(Vue){
        Vue.component('componentWrap', componentWrap)
        Vue.component('lsPreview', lsPreview)
        Vue.component('lsEfrom', App)
    }
    /**
     * @remarks: 注册element组件
     * @param {*} Vue
     */    
    installElComponents(Vue){
        let arr = [TimePicker,RadioGroup,Radio,Image,DatePicker,CheckboxGroup,Checkbox,Slider,Button,Form,FormItem,Switch,Select,Option,Input,Divider,Upload,InputNumber,ColorPicker]
        for(let item of arr){
            Vue.component(item.name,item)
        }
    }
    /**
     * @remarks: 注册表单配置组件
     * @param {*} Vue
     */    
    installSetCtxComponents(Vue){
        for(let key in setComponentConfig){
            Vue.component( 'set'+key, setComponentConfig[key] )
        }
    }
    /**
     * @remarks: 注册表单组件
     * @param {*} Vue
     */    
    installCtxComponents(Vue){
        for(let key in ctxComponents){
            Vue.component( key, ctxComponents[key] )
        }
    }
    static getInstance() {
        if (!luoshuoInstall.instance) {
            luoshuoInstall.instance = new luoshuoInstall()
        }
        return luoshuoInstall.instance
    }
}



export default luoshuoInstall.getInstance()