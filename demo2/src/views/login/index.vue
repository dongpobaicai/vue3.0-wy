<template>
  <h1>登录页</h1>
  <div>vuex: {{ $store.state.num }}</div>
  <van-button type="primary" @click="goLogin">跳转到首页</van-button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    const goLogin = () => {
      router.push("/");
    };

    return { goLogin };
  },
});
</script>
