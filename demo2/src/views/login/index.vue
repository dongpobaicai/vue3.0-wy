<template>
  <h1>登录页</h1>
  <div>vuex: {{ $store.state.num }}</div>
  <van-button type="primary" @click="goLogin">跳转到首页</van-button>
</template>
<script lang="ts">
import { defineComponent, reactive, watch } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    const goLogin = () => {
      router.push("/");
    };

    let test = reactive({
      name: "321321",
    });

    test = reactive({
      name: "fdafsad"
    })

    watch(test, () => {
      console.log("update name");
    });

    test = reactive({
      age: 6
    })

    watch(test, () => {
      console.log('update age')
    })

    setTimeout(() => {
      test.name = "bill";
      test.age = 20
    }, 0);
    // test = {
    //   age: 31231
    // }

    // console.log(test.name)

    return { goLogin };
  },
});
</script>
