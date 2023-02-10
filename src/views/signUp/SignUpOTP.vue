<template lang="pug">
SubLayout(
  :pageTitle="$txt.PT_SignUpOTP"
)
  span.van-field__label {{$txt.otpNumber}}
  .passwordContainer.relative
    van-password-input(
      :value="model.state.verification_code.value"
      :length="pwdLength"
      :gutter="8"
      :error-info="OTPFieldError"
      :focused="keyboardVisible"
      @focus="onFocus"
    )

    .van-field__label.absolute.bottom-0
      span.text-active.font-medium {{$txt.resendOTPNumber.format({seconds: counterText})}}



  section
    .fab.fab__decoration-text(v-if="hasCounterExceedMaxRetries")
      span {{exceedCounterText}}

    .fab.fab__bottom
      PrimBt(
        type="default"
        :disabled="!canSubmit"
        @click="onSubmitOTP"
      )
        span {{$txt.submit}} {{counterText}}

  van-number-keyboard(
    v-model="model.state.verification_code.value"
    :show="keyboardVisible"
    @blur="onBlur"
    @input="onInput"
    @delete="onDelete"
  )
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SubLayout from "~/layout/SubLayout.vue";
import {computed, onMounted, reactive, toRefs, watch} from "~/appCommon/base/vueTypes";
import {SignInOTPModel, SignUpOTPModel} from "~/store/forms/loginForms";
import {OTPMixin} from "~/store/mixins/phone";
import RouterNames from "~/router/name";
import PrimBt from "~/components/PrimBt.vue";
import {facade} from "~/types/facadeTypes";
import {is} from "~/appCommon/extendBase/impls/utils/typeInferernce";
import {AxiosResponse} from "axios";
import {onBeforeRouteLeave} from "vue-router";

export default defineComponent({
  name: "SignInOTP",
  components:{
    SubLayout,
    PrimBt
  },
  setup(props){
    const pwdLength = 6;
    const model = new SignUpOTPModel({
      onCancel(){
        model.resetState();
      }
    });
    const otpMixin = new OTPMixin(model, pwdLength);
    const onFocus = otpMixin.onFocus.bind(otpMixin);
    const onBlur = otpMixin.onBlur.bind(otpMixin);
    const onSubmitOTP = ()=> otpMixin.onSubmit({
      routeName: RouterNames.SignUp_Register,
    });

    onMounted(async ()=>{
      await otpMixin.mount(()=>facade.apiService.generateOtp({
        phone_number: facade.paramStore.state.phone_number
      }));
      console.log("OtpMixin:", otpMixin);
    });

    onBeforeRouteLeave((to, from, next)=>otpMixin.onBeforeRouteLeave(to, from ,next))

    return {
      pwdLength,
      keyboardVisible: otpMixin.keyboardVisible,
      OTPFieldError: otpMixin.OTPFieldError,
      model,
      onInput(val: Event){
        console.log(model.state.verification_code.value, val);
      },
      onDelete(){
        console.log(model.state.verification_code.value);
      },
      onFocus,
      onBlur,
      canSubmit: computed(()=>{
        const exceed = otpMixin.counter.hasExceedMaxRetries.value;
        // const enabled = otpMixin.counter.counterEnabled.value;
        const noFieldError = otpMixin.canSubmit.value;
        if (exceed){
          return false;
        }
        return noFieldError;
      }),
      onSubmitOTP,
      otpMixin,
      hasCounterExceedMaxRetries: otpMixin.counter.hasExceedMaxRetries,
      counterText: otpMixin.counterText,
      exceedCounterText: otpMixin.exceedCounterText
    }
  }

});
</script>

<style lang="scss" scoped>
.passwordContainer{
  height: 5.3rem;
}
.fab__bottom{
  @apply flex justify-center flex-row;
  .van-button {
    width: calc(100% - 2rem);
  }
}

.fab__decoration-text{
  @apply flex justify-center flex-row text;
  bottom: 5rem;
  width: 100%;
  left: 0;
}
</style>
