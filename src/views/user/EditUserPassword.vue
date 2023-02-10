<template lang="pug">
SubLayout(
  :pageTitle="$txt.PT_SignInUpdatePWD"
)
  SecretField(
    v-model="model.state.old_password.value"
    rows="1"
    :error="model.state.old_password.hasError"
    :error-message="model.state.old_password.fieldError"
    :label="model.state.old_password.label"
    :placeholder="model.state.old_password.placeholder"
    autocomplete="new-password"
    @input="()=>model.notifyOnInput(model.state.old_password.dataKey)"
  )
    template(#label="data")
      section.inline-flex.justify-between.w-full
        span {{$txt.old_password}}

  SecretField(
    v-model="model.state.new_password.value"
    rows="1"
    :error="model.state.new_password.hasError"
    :error-message="model.state.new_password.fieldError"
    :label="model.state.new_password.label"
    :placeholder="model.state.new_password.placeholder"
    autocomplete="new-password"
    @input="()=>model.notifyOnInput(model.state.new_password.dataKey)"
  )
    template(#label="data")
      section.inline-flex.justify-between.w-full
        span {{$txt.new_password}}

  SecretField(
    v-model="model.state.new_password_confirm.value"
    rows="1"
    :error="model.state.new_password_confirm.hasError"
    :error-message="model.state.new_password_confirm.fieldError"
    :label="model.state.new_password_confirm.label"
    :placeholder="model.state.new_password_confirm.placeholder"
    autocomplete="new-password"
    @input="()=>model.notifyOnInput(model.state.new_password_confirm.dataKey)"
  )
    template(#label="data")
      section.inline-flex.justify-between.w-full
        span {{$txt.new_password_confirm}}

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
import {SignInUpdatePwdModel} from "~/store/forms/loginForms";
import {computed} from "~/appCommon/base/vueTypes";
import SecretField from "~/components/SecretField.vue";
import {UserUpdatePassword} from "~/store/forms/userForms";

export default defineComponent({
  name: "EditPassword",
  components:{
    SubLayout,
    PrimBt,
    SecretField
  },
  setup(props){
    const model = new UserUpdatePassword({
      onAfterSubmit(){
        model.resetState({
          old_password: "",
          new_password: "",
          new_password_confirm: "",
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
  @apply flex justify-center flex-row;
  .van-button {
    width: calc(100% - 2rem);
  }
}
</style>
