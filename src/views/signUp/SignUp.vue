<template lang="pug">
section
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

  PrimBt(type="default" :disabled="!canSubmit" @click="onGetVerificationCode") {{$txt.getOTPNumber}}
  section.inline-flex.w-full.items-center.opacity-70.mt-5
    .flex-1.pr-4
      hr
    div.text-light or
    .flex-1.pl-4
      hr

  SecBtWhite(type="default") {{$txt.continueWithFB}}
    template(#icon)
      SvgIcon(name="FB" :size="24" color="white")

</template>

<script lang="ts">
import {computed, defineComponent, onMounted, reactive, ref, toRefs} from "~/appCommon/base/vueTypes";
import PrimBt from "~/components/PrimBt.vue";
import SecBtWhite from "~/components/SecBtWhite.vue";
import SvgIcon from "~/components/SvgIcon.vue";
import {SignInForgotPwdModel} from "~/store/forms/loginForms";
import {Field} from "vant";
import RouterNames from "~/router/name";
import {PhoneFieldMixin} from "~/store/mixins/phone";
import {watch} from "vue";

export default defineComponent({
  name: "SignUp",
  components:{
    PrimBt,
    SecBtWhite,
    SvgIcon,
  },
  setup() {
    const vantField = ref<typeof Field>();
    const model = new SignInForgotPwdModel({
      onCancel(){
        model.resetState();
      }
    });
    const mixin = new PhoneFieldMixin(model);
    const onTelInput = mixin.onTelInput.bind(mixin);
    const canSubmit = mixin.canSubmit;

    const onGetVerificationCode = ()=>
        mixin.onGetVerificationCode(RouterNames.SignUp_OTP);

    console.log("model:", model);
    onMounted(async()=>{
      await mixin.mount(vantField);
    });

    watch(()=>model.state.phone_number.value, ()=>{
      console.log('CHANGE:', model.state.phone_number.value);
    });

    return {
      model,
      vantField,
      onTelInput,
      canSubmit,
      onGetVerificationCode
    }
  }
})

</script>

<style lang="scss" scoped>
.brand{
  height: 6rem;
  &__heading{
    @apply text-center items-center inline-flex;
    @apply justify-around w-full h-full text-light;
    font-size: 1.6rem;
  }
}

.pageContainer{
  @apply px-6 py-4;
}

::v-deep(){
  .app-tabs-xl{
    &.van-tabs {
      .van-tab{
        @apply pr-4;
        font-size: 1.6rem;

        &__text{
          @apply p-0 m-0 font-normal;
          font-size: 1.6rem;
          height: 1.6rem;
          white-space: nowrap;
        }
      }

      .van-tabs__line{
        @apply bg-line-prim-active_link;
        width: 45%;
      }
    }
  }
}

</style>
