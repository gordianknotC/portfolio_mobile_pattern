<template lang="pug">
SubLayout(
  pageTitle="Contact us"
)
 van-form(@submit="onSubmit")
  van-field(
    v-model="email"
    name="email"
    placeholder="example@gmail.com"
    :label="'Your email'"
    :border="false"
    type="email"
    :rules="[{ required: true, message: 'Please enter your email' }]"
  )
  van-field(
    v-model="title"
    :label="'Title'"
    name="title"
    placeholder="Let us know how we can help you"
    :border="false"
    :rules="[{ required: true, message: 'Please enter question title' }]"
  )
  van-field(
    v-model="content"
    rows="3"
    :label="'Full description'"
    autosize
    :border="false"
    type="textarea"
    maxlength="50"
    placeholder="Please include as much information as possible"
    :rules="[{ required: true, message: 'Please describe the detail of question' }]"
  )

  van-field.upload(
      name="uploader"
      :label="'Upload'"
      preview-size="100%"
    )
    template(#input)
      .dot-border.flex
        van-uploader(
          v-model="fileList"
          :max-size="500 * 1024"
          @oversize="onOversize"
          multiple
          :max-count="5"
          :after-read="afterRead")
          SvgIcon(name="download" color="#bfbfda" :size="64" v-if="fileList.length < 5")
  van-button.submit-btn(native-type="submit") Submit
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import SubLayout from "~/layout/SubLayout.vue";
import SvgIcon from "~/components/SvgIcon.vue";
import { toRefs } from "~/appCommon/base/vueTypes";
import { Toast } from "vant";
import BaseApi from "~/services/apiService";
import { PostFeedbackPayload } from "~/types/apiTypes";
import { useRouter } from "vue-router";
import RouterNames from "~/router/name";

export default defineComponent({
  name: "Contact",
  components: {
    SvgIcon,
    SubLayout
  },
  setup() {
    const state = reactive({
      email: "",
      title: "",
      content: "",
      remark: "",
      fileList: [] as {
        url: string;
      }[],
      imgBase64Array: [] as string[]
    });

    const onOversize = (file: any) => {
      Toast("file size can't be over 500kb");
    };

    const router = useRouter();

    const onSubmit = async () => {
      let payload = {
        title: state.title,
        email: state.email,
        content: state.content,
        contexts: state.imgBase64Array
      };

      // if (state.remark) {
      //   payload.remark = state.remark;
      // }
      try {
        await BaseApi.postFeedback(payload);
        router.push({
          name: RouterNames.ContactList
        });
      } catch (e) {
        Toast(e.data.message ? e.data.message : e.data.error_message);
      }
    };

    const afterRead = (payload: any) => {
      if (payload.length > 1) {
        payload.forEach((file: any) => {
          state.imgBase64Array.push(file.content);
        });
      } else {
        state.imgBase64Array.push(payload.content);
      }
      console.log(state.imgBase64Array);
    };

    return {
      ...toRefs(state),
      onOversize,
      onSubmit,
      afterRead
    };
  }
});
</script>

<style lang="scss" scoped>
.field-title {
  @apply text-white mb-2;
}

.dot-border {
  height: 100%;
  @apply p-4 w-full rounded-md border border-4 border-dashed border-primary-light flex items-center justify-center;
}

.submit-btn {
  background-image: linear-gradient(to bottom, #3acdec, #05a2c3);
  position: fixed;
  bottom: 3%;
  right: 50%;
  width: 80%;
  transform: translate(50%, 0);
  @apply text-primary-dark font-medium rounded-md border-none;
}

.upload {
  ::v-deep() {
    .van-uploader {
      &__input-wrapper {
        @apply flex items-center;
      }
    }
    .van-field {
      &__value {
        @apply pl-2;
      }
    }
  }
}
</style>
