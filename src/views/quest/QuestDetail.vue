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

  van-button.receiveBtn.btn-tertiary(@click="doReceive") Receive Task



</template>

<script lang="ts">
import { defineComponent } from "vue";
import RouterNames from "~/router/name";
import {onMounted, reactive, toRefs} from "~/appCommon/base/vueTypes";
import SubLayout from "~/layout/SubLayout.vue";
import BaseApi from "~/services/apiService";
import {GetQuest} from "~/types/apiTypes";
import {facade} from "~/types/facadeTypes";
import {Toast} from "vant";

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
      questDetail: {} as GetQuest[],
    });


    // 接任務
    const doReceive = async () => {
      const payload = {
        extra_mission_id: Number(props.questId!),
        reward_type: Number(props.reward_type!)
      }
      await BaseApi.PostQuest(payload)
      .then((res)=>{
        if(res){
          Toast.success("success")
        }
        const reward_type = props.reward_type!
        const questId = props.questId!
        facade.router.push({
          name: RouterNames.QuestUpload,
          params: {
            reward_type,
            questId,
          }
        })
      })
    }

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

    onMounted(async ()=>{
      await getQuestDetail()
    })

    return {
      ...toRefs(state),
      doReceive
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
  .receiveBtn {
    @apply absolute;
    bottom: 1.5rem;
    width: calc(100% - 3rem);
  }
}

</style>
