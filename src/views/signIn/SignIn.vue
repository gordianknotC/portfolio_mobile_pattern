<template lang="pug">
section
  van-field(
    v-model="model.state.username.value"
    :label="$txt.username"
    :placeholder="model.state.username.placeholder"
    autocomplete="new-password"
    rows="1"
    :border="false"
    @input="()=>model.notifyOnInput(model.state.username.dataKey)"
  )

  SecretField(
    v-model="model.state.password.value"
    rows="1"
    :label="model.state.password.label"
    :placeholder="model.state.password.placeholder"
    autocomplete="new-password"
    @input="()=>model.notifyOnInput(model.state.password.dataKey)"
  )
    template(#label="data")
      section.inline-flex.justify-between.w-full
        span {{$txt.password}}
        router-link(:to="forgotPasswordLocation")
          span.text-active.font-medium {{$txt.forgotPassword}}


  PrimBt(type="default" :disabled="!model.canSubmit" @click="model.submit") {{$txt.login}}
  section.inline-flex.w-full.items-center.opacity-70.mt-5
    .flex-1.pr-4
      hr
    div.text-light or
    .flex-1.pl-4
      hr

  SecBtWhite(
    @click="thirdPartyLogin"
    type="default") {{$txt.continueWithFB}}
    template(#icon)
      SvgIcon(name="FB" :size="24" color="white")

</template>

<script lang="ts">
import {computed, defineComponent} from "~/appCommon/base/vueTypes";
import PrimBt from "~/components/PrimBt.vue";
import SecBtWhite from "~/components/SecBtWhite.vue";
import SvgIcon from "~/components/SvgIcon.vue";
import SecretField from "~/components/SecretField.vue";
import RouterNames from "~/router/name";
import {SignInModel} from "~/store/forms/loginForms";
import {facade} from "~/types/facadeTypes";

export default defineComponent({
  name: "SignIn",
  components:{
    PrimBt,
    SecBtWhite,
    SvgIcon,
    SecretField
  },
  setup() {
    const model = new SignInModel({
      onSubmit(ok, model){
        console.log('onSubmit:');
        if (ok){
          facade.router.push({
            name: RouterNames.Home
          })
        }
        return true;
      },
      onCancel(){
        model.resetState();
      }
    });
    return {
      model,
      forgotPasswordLocation:{
        name: RouterNames.SignIn_ForgotPwd
      },
      onUserNameInput(){

      },
      onPasswordInput(){

      },
      thirdPartyLogin(){
        facade.userStore
      }
    }
  }
}
)
</script>

<style lang="scss" scoped>



</style>
