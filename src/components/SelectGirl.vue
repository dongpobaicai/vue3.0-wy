<template>
  <div class="hello">
    <h4>当前时间：{{ nowTime }}</h4>
    <h4>当前选择girl：{{ selectedGirl }}</h4>
    <div>
      <p v-if="loading">正在加载照片...</p>
      <h4 v-else>当前美女照片：<img style="width: 200px;" :src="result.message" /></h4>
    </div>
    <p>{{ overTitle }}</p>
    <div style="margin-bottom: 20px;">
      <button
        v-for="(girl, index) in girls"
        :key="girl"
        :class="{ active: girl === selectedGirl }"
        @click="selectGirlFun(index)"
      >
        {{ girl }}
      </button>
    </div>
    <div>
      <button @click="overAction">SPA完毕</button>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  toRefs,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onRenderTracked,
  onRenderTriggered,
  watch,
} from "vue";
import { nowTime, getNowTime } from "../hooks/useNowTime";
import useUrlAxios from "../hooks/useURLAxios";

// 定义一个数据类型
interface DataProp {
  girls: string[];
  selectedGirl: string;
  selectGirlFun: (index: number) => void;
}
export default defineComponent({
  name: "SelectGirl",
  // 常见写法
  // setup() {
  //   // 通过ref定义观察者对象
  //   const girls = ref(["貂蝉", "王昭君", "西施", "杨玉环"]);  // RefImpl类型
  //   const selectedGirl = ref("虚位以待");
  //   const selectGirlFun = (index: number) => {
  //     selectedGirl.value = girls.value[index];
  //   };
  //   return {
  //     girls,
  //     selectedGirl,
  //     selectGirlFun,
  //   };
  // }

  // 使用接口
  setup() {
    const { result, loading, updateUrl } = useUrlAxios(
      "https://dog.ceo/api/breeds/image/random"
    );
    const data: DataProp = reactive({
      // Proxy 代理类型
      girls: ["貂蝉", "王昭君", "西施", "杨玉环"],
      selectedGirl: "",
      selectGirlFun: (index: number) => {
        data.selectedGirl = data.girls[index];
        getNowTime()
        updateUrl()
      },
    });
    const refData = toRefs(data); // 转化为ref类型对象
    const overTitle = ref("");
    const overAction = () => {
      if (data.selectedGirl) {
        overTitle.value = data.selectedGirl + "SPA完成";
      } else {
        window.alert('您还未指定服务员')
      }
    };
    // watch使用
    watch([overTitle, () => data.selectedGirl], (newData, oldData) => {
      document.title = newData[0];
    });
    // onBeforeMount(() => {
    //   console.log('组件挂载到页面前')
    // })
    // onMounted(() => {
    //   console.log('组件挂载到页面之后')
    // })
    // onBeforeUpdate(() => {
    //   console.log('组件数据更新前')
    // })
    // onUpdated(() => {
    //   console.log('组件内容更新之后')
    // })
    // // 方便调试，查找原因
    // onRenderTracked((event) => {
    //   console.log('状态跟踪', event)
    // })
    // onRenderTriggered((event) => {
    //   console.log('状态变化', event)
    // })
    return {
      ...refData,
      overTitle,
      overAction,
      nowTime,
      result,
      loading
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.active {
  border-color: red;
  color: red;
}
</style>
