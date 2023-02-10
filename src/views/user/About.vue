<template lang="pug">
SubLayout(
  pageTitle="About"
)
  p.content {{content}}
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import SubLayout from "~/layout/SubLayout.vue";
import BaseApi from "~/services/apiService";
import { toRefs } from "~/appCommon/base/vueTypes";

export default defineComponent({
  name: "About",
  components: {
    SubLayout
  },
  setup() {
    const state = reactive({
      content: ""
    });
    const getAboutUs = async () => {
      const result = await BaseApi.getAboutUs();
      state.content = result.data.content;
    };

    onMounted(() => {
      getAboutUs();
    });

    return {
      ...toRefs(state)
    };
  }
});
</script>

<style lang="scss" scoped>
.content {
  @apply text-white;
}
</style>
