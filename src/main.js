import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// 全局指令注册
import { lazyPlugin } from '@/directives'

//引入样式
import "@/styles/common.scss"
/*
//测试接口函数
import {getCategoryAPI} from '@/apis/teseAPI'
getCategoryAPI().then(res=>{
    console.log(res)
})
*/
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
//懒加载插件
app.use(lazyPlugin)