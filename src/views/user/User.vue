<template lang="pug">
SubLayout(
  pageTitle="My account"
  :backRouter="backToHome"
)
  article.user-page
    h1.text-hidden User Center
    .user-profile
      van-image.user-img(
        width="72"
        height="72"
        :src="'data:image/jpeg;base64,' + avatarURL"
        alt="avatar"
      )
      h2.user-name {{$user.state.username}}
      p.user-id ID {{$user.state.uid}}
    section.my-balance
      h3.section-title My Balance
      MyEarn
    section.branding-card.branding-card--gradient.mb-4
      h3.section-title Invite friends
      p.flex.flex-wrap.items-center.text.mb-4 For every new member
        .flex.items-center
          span.text-light.font-semibold.mx-2 + 10
          svg-icon(name="cash" :size="24")
      router-link(:to="{name: RouterNames.InviteFriends}")
        van-button.btn-tertiary(
          block
        )
          template(#icon)
            .flex.items-center
              svg-icon(name="friends" :size="24")
              span.ml-2 Invite
    .cash-control
      router-link.branding-card.branding-card--dark.branding-card--dark-hover(
        :to="{ name: RouterNames.Withdraw }"
      )
        svg-icon.mb-1(name="withdrawal")
        p withdrawal
      router-link.branding-card.branding-card--dark.branding-card--dark-hover(
        :to="{ name: RouterNames.Wallet }"
      )
        svg-icon.mb-1(name="wallet")
        p Wallet
    section.other-tools.branding-card.branding-card--dark
      router-link.tool-item(:to="{name: RouterNames.Settings}")
        svg-icon(name="setting")
        h4 Setting
      router-link.tool-item(:to="{ name: RouterNames.ContactList }")
        svg-icon(name="customer")
        h4 Contact us
      router-link.tool-item(:to="{ name: RouterNames.Help }")
        svg-icon(name="help")
        h4 Help
      router-link.tool-item(:to="{ name: RouterNames.About }")
        svg-icon(name="about-us")
        h4 About us

      router-link.tool-item(
        @click.native="onLogout"
        to="/"
      )
        svg-icon(name="logout")
        h4 Log out
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import SubLayout from "~/layout/SubLayout.vue";
import MyEarn from "~/components/MyEarn.vue";
import RouterNames from "~/router/name";
import { facade } from "~/types/facadeTypes";

export default defineComponent({
  name: "Member",
  components: {
    SubLayout,
    MyEarn
  },
  setup() {
    const backToHome = () => {
      facade.router.push({
        name: RouterNames.Home
      });
    };

    return {
      RouterNames,
      backToHome,
      avatarURL: computed(() => facade.appStore.state.avatar),
      onLogout(){
        facade.userStore.clearUserData([]);
      }
    };
  }
});
</script>

<style lang="scss" scoped>
.user-profile {
  @apply flex flex-col justify-center items-center py-8;

  .user-img {
    width: 72px;
    height: 72px;
    border-radius: 100%;
    overflow: hidden;
    object-fit: cover;
    @apply mb-2;
  }

  .user-name {
    @apply text-2xl mb-1;
  }
}

.section-title {
  @apply text-lg mb-4;
}

.my-balance {
  @apply bg-bg-dark rounded-md p-6 mb-4;
}

.cash-control {
  @apply grid grid-cols-2 gap-4 mb-4;

  .branding-card {
    @apply flex flex-col items-center justify-center;
  }
}

.tool-item {
  @apply grid gap-4 items-center text-light py-2 px-4 -mx-4;
  @apply transition-colors duration-300 ease-in-out hover:bg-primary;
  grid-template-columns: 24px 1fr;
}
</style>
