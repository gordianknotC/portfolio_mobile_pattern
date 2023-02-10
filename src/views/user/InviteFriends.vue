<template lang="pug">
SubLayout(
  pageTitle="Invite friends"
)
  p.my-4 10 coins for every friend you invite

  .invite-code
    .invite-code__title Invite Code
    .invite-code__box
      .code {{code}}
      van-button.btn.btn-tertiary(
        @click="copyLink"
      )
        template(#icon)
          .flex.items-center
            svg-icon(name="copy" :size="24")
            span.ml-2.text-base Copy
  .team
    .team__title Your Team
    .team__nofriend(v-if="memberList.length === 0") More members, more prize! Invite your friends to get 10 coins
    .team__member(v-for="n in 1")
      img(:src="require('@/assets/img/avatar.png')" alt="avatar")
      .info
        .name Username
        .id ID 1234567890

  van-button.share-btn.btn-tertiary(@click="showShare = !showShare") Share invite link
  van-share-sheet(
    v-model:show="showShare"
    :options="shareOptions"
    title="Share"
    cancel-text=""
  )
    template(#cancel)
      van-button(@click="showShare = false").cancel-btn Cancel
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import SubLayout from "~/layout/SubLayout.vue";
import {onMounted, toRefs} from "~/appCommon/base/vueTypes";
import { Toast } from "vant";
import {facade} from "~/types/facadeTypes";

export default defineComponent({
  name: "InviteFriends",
  components: {
    SubLayout
  },
  setup() {
    const state = reactive({
      code: facade.userStore.state.uid,
      memberList: [{}],
      showShare: false as boolean,
      shareOptions: [
        {
          name: "WeChat",
          icon: "wechat"
        },
        {
          name: "Copy",
          icon: "link"
        },
        {
          name: "qrCode",
          icon: "qrcode"
        },
      ]
    });

    const copyLink = () => {
      navigator.clipboard.writeText(state.code!);
      document.execCommand("copy");
      Toast("Code copied !");
    };


    return {
      ...toRefs(state),
      copyLink
    };
  }
});
</script>

<style lang="scss" scoped>
.invite-code {
  &__title {
    @apply text-2xl mb-4;
  }
  &__box {
    @apply bg-primary-med_dark rounded flex justify-between items-center p-4;
  }
  .btn {
    @apply h-full w-auto px-2 py-1;
  }
}

.team {
  @apply mt-4;
  &__title {
    @apply text-2xl mb-4;
  }
  &__nofriend {
    @apply text-primary-grey;
  }
  &__member {
    @apply flex items-center my-2;

    img {
      width: 40px;
      height: 40px;
      @apply mr-4;
    }

    .name {
      @apply text-base;
    }

    .id {
      @apply text-sm text-primary-grey;
    }
  }
}

.share-btn {
  position: fixed;
  bottom: 3%;
  right: 50%;
  width: 80%;
  transform: translate(50%, 0);
  @apply rounded-md border-none;
}

.cancel-btn {
  width: 90%;
  @apply bg-bg-grey text-text-grey font-medium rounded-md my-4;
}
</style>
