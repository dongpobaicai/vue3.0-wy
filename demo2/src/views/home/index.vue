<template>
  <h1 class="text">我是首页</h1>
  vuex:{{ $store.state.num }}
  <button @click="add">++</button>
  {{ state.name }}
  {{ state.num }}
  <div class="login">
    <van-button type="primary" @click="goLogin">跳转登录页</van-button>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { getProfile } from "@/api/index";

export default defineComponent({
  setup() {
    const router = useRouter();
    const store = useStore();
    const goLogin = () => {
      router.push("/login");
    };
    const add = () => {
      store.commit("addNum");
      state.num = store.state.num;
      state.num > 20 ? (state.color = "pink") : (state.color = "#ccc");
    };
    getProfile().then((res: any) => {
      console.log(res);
    });
    const state = reactive({
      name: "霍庆祝",
      num: 10,
      color: "#ccc",
    });
    return {
      state,
      add,
      goLogin,
    };
  },
});
</script>
<style>
.text {
  color: red;
}
.login {
  width: 100%;
  height: 100px;
  line-height: 100px;
  background-color: pink;
}
</style>
