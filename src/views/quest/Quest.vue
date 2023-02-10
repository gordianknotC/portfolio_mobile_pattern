<template lang="pug">
MainLayout
  .titleLine
    .title Earn money
    .remaining Remaining task {{remainingMoney}}
  .gameLine(v-for="moneyMission in earnMoney")
    SingleQuest(
    :quest_name="moneyMission.title"
    :quest_worth="moneyMission.worth"
    :quest_id="moneyMission.id"
    :quest_type="moneyMission.action_type"
    :quest_expired="moneyMission.expired"
    :quest_rewardType="moneyMission.reward_type"
    :quest_received="moneyMission.received"
    )

  .titleLine
    .title Earn coin
    .remaining Remaining task {{remainingCoin}}
  van-tabs(
    color="#3acdec"
    background="#2a2a83"
    line-width="0"
    line-height="0"
    v-model:active="tabActive"
    sticky
    swipeable
    :ellipsis="false"
    @change="onClickTab")
    van-tab(v-for="item in MissionStatus" :title="item.text")
      .my-4.mx-2(v-for="coinQuest in earnCoin")
        SingleQuest(
          :quest_name="coinQuest.title"
          :quest_worth="coinQuest.worth"
          :quest_id="coinQuest.id"
          :quest_type="coinQuest.action_type"
          :quest_expired="coinQuest.expired"
          :quest_rewardType="coinQuest.reward_type"
          :quest_received="coinQuest.received"
        )



</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainLayout from "~/layout/MainLayout/MainLayout.vue";
import SingleQuest from "~/views/quest/SingleQuest.vue";
import {GetQuest, MissionStatus} from "~/types/apiTypes";
import BaseApi from "~/services/apiService";
import {onMounted, reactive, toRefs} from "~/appCommon/base/vueTypes";
import {facade} from "~/types/facadeTypes";

export default defineComponent({
  name: "Quest",
  components: {
    MainLayout,
    SingleQuest
  },
  setup(){
    const state = reactive({
      earnMoney: [] as GetQuest[],
      earnCoin: [] as GetQuest[],
      earnCoinAll: [] as GetQuest[],
      tabActive: 0,

      remainingMoney: 0,
      remainingCoin: 0,
    })



    const getMission = async (type: number) => {
      if(type == 1){  //coin
        console.log("coin")
        const coinList =  await BaseApi.getQuest({reward_type: type})
        console.log("coinList", coinList)
        state.earnCoinAll = coinList.data

        // 預設 tab type: read
        state.earnCoin = coinList.data.filter((coinQuest)=>{
          return coinQuest.action_type == 1
        })
      }
      if(type == 2){  // money
        console.log("money")
        const moneyList =  await BaseApi.getQuest({reward_type: type})
        console.log("moneyList", moneyList)
        state.earnMoney = moneyList.data
      }
    }
    // 是否承接任務
    const checkReceived = (data: GetQuest[]) => {
      data.map((item)=>{
        item.received = item.status != null;
      })
    }
    // 是否過期
    const checkExpired = (data: GetQuest[]) => {
      const today = new Date().toString()
      data.map((item)=>{
        if(item.end_datetime != null){
          const endDateTime = new Date(item.end_datetime).toString()
          item.expired = Date.parse(endDateTime).valueOf() < Date.parse(today).valueOf();
        }else{
          item.expired = false
        }
      })
    }
    // 計算剩餘可承接任務
    const checkRemaining = (data: GetQuest[], type: number) => {
      data.filter((item)=>{
        return item.received == false && item.expired == false
      })
      switch (type) {
        case 1:
          state.remainingCoin = data.filter((item)=>{
            return item.received == false && item.expired == false
          }).length
          break
        case 2:
          state.remainingMoney = data.filter((item)=>{
            return item.received == false && item.expired == false
          }).length
          break
      }
    }

    onMounted(async ()=>{
      await getMission(1)  //coin
      await getMission(2)  // money

      // 任務是否承接過
      await checkReceived(state.earnCoinAll)
      await checkReceived(state.earnMoney)

      // 任務是否過期
      await checkExpired(state.earnCoinAll)
      await checkExpired(state.earnMoney)

      // 計算剩餘可承接任務
      await checkRemaining(state.earnCoinAll, 1)
      await checkRemaining(state.earnMoney, 2)


    })

    const onClickTab = () => {
      const bigArr = state.earnCoinAll
      console.log("tabActive", state.tabActive)
      switch (state.tabActive){
        case 0:
          state.earnCoin = bigArr.filter((quest)=>{
            return quest.action_type == 1
          })
          break
        case 1:
          state.earnCoin = bigArr.filter((quest)=>{
            return quest.action_type == 2
          })
          break
        case 2:
          state.earnCoin = bigArr.filter((quest)=>{
            return quest.action_type == 3
          })
          break
        case 3:
          state.earnCoin = bigArr.filter((quest)=>{
            return quest.action_type == 4
          })
          break
      }
    }




    return{
      ...toRefs(state),
      MissionStatus,
      onClickTab
    }
  }
});
</script>

<style lang="scss" scoped>
.titleLine{
  @apply flex justify-between items-center my-4;
  .title{
    @apply text-light text-xl font-semibold;
  }
  .remaining{
    @apply text-sm text-white opacity-50;
  }
}
::v-deep(){
  .van-tabs{
    &__wrap{
      height: 60px;
    }
    &__nav{
      &--complete{
        padding-left: 0;
      }
      &--line {
        height: 40px;
        @apply py-2;
      }
    }
  }
  .van-tab{
    border: solid 1px #bfbfda;
    border-radius: 100px;
    @apply mx-2 px-2 py-1;

    &--active{
      @apply text-primary-dark bg-tertiary border-none;
    }
    &__text{
      width: max-content;
    }
  }

}


</style>
