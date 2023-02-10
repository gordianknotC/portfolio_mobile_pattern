<template lang="pug">
SubLayout(
  pageTitle="Task detail"
)
.task-detail
  .flex.items-center.mb-4
    .quest-img
    .quest_name {{ questDetail.title }}
    .quest_reward
      p.reward {{ questDetail.worth }}
      SvgIcon(name="coin" :size="28")
  .mb-2.flex.items-center.opacity-50
    SvgIcon(name="quota" :size="28").text-xl.mr-1
    .text-sm.text-white {{ questDetail.amount || 0 }} quota
  .text-white.text-base {{ questDetail.content }}



  .upload-title Screenshots
  .upload-card
    .text-base.text-white You haven’t upload screenshots yet
    van-button.mt-4.btn-tertiary(@click="show=true" block)
      .flex.items-center
        SvgIcon.mr-2(name="download" :size="24")
        p Upload screenshots
    .photo-box(v-for="img in questImg" :key="img")
      .date {{ img.datetime }}
      img(v-bind:src="'data:image/png;base64,'+ img.context" alt="game")






van-dialog(
  v-model:show="show"
  :showConfirmButton="false"
  :showCancelButton="false"
  :closeOnClickOverlay="true"
  className="bg-bg text-light text-xl"
  @close="closeDialog"
)
  .p-6
    .upload_dialog-header
      SvgIcon.closeBtn(name="close" :size="20" @click="show=false")
      .title Upload screenshots

    .upload_dialog-body
      van-uploader(
        v-model="fileList"
        :before-read="beforeRead"
        :max-size="500 * 1024"
        @oversize="onOversize"
        max-count="1"
        :delete="deleteFile"
      )
        van-button.uploadBtn
          .dashBox
            SvgIcon(name="add" :size="24")



      van-button(block @click="doSubmit").mt-4.btn-tertiary Submit





</template>

<script lang="ts">
import { defineComponent } from "vue";
import RouterNames from "~/router/name";
import {onMounted, reactive, toRefs} from "~/appCommon/base/vueTypes";
import SubLayout from "~/layout/SubLayout.vue";
import { Toast } from "vant";
import BaseApi from "~/services/apiService";
import {GetQuest, GetQuestImg} from "~/types/apiTypes";
import {facade} from "~/types/facadeTypes";

export default defineComponent({
  name: "QuestDetail",
  components: {
    SubLayout
  },
  props: {
    questId: {
      type: String
    },
    reward_type: {
      type: String
    }
  },
  setup(props) {
    const state = reactive({
      show: false,
      fileList: [] as any, // 上傳圖片
      questDetail: {} as GetQuest[],
      questImg: [] as GetQuestImg[],
    });


    // 取得單筆任務
    const getQuestDetail = async () => {
      console.log("props.questId", props.questId)
      console.log("props.rewardType", props.reward_type)
      const payload = {
        questId: Number(props.questId),
        reward_type: Number(props.reward_type)
      }
      const questDetail = await BaseApi.getQuest(payload)
      console.log("questDetail", questDetail)
      state.questDetail = questDetail.data
    }
    // 取得使用者上傳的圖片
    const getImg = async () => {
      const payload = {
        extra_mission_id : Number(props.questId!)
      }
      const imgArr = await BaseApi.getQuestImg(payload)
      console.log("imgArr", imgArr)
      state.questImg = imgArr.data
    }
    // 取出符合 ui 圖的日期格式
    const splitDatetime = (data: GetQuestImg[]) => {
      data.map((item)=>{
        item.datetime = item.datetime.split(" ")[0]
      })
    }

    onMounted(async ()=>{
      await getQuestDetail()
      await getImg()
      await splitDatetime(state.questImg)
    })

    // close dialog
    const closeDialog = () => {
      console.log("close Dialog");
      deleteFile();
    };

    // 確認上傳圖片格式
    const beforeRead = (file: any) => {
      console.log("file.type ", file.type);
      console.log("before file", file);

      if (file.type === "image/jpeg" || file.type === "image/png") {
        return true;
      } else {
        Toast("请上传 jpg/png 格式图片");
        return false;
      }
    };

    // 限制大小
    const onOversize = (file: any) => {
      console.log("file.size ", file.size);
      Toast("file size can't be over 500kb");
    };

    // 清除舊的上傳資料
    const deleteFile = () => {
      state.fileList = [];
    };

    // 上傳圖片
    const doSubmit = async () => {
      const payload = {
        extra_mission_id: Number(props.questId!),
        context: state.fileList[0].content
      }
      await BaseApi.PostQuestImg(payload)
      .then(async res=>{
        if(res){
          Toast.success("success")
          state.show = false
          deleteFile()
          await getImg()
          await splitDatetime(state.questImg)
        }
      })
      .catch(e=>{
        Toast.fail(e.data.error_msg)

      })
    };

    return {
      ...toRefs(state),
      beforeRead,
      onOversize,
      deleteFile,
      closeDialog,
      doSubmit,
    };
  }
});
</script>

<style lang="scss" scoped>
.task-detail {
  @apply p-6;
  .quest {
    &-img {
      @apply rounded-lg mr-4;
      background-color: #fff;
      height: 3.75rem;
      width: 3.75rem;
    }
    &_name {
      @apply text-light flex-1 text-base text-left flex-1;
    }
    &_reward {
      p,
      i {
        @apply text-xl;
      }
      @apply flex items-center text-light;
      .reward {
        @apply font-semibold mr-1;
      }
    }
  }
  .upload {
    &-title {
      @apply mt-8 mb-4 text-xl text-light;
    }
    &-card {
      @apply bg-bg-dark rounded-lg p-6 flex flex-col justify-center text-center;
      .photo-box {
        @apply mt-4 rounded-lg bg-bg p-4 flex justify-between items-center;
        .date {
          @apply font-medium text-base text-white;
        }
        img {
          width: 3rem;
          height: 3rem;
          object-fit: cover;
        }
      }
    }
  }
  .receiveBtn {
    @apply absolute;
    bottom: 1.5rem;
    width: calc(100% - 3rem);
  }
}
.upload_dialog {
  &-header {
    @apply relative mb-6 text-xl font-medium;
    .closeBtn {
      @apply absolute;
      right: 0;
      top: 0;
    }
  }
  &-body {
    .uploadBtn {
      @apply rounded-md p-2 border-none;
      background-color: #1b1b6a;
      width: 9.5rem;
      height: 9.5rem;

      .dashBox {
        width: 8.5rem;
        height: 8.5rem;
        border: 1px dashed #ffffff;
        @apply backdrop-opacity-0 text-lg text-white rounded-md;
        @apply flex justify-center items-center;
      }
    }
    ::v-deep(){
      .van-uploader{
        &__preview{
          &-image{
            width: 9.5rem;
            height: 9.5rem;
            @apply  rounded-md border-none;
          }
        }

      }
    }


  }
}
</style>
