# vue3 全家桶变化

## vue3 实例

### 基础篇

- 应用和组件实例

  - createApp 创建实例
  - 实例暴露的方法有 `component(name, {}), directive(name, {}), use(pluginName, { install: function(){ } }), mount()` 等
  - mount 不返回应用本身，返回根组件实例
  - 组件实例有哪些属性, $emit, $attrs, $listeners, $watch
  - 生命周期钩子保持不变

- 模板语法

  - 插值
  - 指令
    - 可以添加参数 v-bind:[attributeName]

- data property 和方法

  - data 函数返回的对象，变成数据响应式后，挂载到 vm.$data，也可以直接 vm[attributeName]直接访问
  - methods: { [key]function() {} }，对方法进行防抖处理

- 计算属性和侦听器 `computed, watch`
- Class 与 Style 绑定
  - 可以支持对象和数组形式
- 条件渲染 v-if 和 v-show 的区别
- 列表渲染 v-for 也可以用来遍历对象，v-for 也接受整数
- 事件处理
  - 内联语句处理器中访问原始的 DOM 事件, 可以用特殊变量 $event 把它传入方法
  - 事件处理可以有多个方法，用逗号分开 `@click="one($event), tow($event)"`
  - 事件修饰符，常见有：`.stop, .prevent, .capture, .once, .passive`
- 表单输入绑定
- 组件基础

  - 可以在组件选项中 emits，写入抛出的事件名，这将允许你检查组件抛出的所有事件
  - 自定义事件触发 `$emit(事件名, 参数)` 父组件接收 `v-on:xxx 或 @xxx`
  - 自定义组件使用 `v-model="searchText"` 其实相当于转化成以下代码

    ```js
    <custom-input :model-value="searchText" @update:model-value="searchText = $event" />
    ```

    所以自定义组件，需要包含以下属性和方法

    ```js
    {
      props: ['modelValue'],
      methods: {
        input() {
          this.$emit('update:modelValue', xxx)
        }
      }
    }
    ```

  - 动态组件，使用 component 元素 + is 属性

- 深入组件

  - 全局注册，局部注册 `components: {}`
  - props，对象和数组是引用方式传入到子组件，直接修改会影响到父组件
  - props 验证类型，可以是自定义的构造函数
  - 组件里的 `$attrs` 包含除了 `props，emits` 外的所有父组件传给子组件的属性 `class, style, v-on监听器`; 多文件的 attribute 继承，显示指定 v-bind="$attrs"
  - 自定义事件

    - 事件名，没有大小写之分；html 将大写统一转化为小写
    - v-model:[attributeName]，可以绑定属性名，进行双向绑定
    - 自定义 v-model 的修饰符，在组件中添加一个 modelModifiers 进行接收
      假如修饰符名为 capitalize

      ```js
      {
        props: {
          modelModifiers: {
            default: () => ({})
          }
        },
        methods: {
          input() {
            // 获取修饰符是否绑定成功
            if (this.modelModifiers.capitalize) {

            }
          }
        }
      }
      ```

      如果`v-mode:foo.capitalize`，则读取字段为`this.fooModifiers.capitalize`

  - 插槽

    - 插槽作用域 **父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的**
    - 后备内容
    - 具名插槽通过`name属性指定名称`，向具名插槽提供内容 `v-slot:[name]`
    - 绑定在`<slot>`上面的属性，我们称为插槽 props
    - 插槽内容实现原理，包含单一参数的函数，故支持 props 解构
    - 动态插槽名，结构如下

      ```js
      <template v-slot:[dynamicSlotName]></template>
      ```

    - v-slot 的缩写是#，如：`v-slot:default => #default`

  - 提供和注入

    - 为了解决嵌套很深的组件传值问题
    - 用法如下，在提供组件里

      ```js
      {
        provide: {
          [attributeName]: [value]
        }
      }
      ```

      子组件使用方式 `{ inject: [ 'attributeName' ] }`

    - 如果 provide 访问实例，需要转化为一个返回对象的函数
    - 对于 provide 提供数据响应式，需要手动处理

  - 动态组件和异步组件

    - 动态组件缓存问题，使用 `<keep-alive></keep-alive>`解决
    - 异步组件可以使用内置函数 `defineAsyncComponent` 来完成

      ```js
      // 接受一个工厂函数，返回一个promise
      Vue.defineAsyncComponent(
        () =>
          new Promise((resolve) => {
            resolve({
              template: "<div>I am async</div>",
            });
          })
      );

      // es6改进版
      Vue.defineAsyncComponent(() => import("./components/AsyncComponent.vue"));
      ```

  - 模板引用 当 ref 和 v-for 一起使用，`$refs`获取是一个数组

