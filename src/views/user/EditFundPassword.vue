<template lang="pug">
SubLayout(
  :pageTitle="$txt.PT_EditFundPassword"
)
  SecretField(
    v-model="model.state.old_fund_password.value"
    rows="1"
    :error="model.state.old_fund_password.hasError"
    :error-message="model.state.old_fund_password.fieldError"
    :label="model.state.old_fund_password.label"
    :placeholder="model.state.old_fund_password.placeholder"
    autocomplete="new-password"
    @input="()=>model.notifyOnInput(model.state.old_fund_password.dataKey)"
  )
    template(#label="data")
      section.inline-flex.justify-between.w-full
        span {{$txt.old_fund_password}}

  SecretField(
    v-model="model.state.new_fund_password.value"
    rows="1"
    :error="model.state.new_fund_password.hasError"
    :error-message="model.state.new_fund_password.fieldError"
    :label="model.state.new_fund_password.label"
    :placeholder="model.state.new_fund_password.placeholder"
    autocomplete="new-password"
    @input="()=>model.notifyOnInput(model.state.new_fund_password.dataKey)"
  )
    template(#label="data")
      section.inline-flex.justify-between.w-full
        span {{$txt.new_fund_password}}

  SecretField(
    v-model="model.state.confirm_new_fund_password.value"
    rows="1"
    :error="model.state.confirm_new_fund_password.hasError"
    :error-message="model.state.confirm_new_fund_password.fieldError"
    :label="model.state.confirm_new_fund_password.label"
    :placeholder="model.state.confirm_new_fund_password.placeholder"
    autocomplete="new-password"
    @input="()=>model.notifyOnInput(model.state.confirm_new_fund_password.dataKey)"
  )
    template(#label="data")
      section.inline-flex.justify-between.w-full
        span {{$txt.confirm_new_fund_password}}


  .fab.fab__bottom
    SecBtLight(
      type="default"
      @click="model.cancel"
    ) {{$txt.cancel}}
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
import {computed} from "~/appCommon/base/vueTypes";
import SecretField from "~/components/SecretField.vue";
import {EditFundPassword} from "~/store/forms/userForms";
import SecBtLight from "~/components/SecBtLight.vue";

export default defineComponent({
  name: "EditFundPassword",
  components:{
    SubLayout,
    PrimBt,
    SecBtLight,
    SecretField
  },
  setup(props){
    const model = new EditFundPassword({
      onAfterSubmit(){
        model.resetState({
          old_fund_password: "",
          new_fund_password: "",
          confirm_new_fund_password: "",
        });
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
  @apply flex justify-center flex-row ;
  .van-button {
    width: 100%;
    @apply mx-4;
  }
}
</style>
