<template lang="pug">
SubLayout(
  pageTitle="Help"
)
  .questionBox
    span Withdrawal guideline
  .questionBox
    span How to invite friends
  .questionBox
    span Task tutorial

</template>

<script lang="ts">
import { defineComponent } from "vue";
import SubLayout from "~/layout/SubLayout.vue";

export default defineComponent({
  name: "Help",
  components: {
    SubLayout
  }
});
</script>

<style lang="scss" scoped>
.questionBox {
  height: 52px;
  line-height: 52px;
  @apply text-white bg-bg-dark_blue rounded-md px-4 my-4;
}
</style>