- 过渡和动画
  - 通过 `class + keyframes`
  - transition 处理元素过渡效果
    - 过渡 class `v-enter-from, v-enter-active, v-enter-to` 等
    - 自定义过渡 class `enter-from-class, enter-active-class` 等
- 混入 局部混入和全局混入
- 自定义指令

  ```js
   // 全局注册
   app.direactive('name', {
     beforeMount() {}
   })
   // 局部注册
   {
     direactives: {
       focus: {
         mounted(el) {}
       }
     }
   }
   // 包含钩子函数
   beforeUpdate，updated

   // 动态参数  v-focus:[arg]="value"

   mounted(el, bind) {
     // el 当前绑定元素dom实例
     // bind参数信息 { arg, value }
   }
  ```

  - 函数简写
  - 绑定值对象字面量

- teleport 传送门，组件渲染可以指定 dom
- 渲染函数

  ```js
   render() {
     const { h } = vue
     // 子元素是个数组形式
     return h('h' + this.level, {}, this.$slots.default)
   }
  ```

- 插件 两种形式

  - `function`
  - 公开 `install` 的 `object`

  ```js
  // vue对象 options传入的参数
  export default {
    install(app, options) {},
  };
  ```

### 进阶篇

- 响应式声明
  - `ref(基本数据类型)` 变成响应式对象
  - `reactive({ a: 1 })`
- ref 对象的取值，通过 `ref(1).value` 访问
  - 如果 ref 被 reactive 嵌套，可以直接使用 `var obj =reactive({ a: ref(1) })`
  - `obj.a`直接获取它的值
- 解构响应式对象 `toRefs()`
- 让响应式变得只读 `readonly()`
- `computed()` 返回一个 ref 对象
- `watchEffect` 为了根据响应式状态自动应用和重新应用副作用
  - onTrack 和 onTrigger
- 组合式 API，也叫着 composition api

  - 使用 setup 完成

    - 注册生命周期钩子函数

    ```js
    import { ref, toRefs, watch, computed, onMounted } from 'vue'

    setup(props, context) {
      const { user } = toRefs(props)
      const repositories = ref([])
      const getUserRepositories = async () => {
        repositories.value = await fetchUserRepositories(user)
      }

      watch(repositories, () => {}, {})

      // 接收回调函数，在钩子函数调用时执行
      onMounted(getUserRepositories)

      // 在用户 prop 的响应式引用上设置一个侦听器
      watch(user, getUserRepositories)

      const searchQuery = ref('')
      const repositoriesMatchingSearchQuery = computed(() => {
        return repositories.value.filter(
          repository => repository.name.includes(searchQuery.value)
        )
      })

      // 返回对象，可以在组件其他部分使用，模板中不需要xx.value取值
      return {
        repositories,
        getUserRepositories,
        searchQuery,
        repositoriesMatchingSearchQuery
      }
    }
    ```

    - context 上下文，暴露三个组件属性 { attrs, slots, emit}
    - 使用provide/inject
    ```js
    import { provide, inject, reactive } from 'vue'

    export default {
      setup() {
        const location = reactive({
          lat: '',
          lng: ''
        })
        const updateLocation = () => {
          location.lat = '32132'
        }
        provide('name', readonly(location))
        return {
          location,
          updateLocation
        }
      }
    }

    export default {
      setip() {
        const value = inject('name', 'defaultValue')
        return {}
      }
    }
    ```

## Vue Router4 有哪些变化

- router 的创建使用 createRouter
- history 取代了 mode，通过方法返回 createWebHistory 原因：为未使用 history 启用摇树（tree shaking）
- 移动了 base 的配置，作为 createWebHistory 的第一个参数
- 删除\*路由通配符
- scrollBehavior: () => ({ left: 0, top: 0 })

## vite知识点

### 环境变量

- 通过 `import.meta.env` 暴露出环境变量

### 静态资源处理

- Glob导入
