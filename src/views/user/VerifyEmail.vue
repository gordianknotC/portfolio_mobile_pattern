<template lang="pug">
SubLayout(
  :pageTitle="$txt.PT_VerifyEmail"
  :backRouter="backToUserSetting"
)
  span.text {{$txt.sendResetPasswordViaEmail}}
  van-field(
    v-model="model.state.email.value"
    :label="$txt.email"
    :placeholder="model.state.email.placeholder"
    autocomplete="new-password"
    rows="1"
    :border="false"
    @input="()=>model.notifyOnInput(model.state.email.dataKey)"
  )

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
import {computed} from "~/appCommon/base/vueTypes";
import SecretField from "~/components/SecretField.vue";
import {SetFundPassword, EditEmailModel} from "~/store/forms/userForms";
import SecBtLight from "~/components/SecBtLight.vue";
import {facade} from "~/types/facadeTypes";
import RouterNames from "~/router/name";

export default defineComponent({
  name: "VerifyEmail",
  components:{
    SubLayout,
    PrimBt,
    SecBtLight,
    SecretField
  },
  setup(props){
    const model = new EditEmailModel({
     onAfterSubmit(){
        facade.userStore.updateFromModel({
          email: model.state.email.value
        })
        facade.router.push({
          name: RouterNames.InformVerified,
        })
      },
      onCancel(){
        model.resetState();
      }
    });
    const canSubmit = computed(()=>{
      return model.canSubmit.value;
    });
    const backToUserSetting = () => {
      facade.userStore.updateFromModel({
        email: "",
        is_email_verified: false
      })
      facade.router.push({
        name: RouterNames.Settings
      })
    }
    console.log("model:", model);
    return {
      model,
      canSubmit,
      backToUserSetting
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
