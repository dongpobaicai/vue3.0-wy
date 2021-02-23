<template>
  <div>
    <h2>欢迎光临红浪漫洗浴中心</h2>
    <div>请选择一位美女为你服务</div>
    <select-girl></select-girl>
  </div>
</template>

<script lang="ts">
// typescript声明
import { defineComponent } from "vue";
import SelectGirl from "./components/SelectGirl.vue";

// 定义组件，通过函数defineComponent
export default defineComponent({
  name: "App",
  components: {
    SelectGirl,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
