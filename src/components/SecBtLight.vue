<template lang="pug">
van-button.mt-5(v-bind="$attrs" @click="onClick")
  slot
  // following two are untested
  slot(name="icon")
  slot(name="loading")

</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import RouterNames from "~/router/name";

//fixme: 改寫 prop 帶 border color, text color
export default defineComponent({
  name: "SecBtLight",
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
    @apply w-full;
    @apply font-bold text-base text-tertiary-light font-medium;
    @apply bg-primary-dark border-solid border-2 border-tertiary-light ;
    height: 3.3rem;
    border-radius: 10px;
  }
}

::v-deep(){
  .van-button__text {
    @apply inline-flex flex-row-reverse;
  }
  .svg-icon{
    @apply  mx-2;
  }
}

</style>
