<template lang="pug">
SubLayout(
  pageTitle="Withdraw"
  :backRouter="backToUser"
)
  .branding-card.branding-card--dark.p-6
    .mb-4 My Balance
    .info
      svg-icon(name="cash" :size="28")
      .info__text ₹ {{ numeralHelper.asFloat(balance.pay_out_balance, 2) }}
  van-button.btn-tertiary.mt-4.mb-8(
    block
    @click="goMoneyUrl"
    ) Withdraw money
  .text-xl.mb-4 Withdraw record
  van-loading.flex.justify-center.p-20(type="spinner" size="64" v-if="isLoading")
  van-tabs(
    v-if="isLoading === false"
    color="#3acdec"
    background="#2a2a83"
    line-width="0"
    line-height="0"
    v-model:active="tabActive"
    sticky
    swipeable
    :ellipsis="false"
    @change="onClickTab")
    van-tab(v-for="tab in WithdrawTabs" :title="tab.text" :key="tab.id")
      .my-4.mx-2(v-for="withdraw in withdrawList")
        WithdrawCard(
          :moreBtn="false"
          :withdraw_dateTime="withdraw.create_datetime"
          :withdraw_status="withdraw.status"
          :withdraw_ID="withdraw.ticket_no"
          :withdraw_amount="withdraw.amount"
        )






</template>

<script lang="ts">
import { defineComponent } from "vue";
import SubLayout from "~/layout/SubLayout.vue";
import WithdrawCard from "~/views/user/Withdraw/WithdrawCard.vue";
import RouterNames from "~/router/name";
import {onMounted, reactive, toRefs} from "~/appCommon/base/vueTypes";
import {Balance, GetWithdraw, GetWithdrawPayload} from "~/types/apiTypes";
import BaseApi from "~/services/apiService";
import {DateExt} from "~/appCommon/base/addon";
import {numeralHelper} from "~/utils/numericHelper";
import {facade} from "~/types/facadeTypes";

export default defineComponent({
  name: "Withdraw",
  components: {
    SubLayout,
    WithdrawCard
  },
  setup(){
    const state = reactive({
      withdrawList: [] as GetWithdraw[],
      balance: {} as Balance,
      tabActive: 0,
      isLoading: false
    })
    const goMoneyUrl = () => {
      facade.router.push({
        name: RouterNames.WithdrawMoney
      })
    }
    const getWithdraw = async (payload: GetWithdrawPayload) =>{
      state.isLoading = true;
      const result = await BaseApi.getWithdraw(payload)
      state.withdrawList = result.data
      state.isLoading = false;
    }
    const getBalance = async () => {
      const result = await BaseApi.GetBalance()
      console.log(result)
      state.balance = result.data
    }

    onMounted(()=>{
      getWithdraw({start_date: "20200101"})
      getBalance()

    })

    const backToUser = () => {
      facade.router.push({
        name: RouterNames.User
      })
    }

    const WithdrawTabs = [
      {
        id: 1,
        text: "All"
      },
      {
        id: 2,
        text: "Today"
      },
      {
        id: 1,
        text: "Last 7 days"
      },
      {
        id: 1,
        text: "Last 30 days"
      },
    ]
    const onClickTab = () => {
      console.log("tabActive", state.tabActive)
      const format = "YYYYMMDD"
      const payload = {
        start_date: "",
        end_date: DateExt.TODAY
      }
      switch (state.tabActive){
        case 0:
          payload.start_date = "20200101"
          getWithdraw(payload)
          break
        case 1:
          payload.start_date = DateExt.TODAY
          getWithdraw(payload)
          break
        case 2:
          payload.start_date = DateExt.last7Day.format(format)
          getWithdraw(payload)
          break
        case 3:
          payload.start_date = DateExt.last30Day.format(format)
          getWithdraw(payload)
          break
      }
    }


    return {
      ...toRefs(state),
      goMoneyUrl,
      DateExt,
      numeralHelper,
      backToUser,
      WithdrawTabs,
      onClickTab
    }
  }
});
</script>

<style lang="scss" scoped>
.content {
  @apply text-white;
}
.info {
  min-width: 120px;
  @apply flex items-center bg-primary-med_dark rounded-xl p-1 border border-primary-light;
  &__text {
    @apply text-white ml-1;
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
        padding-top: 20px;
      }
    }
  }
  .van-tab{
    border: solid 1px #bfbfda;
    border-radius: 100px;
    @apply mx-2 px-2 py-1 mb-4;

    &--active{
      @apply text-primary-dark bg-tertiary border-none;
    }
    &__text{
      width: max-content;
    }
  }

}

</style>
