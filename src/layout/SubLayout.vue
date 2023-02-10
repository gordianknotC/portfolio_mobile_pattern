<template lang="pug">
van-nav-bar(
  :left-text="pageTitle"
  left-arrow
  safe-area-inset-top
  :border="false"
  @click-left="backRouter"
).mb-4
  template(#right)
    slot(name="navRight")
#main
  .container
    slot
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SubLayout",
  slot: ["navRight"],
  props: {
    pageTitle: {
      type: String,
      default: ""
    },
    backRouter: {
      type: Function,
      default: () => {
        window.history.back();
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.v-app-bar {
  justify-content: center;
}
</style>
