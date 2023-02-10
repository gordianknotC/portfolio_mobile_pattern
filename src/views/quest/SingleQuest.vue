<template lang="pug">
// 接了 或是 未接
.single_quest(v-if="!quest_expired")
  .quest-img.rounded-lg.mr-4
  p.flex-1.text-base.text-left {{ quest_name }}
  .flex.flex-col
    .reward
      p.font-semibold.mr-1 {{ quest_worth }}
      SvgIcon(:name="iconName" :size="28")
    span(v-if="quest_received === true")
      .expired(@click="goReceiveDetail(quest_id, quest_rewardType)") Receive
    span(v-else)
      van-button.btn-tertiary(
        @click="goDetail(quest_id, quest_rewardType)"
        size="mini") Receive


// 過期
.single_quest(v-else)
  .quest-img.rounded-lg.mr-4
  p.flex-1.text-base.text-left.opacity-50 {{ quest_name }}
  .flex.flex-col
    .reward.opacity-50
      p.font-semibold.mr-1 {{ quest_worth }}
      SvgIcon(:name="iconName" :size="28")
    .expired(
      @click="goExpiredDetail(quest_id, quest_rewardType)"
    ) Expired


</template>


<script lang="ts">
import { defineComponent } from "vue";
import {onMounted, reactive, toRefs, watch} from "~/appCommon/base/vueTypes";
import {facade} from "~/types/facadeTypes";
import RouterNames from "~/router/name";
import {DateExt} from "~/appCommon/base/addon";
import { is } from "~/appCommon/extendBase/impls/utils/typeInferernce";

export default defineComponent({
  name: "SingleQuest",
  props: {
    quest_name: {
      type: String,
    },
    quest_worth: {
      type: String,
      // 任務獎金
    },
    quest_expired: {
      type: Boolean,
      // 判斷任務是否過期
    },
    quest_received: {
      type: Boolean,
      // 判斷是否接取任務
    },
    quest_id: {
      type: Number,
      require: true
    },
    quest_type: {
      type: Number
      // 任務動作的 type, img的依據
    },
    quest_rewardType: {
      type: Number,
      // money or coin
    }
  },
  setup(props){
    const state = reactive({
      rewardType: props.quest_rewardType!,
      iconName: ""
    })

    watch(() => props.quest_rewardType!, () => {
      state.rewardType = props.quest_rewardType!
    })



    // 任務獎勵 icon
    const checkMissionType = () => {
      if(state.rewardType==1){
        state.iconName = "coin"
      }
      if(state.rewardType==2){
        state.iconName = "cash"
      }
    }
    onMounted(()=>{
      checkMissionType()
    })


     // 任務 未接
    const goDetail = (id: number, rewardType: number) => {
      const questId = id
      const reward_type = rewardType
      facade.router.push({ name: RouterNames.QuestDetail,
        params: {
          reward_type,
          questId,
        }
      })
    }
    // 任務 接過了
    const goReceiveDetail = (id: number, rewardType: number) => {
      const questId = id
      const reward_type = rewardType
      facade.router.push({ name: RouterNames.QuestUpload,
        params: {
          reward_type,
          questId,
        }
      })
    }
    // 任務 過期
    const goExpiredDetail = (id: number, rewardType: number) => {
      const questId = id
      const reward_type = rewardType
      facade.router.push({ name: RouterNames.ExpiredQuestDetail,
        params: {
          reward_type,
          questId,
        }
      })
    }



    



    return{
      ...toRefs(state),
      goDetail,
      goExpiredDetail,
      goReceiveDetail
    }
  }

});
</script>

<style lang="scss" scoped>
.single_quest{
  @apply flex items-center my-4 w-full;
  p{
    @apply text-light;
  }
  .quest-img{
    @apply opacity-50;
    background-color: #fff;
    height: 60px;
    width: 60px;
  }
  .reward{
    @apply flex items-center justify-between mb-1 ;
    p,i{
      @apply text-xl;
    }
  }
  .expired{
    @apply text-center text-sm font-medium opacity-50;
  }

}

</style>
