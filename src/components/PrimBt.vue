<template lang="pug">
van-button.primary-bt-gradient.mt-5(
  v-bind="$attrs"
  @click="onClick"
)
  slot
  // following two are untested
  slot(name="icon")
  slot(name="loading")

</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PrimBt",
  emits: ["click"],
  inheritAttrs:true,
  setup(props, {emit}) {
    return {
      onClick(){
        emit("click");
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.van-button {
  &--default{
    @apply font-bold w-full border-none text-base;
    height: 3.3rem;
    border-radius: 10px;
  }
}

::v-deep(){
  .van-button__text{
    @apply text-primary-dark font-medium
  }
}

</style>
