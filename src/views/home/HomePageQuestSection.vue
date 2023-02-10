<template lang="pug">
section.rewards
  header.section-header
    h3 Claim your rewards
    router-link.more(:to="{ name: RouterNames.Quest}") MORE
  .card
    h4.card__title Earn money
    .rewards-item(v-for="coin in threeCoin")
      img.rewards-item__pic(:src="require('@/assets/img/game.png')" alt="Game")
      .text-base {{ coin.title }}
      .flex.flex-col.justify-center.items-center
        .flex.justify-center.items-center
          span.amount {{ numeralHelper.asFloat(coin.worth, 2) }}
          svg-icon(name="cash" :size="24")
        p.expired(
          @click="goReceiveDetail(coin.id, coin.reward_type)"
          v-if="coin.received") Receive
        van-button.btn-tertiary.mt-1(
          v-else
          @click="goDetail(coin.id, coin.reward_type)"
          size="mini"
        ) Receive


  .card
    h4.card__title Earn coin
    .rewards-item(v-for="money in threeMoney")
      img.rewards-item__pic(:src="require('@/assets/img/rules.png')" alt="Rules")
      span {{ money.title }}
      .flex.flex-col.justify-center.items.center
        .flex.justify-center.items-center
          span.amount {{ numeralHelper.asFloat(money.worth, 2) }}
          svg-icon(name="coin" :size="24")
        p.expired(
          @click="goReceiveDetail(money.id, money.reward_type)"
          v-if="money.received") Receive
        van-button.btn-tertiary.mt-1(
          v-else
          @click="goDetail(money.id, money.reward_type)"
          size="mini"
        ) Receive


</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import MainLayout from "~/layout/MainLayout/MainLayout.vue";
import { toRefs } from "~/appCommon/base/vueTypes";
import BaseApi from "~/services/apiService";
import {GetGame, GetQuest} from "~/types/apiTypes";
import RouterNames from "~/router/name";
import {numeralHelper} from "~/utils/numericHelper";
import { is } from "~/appCommon/extendBase/impls/utils/typeInferernce";
import {facade} from "~/types/facadeTypes";

export default defineComponent({
  name: "HomePageQuestSection",
  components: {

  },
  setup() {
    const state = reactive({
      earnMoney: [] as GetQuest[],
      earnCoin: [] as GetQuest[],


      notExpireCoin : [] as GetQuest[],
      notExpireMoney : [] as GetQuest[],

      threeCoin: [] as GetQuest[],
      threeMoney: [] as GetQuest[],
    });
    
    // 取得所有任務 分 coin, money
    const getMission = async (type: number) => {
      if(type == 1){  //coin
        console.log("coin")
        const coinList =  await BaseApi.getQuest({reward_type: type})
        console.log("coinList", coinList)
        state.earnCoin = coinList.data
      }
      if(type == 2){  // money
        console.log("money")
        const moneyList =  await BaseApi.getQuest({reward_type: type})
        console.log("moneyList", moneyList)
        state.earnMoney = moneyList.data
      }
    }
    
    // 取得前三筆
    const filterThreeMission = (data: GetQuest[], type: number) => {
      if(type == 1){
        state.notExpireCoin = data.filter(item => {
          return item.expired == false
        })
        for(let i = 0; i < 3; i++){
          if(is.not.undefined(state.notExpireCoin[i])){
            state.threeCoin.push(state.notExpireCoin[i])
          }
        }
      }
      if(type == 2){
        state.notExpireMoney = data.filter(item=>{
          return item.expired == false
        })
        for(let i = 0; i < 3; i++){
          if(is.not.undefined(state.notExpireMoney[i])){
            state.threeMoney.push(state.notExpireMoney[i])
          }
        }
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



    onMounted(async () => {
      await getMission(1)  //coin
      await getMission(2)  // money

      // 任務是否承接過
      await checkReceived(state.earnCoin)
      await checkReceived(state.earnMoney)

      // 任務是否過期
      await checkExpired(state.earnCoin)
      await checkExpired(state.earnMoney)

      // 取得前三筆給首頁
      await filterThreeMission(state.earnCoin, 1)
      await filterThreeMission(state.earnMoney, 2)

    });


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
    return {
      ...toRefs(state),
      RouterNames,
      numeralHelper,
      goReceiveDetail,
      goDetail
    };
  }
});
</script>

<style lang="scss" scoped>
.section-header {
  @apply flex justify-between items-center mb-4;
  h3 {
    @apply text-2xl text-light;
  }
  .more {
    @apply text-tertiary-light;
  }
}
section.rewards {
  .card {
    @apply rounded-md bg-gradient-to-b from-primary to-primary-med_light border border-solid border-primary-light p-6 mb-6;

    &__title {
      @apply text-light text-lg mb-4;
    }
  }
}

.rewards-item {
  @apply grid gap-4 items-center text-light;
  grid-template-columns: 60px 1fr auto;

  .amount {
    @apply text-2xl font-semibold mr-1;
  }

  &:not(:last-of-type) {
    @apply mb-4;
  }
  .expired{
    @apply text-center text-base font-medium opacity-50 mt-1;
  }
}
</style>
