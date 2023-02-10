<template lang="pug">
SubLayout(
  :pageTitle="$txt.PT_WithdrawMoney"
)
  van-field(
    v-model="model.state.amount.value"
    rows="1"
    :label="model.state.amount.label"
    :placeholder="model.state.amount.placeholder"
    autocomplete="new-password"
    :border="false"
    @input="()=>model.notifyOnInput(model.state.amount.dataKey)"
  )
  .text-primary-grey.text-sm.mt-1 {{$txt.amountLimit + numeralHelper.asFloat(payOutBalance,2)}}

  SecretField(
    v-model="model.state.fund_password.value"
    rows="1"
    :label="model.state.fund_password.label"
    :placeholder="model.state.fund_password.placeholder"
    autocomplete="new-password"
    @input="()=>model.notifyOnInput(model.state.fund_password.dataKey)"
  )
    template(#label="data")
      section.inline-flex.justify-between.w-full
        span {{$txt.fund_password}}

  .wallet
    .wallet-title Wallet
    span(v-for="bankAccount in defaultAccount")
      WalletCard(
        :moreBtn="false"
        :defaultBank="bankAccount.is_default"
        :walletID="bankAccount.id"
        :bank_name="bankAccount.bank_name"
        :account_number="bankAccount.account_number")
    .selectBank(@click="selectBankAccountDialog= true") Select other account

  .fab.fab__bottom
    PrimBt(
      type="default"
      :disabled="!canSubmit"
      @click="model.submit"
    ) Submit

van-dialog(
  v-model:show="selectBankAccountDialog"
  :showConfirmButton="false"
  :showCancelButton="false"
  :closeOnClickOverlay="true"
  @close="resetDefaultID"
  className="bg-bg text-light"
)
  .p-6
    .dialog-header
      SvgIcon.closeBtn(name="close" :size="20" @click="selectBankAccountDialog = false")
      .title Wallet
    .dialog-body
      span(v-for="bankAccount in BankAccountList")
        .branding-card.branding-card--dark.p-4.mb-4(
          @click="selectBank(bankAccount.id)"
          :class="{'active' : bankAccount.id === selectID}")
          .bank-name
            p {{ bankAccount.bank_name }}
            .text-tertiary.text-sm(v-if="bankAccount.is_default") Default
          .bank-number
            .text-text {{ bankAccount.account_number }}



      van-button(block @click="doSubmit").mt-4.btn-tertiary Submit





</template>

<script lang="ts">
import { defineComponent } from "vue";
import SubLayout from "~/layout/SubLayout.vue";
import PrimBt from "~/components/PrimBt.vue";
import {computed, onMounted, reactive, toRefs} from "~/appCommon/base/vueTypes";
import {ApplyWithdrawModel} from "~/store/forms/userForms";
import SecretField from "~/components/SecretField.vue";
import WalletCard from "~/views/user/Wallet/WalletCard.vue";
import BaseApi from "~/services/apiService";
import {GetAccount} from "~/types/apiTypes";
import {Toast} from "vant";
import {facade} from "~/types/facadeTypes";
import RouterNames from "~/router/name";
import {numeralHelper} from "~/utils/numericHelper";

export default defineComponent({
  name: "WithdrawMoney",
  components:{
    SubLayout,
    PrimBt,
    SecretField,
    WalletCard
  },

  setup(){

    // form
    const model = new ApplyWithdrawModel({
      onSubmit(ok, model){
        console.log('onSubmit:');
        if (ok){
          Toast.success("success")
          facade.router.push({
            name: RouterNames.Withdraw
          })
        }
        return true;
      },
      onCatchSubmit(e){
        Toast.fail(e.data.error_msg)
      },
      onCancel(){
        model.resetState();
      }
    });
    const canSubmit = computed(()=>{
      return model.canSubmit.value;
    });
    console.log("model:", model);


    const state = reactive({
      BankAccountList : [] as GetAccount[],  // 整包 for dialog
      defaultAccount: [] as GetAccount[], //  單筆 for 外層顯示
      selectBankAccountDialog: false,  // 選擇銀行帳戶 dialog 開關
      selectID: 0, // 被選中的 id
      borderActive: false, // 是否增加 className active
      payOutBalance: "", // amount 的上限
    })


    const getBankAccount = async () => {
      const result = await BaseApi.getBankAccount({})
      console.log("result", result)
      state.BankAccountList = result.data
    } // 取得所有銀行帳戶 for dialog

    const filterDefault = (data: any) => {
      state.defaultAccount = data.filter((acc: any)=>{
        return acc.is_default == true
      })
      model.state.account_id.value = state.defaultAccount[0].id
    } // 取得預設銀行帳戶 for 外層顯示

    const getBalance = async () => {
      const result = await BaseApi.GetBalance()
      console.log(result)
      state.payOutBalance = result.data.pay_out_balance
    } // 取得錢包可被扣款餘額

    onMounted(async ()=>{
      await getBankAccount()
      await filterDefault(state.BankAccountList)
      await getBalance()
    })

    const doSubmit = () => {
      console.log("state.selectID", state.selectID)
      state.selectBankAccountDialog = false
      model.state.account_id.value = state.selectID
      filterSelect(state.selectID)
    } // 紀錄被選擇的 bank account

    const filterSelect = async (id: number) => {
      const result = await BaseApi.getBankAccount({id: id})
      state.defaultAccount = result.data
    } // 改變外層顯示的 bank account

    const selectBank = (id: number) => {
      state.selectID = id
    } // 增加 className active

    const resetDefaultID = () => {
      state.selectID = 0
    } // 清除 dialog 選項 不要有 border

    return {
      ...toRefs(state),
      model,
      canSubmit,
      doSubmit,
      selectBank,
      resetDefaultID,
      numeralHelper
    }
  }

});
</script>

<style lang="scss" scoped>
.wallet{
  @apply mt-6;

  &-title{
    @apply text-white text-base mb-2;
  }
  .selectBank{
    @apply flex justify-end;
    @apply text-base text-tertiary-light font-bold;
    @apply cursor-pointer;
  }

}
.fab__bottom{
  @apply flex justify-center flex-row;
  .van-button {
    width: calc(100% - 2rem);
  }
}
.dialog{
  &-header {
    @apply relative mb-6 text-xl font-medium;
    .closeBtn {
      @apply absolute;
      right: 0;
      top: 0;
    }
  }
}
.bank-name{
  @apply flex items-center justify-between mb-1;
  p{
    @apply text-white text-base;
    width: 70%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

}
.bank-number{
  @apply flex items-center justify-between mt-1 text-xs;
  ::v-deep(){
    .van-button{
      &__text{
        @apply text-white;
      }
    }
  }
}
.active{
  @apply border-2 border-tertiary;
}
</style>
