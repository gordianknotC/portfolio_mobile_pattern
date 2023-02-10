<template lang="pug">
MainLayout
  article.home-page
    h2.text-hidden HomePage
    .banner
      img(src="https://picsum.photos/id/1002/375/120" alt="banner")

    .notice
      van-notice-bar(
        :scrollable="false")
        .flex.items-center
          svg-icon.notification(name="notification" :size="24")
          van-swipe(
            vertical
            class="notice-swipe"
            :autoplay="2000"
            :show-indicators="false")
            van-swipe-item(v-for="item in ann" :key="item")
              p {{ item.title }}

    .grid.grid-cols-2.gap-4.mb-8
      router-link.wheel(:to="{name: RouterNames.SpinWheel}")
        img(:src="require('@/assets/img/wheel-big.png')" alt="Wheel")
      router-link.invite(:to="{ name: RouterNames.InviteFriends }")
        img(:src="require('@/assets/img/invite.png')" alt="Invite")

    HomePageQuestSection

    HomePageGameSection

    section.news
      header.section-header
        h3 News
        router-link.more(:to="{ name: RouterNames.News}") MORE
      .news-item(v-for="index in 3" :key="index")
        img.pic(src="https://picsum.photos/id/10/103/81" alt="")
        .content
          .flex.items-center.mb-2
            van-tag cricket
            .flex.items-center
              svg-icon.mr-1(name="clock" :size="24")
              time.text 2021/06/20
          p.text-light Lorem ipsum dolorsitamet consetetur
    section.other
      van-button.btn-tertiary.btn-contact(
        :to="{ name: RouterNames.ContactList }"
        block
      ) Contact us
      .other-links
        router-link(to="/") Terms of Service
        span
        router-link(to="/") Privacy policy
        span
        router-link(to="/") Contest rules
</template>

<script lang="ts">
import {defineComponent} from "vue";
import MainLayout from "@/layout/MainLayout/MainLayout.vue";
import RouterNames from "~/router/name";
import HomePageQuestSection from "~/views/home/HomePageQuestSection.vue";
import BaseApi from "~/services/apiService";
import {onMounted, reactive, toRefs} from "~/appCommon/base/vueTypes";
import {announcement} from "~/types/apiTypes";
import HomePageGameSection from "~/views/home/HomePageGameSection.vue";
import {facade} from "~/types/facadeTypes";
import {EIOStage} from "~/appCommon/base/baseTableTypes";

export default defineComponent({
  name: "HomePage",
  components: {
    MainLayout,
    HomePageQuestSection,
    HomePageGameSection
  },
  setup() {
    const state = reactive({
      ann: [] as announcement[]
    })
    const getAnn = async () => {
      const ann = await BaseApi.getAnnouncement()
      console.log("ann", ann)
      state.ann = ann.data
    }
    onMounted(async ()=>{
      await getAnn()
      await facade.appStore.updateAvatar(EIOStage.update);
    })



    return {
      ...toRefs(state),
      RouterNames
    }
  }
});
</script>

<style lang="scss" scoped>
.banner {
  height: 120px;
  @apply mb-2;
  img {
    position: absolute;
    left: 0;
    right: 0;
    width: 100vw;
    height: 120px;
    object-fit: cover;
  }
}

.notice {
  @apply my-4 px-4 py-2.5 bg-bg-dark rounded-md;
  .notification{
    flex: 1 0 13%;
    @apply mr-1;
  }

  .notice-swipe {
    height: 1.25rem;
    line-height: 1.25rem;
  }
  .van-swipe-item{
    width: 80%;
    p{
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

  }
}

.section-header {
  @apply flex justify-between items-center mb-4;
  h3 {
    @apply text-2xl text-light;
  }
  .more {
    @apply text-tertiary-light;
  }
}




section.news {
  @apply mb-8;
}

.news-item {
  @apply grid gap-4 items-start text-light;
  grid-template-columns: 103px 1fr;

  &:not(:last-of-type) {
    @apply mb-4;
  }

  .pic {
    @apply rounded-md overflow-hidden object-cover;

    height: 80px;
  }

  .van-tag {
    @apply bg-primary-light text-sm px-2 py-1 mr-2;
    border-radius: 8px;
  }
}

.btn-contact {
  @apply py-4 text-base mb-4;
}

.other-links {
  @apply grid items-center justify-center text mb-4;
  grid-template-columns: 1fr 1px 1fr 1px 1fr;
  a {
    @apply text-sm text-center hover:text-active;
  }
  span {
    display: block;
    height: 100%;
    @apply bg-primary-grey;
  }
}

</style>
