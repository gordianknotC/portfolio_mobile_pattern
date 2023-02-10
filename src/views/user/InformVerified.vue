<template lang="pug">
SubLayout(
  :pageTitle="$txt.PT_BackToSetting"
)
  section.text-center.mt-10
    h3.text-2xl.my-4 Thank you for applying
    span.text.mt-4 A verification e-mail has been send to your e-mail account.
    br
    span.text.mt-4 Please check your inbox to verify.

  .infoBlock.mt-12
    span.text-base Didn't receive verification e-mail?
    br
    span.text-tertiary-light.mt-4(@click="model.submit") RESEND VERIFICATION EMAIL
    br
    span.text-tertiary-light.mt-4(@click="backChangeEmail") CHANGE EMAIL
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SubLayout from "~/layout/SubLayout.vue";
import PrimBt from "~/components/PrimBt.vue";
import {computed, onMounted} from "~/appCommon/base/vueTypes";
import SecretField from "~/components/SecretField.vue";
import { EditEmailModel } from "~/store/forms/userForms";
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
      onBeforeSubmit(){
        model.state.email.value = facade.userStore.state.email!
      },
      onCancel(){
        model.resetState();
      }
    });
    const canSubmit = computed(()=>{
      return model.canSubmit.value;
    });

    const backChangeEmail = () => {
      facade.router.push({
        name: RouterNames.VerifyEmail
      })
    }
    return {
      model,
      canSubmit,
      backChangeEmail
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

.infoBlock{
  @apply bg-bg-dark p-4 text-center;
  border-radius: 5px;
  line-height: 2.2rem;
}
</style>
