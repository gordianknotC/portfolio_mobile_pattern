<template lang="pug">
SubLayout(
  :pageTitle="$txt.PT_SignInUpdatePWD"
)
  van-field(
    v-model="model.state.username.value"
    rows="1"
    :error="model.state.username.hasError"
    :error-message="model.state.username.fieldError"
    :label="model.state.username.label"
    :placeholder="model.state.username.placeholder"
    autocomplete="new-password"
    :border="false"
    @input="()=>model.notifyOnInput(model.state.username.dataKey)"
  )

  SecretField(
    v-model="model.state.password.value"
    rows="1"
    :error="model.state.password.hasError"
    :error-message="model.state.password.fieldError"
    :label="model.state.password.label"
    :placeholder="model.state.password.placeholder"
    autocomplete="new-password"
    @input="()=>model.notifyOnInput(model.state.password.dataKey)"
  )
    template(#label="data")
      section.inline-flex.justify-between.w-full
        span {{$txt.password}}

  SecretField(
    v-model="model.state.confirm_password.value"
    rows="1"
    :error="model.state.confirm_password.hasError"
    :error-message="model.state.confirm_password.fieldError"
    :label="model.state.confirm_password.label"
    :placeholder="model.state.confirm_password.placeholder"
    autocomplete="new-password"
    @input="()=>model.notifyOnInput(model.state.confirm_password.dataKey)"
  )
    template(#label="data")
      section.inline-flex.justify-between.w-full
        span {{$txt.confirm_password}}

  .fab.fab__bottom
    PrimBt(
      type="default"
      :disabled="!canSubmit"
      @click="model.submit"
    ) {{$txt.resetPassword}}

</template>

<script lang="ts">
import { defineComponent } from "vue";
import SubLayout from "~/layout/SubLayout.vue";
import PrimBt from "~/components/PrimBt.vue";
import {SignInUpdatePwdModel, SignUpRegisterModel} from "~/store/forms/loginForms";
import {computed} from "~/appCommon/base/vueTypes";
import SecretField from "~/components/SecretField.vue";
import {facade} from "~/types/facadeTypes";
import RouterNames from "~/router/name";

export default defineComponent({
  name: "SignUpRegister",
  components:{
    SubLayout,
    PrimBt,
    SecretField,
  },
  setup(props){
    const model = new SignUpRegisterModel({
      onSubmit(ok, model){
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
