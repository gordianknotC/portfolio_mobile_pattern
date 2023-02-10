<template lang="pug">
Header
#main
  .container
    slot
NavTab
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./Header.vue";
import NavTab from "./NavTab.vue";

export default defineComponent({
  name: "MainLayout",
  components: {
    Header,
    NavTab
  }
});
</script>

<style lang="scss" scoped>

</style>
