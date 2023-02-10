<template lang="pug">
SubLayout(
  pageTitle="Wallet"
  :backRouter="backToUser"
)
  van-loading.flex.justify-center.p-20(type="spinner" size="64" v-if="isLoading")
  span(v-if="isLoading === false")
    span(v-for="bankAccount in BankAccountList")
      WalletCard(
        :walletID="bankAccount.id"
        :bank_name="bankAccount.bank_name"
        :account_number="bankAccount.account_number"
        :full_name="bankAccount.full_name"
        :ifsc_code="bankAccount.ifsc_code"
        :defaultBank="bankAccount.is_default"
        @success="successDel")
    .fab.fab__bottom
      PrimBt(
        type="default"
        @click="goAddBanAccountUrl"
      ) Add bank account


</template>

<script lang="ts">
import { defineComponent } from "vue";
import SubLayout from "~/layout/SubLayout.vue";
import WalletCard from "~/views/user/Wallet/WalletCard.vue";
import PrimBt from "~/components/PrimBt.vue";
import RouterNames from "~/router/name";
import {onMounted, reactive, toRefs} from "~/appCommon/base/vueTypes";
import {GetAccount} from "~/types/apiTypes";
import BaseApi from "~/services/apiService";
import {facade} from "~/types/facadeTypes";

export default defineComponent({
  name: "Wallet",
  components: {
    SubLayout,
    WalletCard,
    PrimBt
  },
  setup(){
    const state = reactive({
      BankAccountList : [] as GetAccount[],
      isLoading: false
    })
    const goAddBanAccountUrl = () => {
      facade.router.push({ name: RouterNames.AddBankAccount })
    }
    const getBankAccount = async () => {
      state.isLoading = true
      const result = await BaseApi.getBankAccount({})
      console.log("result", result)
      state.BankAccountList = result.data
      state.isLoading = false
    }
    onMounted(()=>{
      getBankAccount()
    })
    const successDel = async () => {
      await getBankAccount()
    }
    const backToUser = () => {
      facade.router.push({
        name: RouterNames.User
      })
    }

    return {
      ...toRefs(state),
      goAddBanAccountUrl,
      successDel,
      backToUser
    }
  }
});
</script>

<style lang="scss" scoped>
.content {
  @apply text-white;
}
.fab__bottom{
  @apply flex justify-center flex-row;
  .van-button {
    width: calc(100% - 2rem);
  }
}
</style>
