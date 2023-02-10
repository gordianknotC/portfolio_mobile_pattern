<template lang="pug">
SubLayout(
  pageTitle="Contact us"
  :backRouter="backToUser"
)
  .page-title Questions
  .mb-24
    .card(v-for="data in dataList" @click.stop="goToQuestion(data.id)")
      .time
        van-icon.mr-2(name="clock" size="18")
        span {{data.create_datetime}}
      .title {{data.title}}
      .images
        van-image(
          v-for="(image, imgIndex) in data.contexts"
          width="48"
          height="48"
          :src="'data:image/jpeg;base64,' + image"
          @click.stop="getImgPreview(data.id, imgIndex)"
          ).image
  van-loading.flex.justify-center.m-20(type="spinner" size="60" v-if="isLoading")
  router-link(:to="{name: RouterNames.Contact}")
    van-button.contact-btn Contact

</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, watch } from "vue";
import SubLayout from "~/layout/SubLayout.vue";
import RouterNames from "~/router/name";
import BaseApi from "~/services/apiService";
import { toRefs } from "~/appCommon/base/vueTypes";
import { GetFeedback } from "~/types/apiTypes";
import { useRouter } from "vue-router";
import { ImagePreview } from "vant";

export default defineComponent({
  name: "ContactList",
  components: {
    SubLayout
  },
  setup() {
    const state = reactive({
      dataList: [] as GetFeedback[],
      showImg: [] as string[],
      isLoading: false,
      scrollY: 0,
      currentPage: 1,
      totalLength: 50,
      noMoreLoading: false
    });

    const getQuestions = async () => {
      state.isLoading = true;
      const result = await BaseApi.getFeedback({});
      state.dataList = result.data;
      state.totalLength = result.pager?.total as number;
      state.isLoading = false;
      window.addEventListener("scroll", addListener);
    };

    const router = useRouter();

    const goToQuestion = (id: number) => {
      router.push({
        name: RouterNames.ContactQuestion,
        params: {
          feedbackTicketId: Number(id)
        }
      });
    };

    const getImgPreview = (id: number, index: number) => {
      const dataUri = "data:image/jpeg;base64,";
      const imageArray = [] as string[];
      const currentData = state.dataList.filter(data => data.id === id);
      currentData[0].contexts.forEach((img: string) => {
        let newUri = dataUri + img;
        imageArray.push(newUri);
      });
      ImagePreview({ images: imageArray, startPosition: index });

      return;
    };

    const loadingMore = async () => {
      state.isLoading = true;
      const result = await BaseApi.getFeedback({
        page: state.currentPage
      });
      state.noMoreLoading = state.totalLength / 10 < state.currentPage;
      state.dataList.push(...result.data);
      state.isLoading = false;
    };

    const backToUser = () => {
      router.push({
        name: RouterNames.User
      });
    };

    const addListener = (e: any) => {
      if (
        // margin bottom 多出96px
        window.innerHeight + window.scrollY - 96 >=
        document.body.offsetHeight
      ) {
        if (state.noMoreLoading) {
          console.log("no more loading");
          removeListener();
          return;
        }
        state.currentPage += 1;
        loadingMore();
      }
    };

    const removeListener = () => {
      window.removeEventListener("scroll", addListener);
    };

    onMounted(() => {
      getQuestions();
    });

    return {
      ...toRefs(state),
      RouterNames,
      goToQuestion,
      getImgPreview,
      backToUser
    };
  }
});
</script>

<style lang="scss" scoped>
.page-title {
  @apply text-2xl text-white font-medium my-4;
}
.contact-btn {
  background-image: linear-gradient(to bottom, #3acdec, #05a2c3);
  position: fixed;
  bottom: 3%;
  right: 50%;
  width: 80%;
  transform: translate(50%, 0);
  @apply text-primary-dark font-medium rounded-md border-none;
}

.card {
  @apply bg-bg-dark_blue rounded-md p-4 mb-4;

  .time {
    @apply text-primary-grey text-sm flex items-center;
  }

  .title {
    letter-spacing: 0.1rem;
    @apply my-2;
  }

  .image {
    @apply m-2;
  }
}

::v-deep() {
  .van-image {
    &__img {
      @apply rounded-md;
    }
    &:first-child {
      @apply ml-0;
    }
    &:last-child {
      @apply mr-0;
    }
  }
}
</style>
