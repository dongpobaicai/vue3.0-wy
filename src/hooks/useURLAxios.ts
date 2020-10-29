import { ref } from "vue";
import axios from "axios";

// 获取服务员头像
const useUrlAxios = (url: string) => {
  const result = ref(null);
  const loading = ref(true);
  const error = ref(null);
  const updateUrl = () => {
    axios
    .get(url)
    .then((res) => {
      loading.value = false;
      result.value = res.data;
    })
    .catch((e) => {
      error.value = e;
      loading.value = false;
    });
  }

  return {
    result,
    loading,
    error,
    updateUrl
  };
};

export default useUrlAxios;
