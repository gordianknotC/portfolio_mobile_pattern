<template lang="pug">
van-nav-bar(
  safe-area-inset-top
  :border="false"
)
  template(#left)
    h1.text-hidden Branding
    MyEarn
  template(#right)
    router-link(:to="{name: RouterNames.User}").flex
      van-image.user-img(
        v-if="$user.state.avatarURL"
        width="32"
        height="32"
        :src="'data:image/jpeg;base64,' + avatarURL"
        alt="avatar"
      )
      svg-icon(v-else name="member" :size="28")

</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, computed } from "vue";
import RouterNames from "~/router/name";
import MyEarn from "~/components/MyEarn.vue";
import BaseApi from "~/services/apiService";
import { facade } from "~/types/facadeTypes";

export default defineComponent({
  name: "Header",
  components: {
    MyEarn
  },
  setup() {
    return {
      avatarURL: computed(() => facade.appStore.state.avatar),
      RouterNames
    };
  }
});
</script>

<style lang="scss" scoped>
.user-img {
  border-radius: 100%;
  overflow: hidden;
  object-fit: cover;
}
</style>
