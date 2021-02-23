import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import vant from "./util/vant";
import 'vant/lib/index.css'; // 全局引入样式
// 移动适配
import 'lib-flexible/flexible'
import "./util/rem"

// use 需要在mount之前执行
createApp(App).use(router).use(store).use(vant).mount('#app')
