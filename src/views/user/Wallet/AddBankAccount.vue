<template lang="pug">
SubLayout(
  :pageTitle="$txt.PT_AddBankAccount"
)
  van-field(
    v-model="model.state.full_name.value"
    :label="$txt.full_name"
    :placeholder="model.state.full_name.placeholder"
    :error="model.state.full_name.hasError"
    :error-message="model.state.full_name.fieldError"
    autocomplete="new-password"
    rows="1"
    :border="false"
    @input="()=>model.notifyOnInput(model.state.full_name.dataKey)"
  )

  van-field(
    v-model="model.state.bank_name.value"
    :label="$txt.bank_name"
    :placeholder="model.state.bank_name.placeholder"
    :error="model.state.bank_name.hasError"
    :error-message="model.state.bank_name.fieldError"
    autocomplete="new-password"
    rows="1"
    :border="false"
    @input="()=>model.notifyOnInput(model.state.bank_name.dataKey)"
  )

  van-field(
    v-model="model.state.account_number.value"
    :label="$txt.account_number"
    :placeholder="model.state.account_number.placeholder"
    :error="model.state.account_number.hasError"
    :error-message="model.state.account_number.fieldError"
    autocomplete="new-password"
    rows="1"
    :border="false"
    @input="()=>model.notifyOnInput(model.state.account_number.dataKey)"
  )

  van-field(
    v-model="model.state.confirm_account_number.value"
    :label="$txt.confirm_account_number"
    :placeholder="model.state.confirm_account_number.placeholder"
    :error="model.state.confirm_account_number.hasError"
    :error-message="model.state.confirm_account_number.fieldError"
    autocomplete="new-password"
    rows="1"
    :border="false"
    @input="()=>model.notifyOnInput(model.state.confirm_account_number.dataKey)"
  )

  van-field(
    v-model="model.state.account_name.value"
    :label="$txt.account_name"
    :placeholder="model.state.account_name.placeholder"
    :error="model.state.account_name.hasError"
    :error-message="model.state.account_name.fieldError"
    autocomplete="new-password"
    rows="1"
    :border="false"
    @input="()=>model.notifyOnInput(model.state.account_name.dataKey)"
  )

  van-field(
    v-model="model.state.ifsc_code.value"
    :label="$txt.ifsc_code"
    :placeholder="model.state.ifsc_code.placeholder"
    :error="model.state.ifsc_code.hasError"
    :error-message="model.state.ifsc_code.fieldError"
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
    :error="model.state.fund_password.hasError"
    :error-message="model.state.fund_password.fieldError"
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
import {AddBankAccountModel} from "~/store/forms/userForms";
import {computed} from "~/appCommon/base/vueTypes";
import {facade} from "~/types/facadeTypes";
import { is } from "~/appCommon/extendBase/impls/utils/typeInferernce";
import {EErrorCode} from "~/types/errorTypes";

export default defineComponent({
  name: "AddBankAccount",
  components:{
    SubLayout,
    PrimBt,
    SecBtLight,
    SecretField
  },
  setup(props){
    const model = new AddBankAccountModel({
      onAfterSubmit(){
        facade.appStore.notifySuccess("Bank Account Successfully Added!");
        facade.router.back();
      },
      onCancel(){
        model.resetState();
      },
      onCatchSubmit(e){
        if (is.axiosResponse(e)){
          if (e.data.error_key === EErrorCode.PASSWORD_IS_WRONG){
            model.state.fund_password.fieldError = "wrong password";
          }else if (e.data.error_key === EErrorCode.FUND_PASSWORD_IS_NOT_SET){
          }
        }
        console.log("onCatchSubmit: ", e)
        facade.appStore.notifyError(e);
      }
    });
    const canSubmit = computed(()=>{
      return model.canSubmit.value;
    });
    console.log("model:", model);
    return {
      model,
      canSubmit,
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
