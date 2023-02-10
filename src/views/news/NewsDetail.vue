<template lang="pug">
SubLayout(
  pageTitle="News"
)
  van-col.flex
    .info__badge Cricket
    .info__time
      van-icon.text-lg.mr-1(name="clock")
      span 2021/06/20
  h1.title Lorem ipsum dolor sit amet.
  p.content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aut dicta earum error facere, fuga modi nulla odio qui voluptatum?
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SubLayout from "@/layout/SubLayout.vue";

export default defineComponent({
  name: "NewsDetail",
  components: {
    SubLayout
  },
  props: {
    id: {
      type: String
    }
  }
});
</script>

<style lang="scss" scoped>
.info {
  &__badge {
    width: min-content;
    border-radius: 10px;
    padding: 5px 10px;

    @apply text-center text-white mr-2 bg-primary-light;
  }
  &__time {
    @apply text-primary-grey flex items-center;
    span {
      @apply text-sm;
    }
  }
}
.title {
  @apply text-3xl text-white py-4;
}

.content {
  @apply text-white;
}
</style>
