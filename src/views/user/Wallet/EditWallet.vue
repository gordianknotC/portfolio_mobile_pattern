<template lang="pug">
SubLayout(
  :pageTitle="$txt.PT_EditBankAccount"
  :backRouter="backToWallet"
)
  van-field(
    v-model="model.state.full_name.value"
    :label="$txt.full_name"
    :placeholder="model.state.full_name.placeholder"
    autocomplete="new-password"
    rows="1"
    :border="false"
    @input="()=>model.notifyOnInput(model.state.full_name.dataKey)"
  )

  van-field(
    v-model="model.state.bank_name.value"
    :label="$txt.bank_name"
    :placeholder="model.state.bank_name.placeholder"
    autocomplete="new-password"
    rows="1"
    :border="false"
    @input="()=>model.notifyOnInput(model.state.bank_name.dataKey)"
  )

  van-field(
    v-model="model.state.account_number.value"
    :label="$txt.account_number"
    :placeholder="model.state.account_number.placeholder"
    autocomplete="new-password"
    rows="1"
    :border="false"
    @input="()=>model.notifyOnInput(model.state.account_number.dataKey)"
  )


  van-field(
    v-model="model.state.account_name.value"
    :label="$txt.account_name"
    :placeholder="model.state.account_name.placeholder"
    autocomplete="new-password"
    rows="1"
    :border="false"
    @input="()=>model.notifyOnInput(model.state.account_name.dataKey)"
  )

  van-field(
    v-model="model.state.ifsc_code.value"
    :label="$txt.ifsc_code"
    :placeholder="model.state.ifsc_code.placeholder"
    autocomplete="new-password"
    rows="1"
    :border="false"
    @input="()=>model.notifyOnInput(model.state.ifsc_code.dataKey)"
  )

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

  .checkDefault
    van-checkbox(
      v-model="model.state.is_default.value"
      shape="square"
      @change="()=>model.notifyOnInput(model.state.is_default.dataKey)"
      ) Set as default account


  .fab.fab__bottom
    PrimBt.ml-4(
      type="default"
      :disabled="!canSubmit"
      @click="model.submit"
    ) {{$txt.save}}

</template>

<script lang="ts">
import { defineComponent } from "vue";
import SubLayout from "~/layout/SubLayout.vue";
import PrimBt from "~/components/PrimBt.vue";
import SecBtLight from "~/components/SecBtLight.vue";
import SecretField from "~/components/SecretField.vue";
import {EditBankAccountModel} from "~/store/forms/userForms";
import {computed, onMounted} from "~/appCommon/base/vueTypes";
import BaseApi from "~/services/apiService";
import {facade} from "~/types/facadeTypes";
import RouterNames from "~/router/name";
import {Toast} from "vant";

export default defineComponent({
  name: "EditWallet",
  components:{
    SubLayout,
    PrimBt,
    SecBtLight,
    SecretField
  },
  props: {
    account_id: {
      type: Number
    }
  },
  setup(props){
    const model = new EditBankAccountModel({
      onSubmit(ok, model){
        console.log('onSubmit:');
        if (ok){
          Toast.success("success")
          facade.router.push({
            name: RouterNames.Wallet
          })
        }
        return true;
      },
      onCancel(){
        model.resetState();
      }
    });
    const canSubmit = computed(()=>{
      return model.canSubmit.value;
    });
    console.log("model:", model);

    console.log("account_id", props.account_id)

    const getAccount =  async () => {
      const account_id = props.account_id
      const result = await BaseApi.getBankAccount({id: account_id})
      console.log("result", result)
      const account = result.data
      model.state.is_default.value = account[0].is_default
      model.state.full_name.value = account[0].full_name
      model.state.bank_name.value = account[0].bank_name
      model.state.account_name.value = account[0].account_name
      model.state.account_number.value = account[0].account_number
      model.state.ifsc_code.value = account[0].ifsc_code
      model.state.account_id.value = account[0].id
    }
    onMounted(()=>{
      getAccount()
    })
    const backToWallet = () => {
      facade.router.push({
        name: RouterNames.Wallet
      })
    }

    return {
      model,
      canSubmit,
      backToWallet
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

.checkDefault {
  @apply mt-6;
  ::v-deep(){
    .van-checkbox{
      &__icon{
        .van-icon{
          @apply rounded;
        }
      }
      &__label{
        @apply text-primary-grey;
      }

    }
  }

}
</style>
