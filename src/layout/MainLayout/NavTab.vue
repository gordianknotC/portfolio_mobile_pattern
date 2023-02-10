<template lang="pug">
van-tabbar(
  v-model="active"
  active-color="#3acdec"
  inactive-color="#bfbfda"
  :border="false"
  placeholder
  safe-area-inset-bottom
)
  van-tabbar-item(
    :name="RouterNames.Home"
    :to="{name: RouterNames.Home}"
  )
    span Home
    template(#icon="props")
      SvgIcon(name="home" :size="28" :color="props.active ? '#3acdec' : '#bfbfda'")
  van-tabbar-item(
    :name="RouterNames.Game"
    :to="{name: RouterNames.Game}"
  )
    span Game
    template(#icon="props")
      SvgIcon(name="game" :size="28" :color="props.active ? '#3acdec' : '#bfbfda'")
  van-tabbar-item(
    :name="RouterNames.Quest"
    :to="{name: RouterNames.Quest}"
  )
    span Task
    template(#icon="props")
      SvgIcon(name="prize" :size="28" :color="props.active ? '#3acdec' : '#bfbfda'")
  van-tabbar-item(
    :name="RouterNames.News"
    :to="{name: RouterNames.News}"
  )
    span News
    template(#icon="props")
      SvgIcon(name="news" :size="28" :color="props.active ? '#3acdec' : '#bfbfda'")
  van-tabbar-item(
    :name="RouterNames.Friends"
    icon="home-o"
    :to="{name: RouterNames.Friends}"
  )
    span Friends
    template(#icon="props")
      SvgIcon(name="friends" :size="28" :color="props.active ? '#3acdec' : '#bfbfda'")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { reactive, toRefs } from "~/appCommon/base/vueTypes";
import { useRoute } from "vue-router";
import RouterNames from "~/router/name";
import SvgIcon from "~/components/SvgIcon.vue";

export default defineComponent({
  name: "NavTab",
  components: { SvgIcon },
  setup() {
    const route = useRoute();

    const state = reactive({
      active: route.name ?? RouterNames.Home
    });

    return {
      ...toRefs(state),
      RouterNames
    };
  }
});
</script>

<style lang="scss" scoped>
.v-bottom-navigation {
  .v-btn {
    flex: 1;
    filter: grayscale(0);
  }
}
</style>
