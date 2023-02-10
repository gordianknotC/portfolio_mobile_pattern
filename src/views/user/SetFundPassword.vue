<template lang="pug">
SubLayout(
  :pageTitle="$txt.PT_SetFundPassword"
)
  SecretField(
    v-model="model.state.fund_password.value"
    rows="1"
    :error="model.state.fund_password.hasError"
    :error-message="model.state.fund_password.fieldError"
    :label="model.state.fund_password.label"
    :placeholder="model.state.fund_password.placeholder"
    autocomplete="new-password"
    @input="()=>model.notifyOnInput(model.state.fund_password.dataKey)"
  )
    template(#label="data")
      section.inline-flex.justify-between.w-full
        span {{$txt.fund_password}}

  SecretField(
    v-model="model.state.fund_password_confirm.value"
    rows="1"
    :error="model.state.fund_password_confirm.hasError"
    :error-message="model.state.fund_password_confirm.fieldError"
    :label="model.state.fund_password_confirm.label"
    :placeholder="model.state.fund_password_confirm.placeholder"
    autocomplete="new-password"
    @input="()=>model.notifyOnInput(model.state.fund_password_confirm.dataKey)"
  )
    template(#label="data")
      section.inline-flex.justify-between.w-full
        span {{$txt.confirm_fund_password}}


  .fab.fab__bottom
    SecBtLight(
      type="default"
      @click="model.cancel"
    ) {{$txt.cancel}}
    PrimBt.ml-4(
      type="default"
      @click="model.submit"
    ) {{$txt.save}}

</template>

<script lang="ts">
import { defineComponent } from "vue";
import SubLayout from "~/layout/SubLayout.vue";
import PrimBt from "~/components/PrimBt.vue";
import {computed} from "~/appCommon/base/vueTypes";
import SecretField from "~/components/SecretField.vue";
import {SetFundPassword} from "~/store/forms/userForms";
import SecBtLight from "~/components/SecBtLight.vue";
import {facade} from "~/types/facadeTypes";
import RouterNames from "~/router/name";

export default defineComponent({
  name: "SetFundPassword",
  components:{
    SubLayout,
    PrimBt,
    SecBtLight,
    SecretField
  },
  setup(props){
    const model = new SetFundPassword({
      onAfterSubmit(){
        // facade.appStore.notifySuccess("Successfully Reset!!")
        model.resetState()
        facade.router.push({
          name: RouterNames.Settings
        })
      },
      onCatchSubmit(e){
        facade.appStore.notifyError(e)
      },
      onCancel(){
        model.resetState();
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

.fab__bottom{
  @apply flex justify-center flex-row;
  .van-button {
    width: calc(100% - 2rem);
  }
}
</style>
