<template lang="pug">
SubLayout(
  :pageTitle="$txt.PT_SignInForgot"
)
  span.text {{$txt.enterYourPhoneNumber}}
  van-field(
    v-model="model.state.phone_number.value"
    ref="vantField"
    rows="1"
    :label="model.state.phone_number.label"
    :placeholder="model.state.phone_number.placeholder"
    autocomplete="new-password"
    :border="false"
    @input="(e)=>onTelInput(model.state.phone_number.value)"
  )

  .fab.fab__bottom
    PrimBt(
      type="default"
      :disabled="!canSubmit"
      @click="onGetVerificationCode"
    ) {{$txt.getVerificationCode}}

</template>

<script lang="ts">
import { defineComponent } from "vue";
import SubLayout from "~/layout/SubLayout.vue";
import PrimBt from "~/components/PrimBt.vue";
import {SignInForgotPwdModel} from "~/store/forms/loginForms";
import {computed, onMounted, ref} from "~/appCommon/base/vueTypes";
import {Field} from "vant";
import RouterNames from "~/router/name";
import {PhoneFieldMixin} from "~/store/mixins/phone";


export default defineComponent({
  name: "SignInForgot",
  components:{
    SubLayout,
    PrimBt
  },

  setup(props){
    const model = new SignInForgotPwdModel({
      onCancel(){
        model.resetState();
      }
    });
    const vantField = ref<typeof Field>();
    const mixin = new PhoneFieldMixin(model);

    const onTelInput = mixin.onTelInput.bind(mixin);
    const canSubmit = mixin.canSubmit;

    const onGetVerificationCode = ()=>
        mixin.onGetVerificationCode(RouterNames.SignIn_OTP);

    console.log("model:", model);
    onMounted(async()=>{
      await mixin.mount(vantField);
    });

    return {
      model,
      vantField,
      onTelInput,
      canSubmit,
      onGetVerificationCode
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
