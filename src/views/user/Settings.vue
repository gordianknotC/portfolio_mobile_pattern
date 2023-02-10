<template lang="pug">
SubLayout(
  pageTitle="Settings"
  :backRouter="backToUserCenter"

)
  article.user-page
    .user-profile
      van-image(
        v-if="$user.state.avatarURL"
        width="72"
        height="72"
        :src="'data:image/jpeg;base64,' + $user.state.avatarURL"
        fit="cover"
        alt="avatar"
        round
      )
      SvgIcon(v-else name="member" :size="72")
      .avatar-btn(@click="editSheet = !editSheet")
        SvgIcon(name="edit" :size="24")
    section.info
      .info__box
        .title Username
        .value {{ info.username }}
    section.info
      .info__box
        .title Password
      van-button.btn.btn-tertiary(@click="onClickPassword") Edit
    section.info
      .info__box
        .title Fund Password
      van-button.btn.btn-tertiary(@click="onClickFundPassword") {{ info.is_set_fund_password ? "Edit" : "Set"}}
    section.info
      .info__box
        .title Phone
        .value {{ info.phone_number}}
    section.info
      .info__box
        .title E-mail
        .value {{ info.email || " - "}}
      van-button.btn.btn-tertiary(v-if="info.is_email_verified") Verified
      van-button.btn.btn-tertiary(
        v-else
        @click="onClickEmail") Verify
van-action-sheet(v-model:show="editSheet")
  .sheet
    .sheet__content
      label.option
        .white-box
        span.text-white Camera
        input(
          type="file"
          accept="image/*"
          capture="camera"
          @change="uploadImg").hidden
      label.option
        .white-box
        span.text-white Photo
        input(type="file" accept="image/*" @change="uploadImg").hidden
    van-button.btn.btn-tertiary(@click="editSheet = false") Cancel
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive} from "vue";
import SubLayout from "~/layout/SubLayout.vue";
import SvgIcon from "~/components/SvgIcon.vue";
import {toRefs} from "~/appCommon/base/vueTypes";
import {facade} from "~/types/facadeTypes";
import RouterNames from "~/router/name";
import BaseApi from "~/services/apiService";
import {putAvatarPayload, UserInfoResponseRecord} from "~/types/apiTypes";
import {Toast} from "vant";
import {EIOStage} from "~/appCommon/base/baseTableTypes";

export default defineComponent({
  name: "Settings",
  components: {
    SvgIcon,
    SubLayout
  },
  setup() {
    const state = reactive({
      editSheet: false,
      info: {} as UserInfoResponseRecord
    });

    const postAvatar = async (payload: putAvatarPayload) => {
      try {
        await BaseApi.putAvatar(payload);
        state.editSheet = false;
        await facade.appStore.updateAvatar(EIOStage.upgrade);
      } catch (e) {
        Toast(e.data.message ? e.data.message : e.data.error_msg);
      }
    };

    const getBase64 = (file: any) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
    };

    const uploadImg = (e: any) => {
      const file = e.target.files[0];
      getBase64(file)
        .then((data: any) => {
          postAvatar({
            context: data as string
          });
          Toast.success("success")
        })
    };

    const getInfo = async () => {
      const result = await BaseApi.getUserInfo({})
      state.info = result.data
    }
    onMounted( ()=>{
      getInfo()
    });


    return {
      ...toRefs(state),
      uploadImg,
      onClickPassword() {
        facade.router.push({ name: RouterNames.EditUserPassword });
      },
      onClickFundPassword() {
        if (facade.userStore.state.is_set_fund_password) {
          facade.router.push({ name: RouterNames.EditFundPassword });
        } else {
          facade.router.push({ name: RouterNames.SetFundPassword });
        }
      },
      onClickEmail() {
        facade.router.push({ name: RouterNames.VerifyEmail });
      },
      backToUserCenter(){
        facade.router.push({ name: RouterNames.User });
      }
    };
  }
});
</script>

<style lang="scss" scoped>
.user-profile {
  width: 72px;
  height: 72px;
  margin: 0 auto;
  @apply my-4 relative;

  .avatar-btn {
    top: 0;
    right: 0;
    border-radius: 50%;
    @apply absolute bg-bg-dark_blue;
  }
}
.info {
  @apply bg-bg-dark_blue rounded-md p-4 my-4 flex justify-between items-center;
  .title {
    @apply text-white mb-1;
  }
  .value {
    @apply text-primary-grey;
  }
  .btn {
    @apply py-2 h-full;
  }
}

.sheet {
  @apply p-6 bg-bg;
  &__content {
    @apply flex justify-evenly mb-4;
  }
  .option {
    @apply flex flex-col items-center;
  }
  .white-box {
    width: 48px;
    height: 48px;
    @apply bg-white rounded-xl mb-2;
  }
  .btn {
    @apply w-full;
  }
}
</style>
