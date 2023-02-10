<template lang="pug">
SubLayout(
  pageTitle="Question"
)
  van-loading.flex.justify-center.p-20(type="spinner" size="60" v-if="isLoading")
  van-col.flex
    .info__time
      van-icon.text-lg.mr-1(name="clock" v-if="isLoading === false")
      span {{data.create_datetime}}
  h1.title {{data.title}}
  p.content {{data.content}}
  .images
    van-image(
      v-for="(image, index) in data.contexts"
      width="48"
      height="48"
      :src="'data:image/jpeg;base64,' + image"
      @click="getImagePreview(index)"
    ).m-2
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import SubLayout from "~/layout/SubLayout.vue";
import { GetFeedback } from "~/types/apiTypes";
import BaseApi from "~/services/apiService";
import { toRefs } from "~/appCommon/base/vueTypes";
import { ImagePreview } from "vant";

export default defineComponent({
  name: "ContactQuestion",
  components: {
    SubLayout,
    [ImagePreview.Component.name]: ImagePreview.Component
  },
  props: {
    id: {
      type: String
    },
    feedbackTicketId: {
      type: String
    }
  },
  setup(props) {
    const state = reactive({
      data: {} as GetFeedback,
      isLoading: false
    });

    const getQuestions = async () => {
      state.isLoading = true;
      const result = await BaseApi.getFeedback({
        feedback_ticket_id: Number(props.feedbackTicketId)
      });
      state.data = result.data[0];
      state.isLoading = false;
    };

    const getImagePreview = (index: number) => {
      const dataUri = "data:image/jpeg;base64,";
      const imageArray = [] as string[];
      state.data.contexts.forEach(img => {
        let newUri = dataUri + img;
        imageArray.push(newUri);
      });
      ImagePreview({ images: imageArray, startPosition: index });
    };

    onMounted(() => {
      getQuestions();
    });

    return {
      ...toRefs(state),
      getImagePreview
    };
  }
});
</script>

<style lang="scss" scoped>
.info {
  &__time {
    @apply text-primary-grey flex items-center;
    span {
      @apply text-sm;
    }
  }
}
.title {
  @apply text-3xl text-white py-4;
}

.content {
  @apply text-white;
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
