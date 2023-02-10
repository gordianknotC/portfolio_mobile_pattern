<template lang="pug">
MainLayout
  .page-title News
  van-tabs(
    color="#3acdec"
    background="#2a2a83"
    line-width="0"
    line-height="0"
    v-model:active="tabActive"
    sticky
    swipeable
    :ellipsis="false"
    @change="onClickTab")
    van-tab(v-for="item in newsCategory" :title="item.text")
      .my-4.mx-2(v-for="ballNews in 20")
        SingleNews

</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import MainLayout from "~/layout/MainLayout/MainLayout.vue";
import { toRefs } from "~/appCommon/base/vueTypes";
import {newsCategory} from "~/types/apiTypes";
import SingleNews from "~/views/news/SingleNews.vue";

export default defineComponent({
  name: "News",
  components: {
    MainLayout,
    SingleNews
  },
  setup() {
    const state = reactive({
      tabActive: 0,

    });
    const onClickTab = () => {

    }
    return {
      ...toRefs(state),
      onClickTab,
      newsCategory
    };
  }
});
</script>

<style lang="scss" scoped>
.page-title {
  @apply text-2xl text-white font-bold my-4;
}


::v-deep(){
  .van-tabs{
    &__wrap{
      height: 60px;
    }
    &__nav{
      &--complete{
        padding-left: 0;
      }
      &--line {
        height: 40px;
        @apply py-2;
      }
    }
  }
  .van-tab{
    border: solid 1px #bfbfda;
    border-radius: 100px;
    @apply mx-2;

    &--active{
      @apply text-primary-dark bg-tertiary border-none;
    }
    &__text{
      width: max-content;
    }
  }

}
</style>
