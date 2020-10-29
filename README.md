# vue3.0-wy

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 项目结构
node_modules  依赖包
public/favicon.icon  网站标题图片
public/index.html 应用入口，app注入节点
src 源代码
src/assets 静态文件
src/components 公共组件
src/hooks 常用的模块
src/App.vue 入口文件调用此模板创建app
src/main.ts 入口文件
src/shims-vue.d.ts typescript的声明文件
src/tsconfig.json ts配置文件

### 新增一些函数
main.ts createApp 创建应用

App.vue defineComponent 定义页面和组件

SelectGirl.vue
ref 定义双向绑定的基本数据
reactive 定义双向绑定的obj类型

### 生命周期变化
onBeforeMount
onMounted
onBeforeUpdate
onUpdated
onBeforeUnmount
onUnmounted
onRenderTracked
onRenderTriggered


### watch，以及监听多个值
watch(attr, (newVal, oldVal) => {})
watch([attr1, () => data.attr2], (newVal, oldVal) => {})

### 独立模块化
获取时间抽离出来  useNowTime


### ts应用
SelectGirl.vue 两种写法
第一种常见
第二种使用ts接口思想