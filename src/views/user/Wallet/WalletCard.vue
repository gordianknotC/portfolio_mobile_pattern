<template lang="pug">
.branding-card.branding-card--dark.p-4.mb-4(v-if="moreBtn")
  .bank-name
    p {{ bank_name }}
    SvgIcon.cursor-pointer(
      @click="show = true"
      name="more"
      :size="24")
  .bank-number
    .text-text {{ account_number }}
    .text-tertiary(v-if="defaultBank") Default

span(v-else)
  .branding-card.branding-card--dark.p-4.mb-4
    .bank-name
      p {{ bank_name }}
      .text-tertiary.text-sm(v-if="defaultBank") Default
    .bank-number
      .text-text {{ account_number }}



.editBankAccount
  van-popup(
    v-model:show="show"
    position="bottom"
    round
    :style="{ height: '30%' }")
    .iconLine(@click="showDialog('detail')")
      SvgIcon(name="read-more" :size="24")
      p Details
    .iconLine.my-4(@click="goEditUrl(walletID)")
      SvgIcon(name="edit-line" :size="24")
      p Edit
    .iconLine(@click="showDialog('delete')")
      SvgIcon(name="delete" :size="24")
      p Delete
    .fab.fab__bottom
      PrimBt(
        type="default"
        @click="show = false"
      ) Cancel


        // detail dialog
van-dialog(
  v-model:show="showDetail"
  :showConfirmButton="false"
  :showCancelButton="false"
  :closeOnClickOverlay="true"
  className="bg-bg text-light"
)
  .p-6
    .dialog-header
      SvgIcon.closeBtn(name="close" :size="20" @click="closeDialog")
      .title Account details
    .dialog-body
      .betweenLine
        .flex-1.text-text Full name
        .text-white {{ full_name }}
      .betweenLine
        .flex-1.text-text Bank name
        .text-white {{ bank_name }}
      .betweenLine
        .flex-1.text-text Account number
        .text-white {{ account_number }}
      .betweenLine
        .flex-1.text-text IFSC code
        .text-white {{ ifsc_code }}

        // delete dialog
van-dialog(
  v-model:show="showDelete"
  :showConfirmButton="false"
  :showCancelButton="false"
  :closeOnClickOverlay="true"
  className="bg-bg text-light"
)
  .p-6
    .dialog-header
      SvgIcon.closeBtn(name="close" :size="20" @click="closeDialog")
      .title Delete account
    .dialog-body
      .deleteText Are you sure you want to delete this account?
      .fund-password
        SecretField(
          v-model="model.state.fund_password.value"
          rows="1"
          :label="model.state.fund_password.label"
          :placeholder="model.state.fund_password.placeholder"
          autocomplete="new-password"
          @input="()=>model.notifyOnInput(model.state.fund_password.dataKey)"
        )
          template(#label="data")
            section.inline-flex.justify-between.w-full
              span {{$txt.fund_password}}
      .twoBtn
          van-button.cancelBtn(
            @click="showDelete=false"
            type="default"
          ) Cancel
          van-button.deleteBtn.primary-bt-gradient(
            @click="model.submit"
            :disabled="!canSubmit"
            type="default"
          ) Delete


</template>

<script lang="ts">
import { defineComponent } from "vue";
import {computed, onMounted, reactive, toRefs, watch} from "~/appCommon/base/vueTypes";
import PrimBt from "~/components/PrimBt.vue";
import BaseApi from "~/services/apiService";
import {Toast} from "vant";
import RouterNames from "~/router/name";
import {facade} from "~/types/facadeTypes";
import {DelAccountPayload} from "~/types/apiTypes";
import {DelBankAccountModel, EditBankAccountModel} from "~/store/forms/userForms";
import SecretField from "~/components/SecretField.vue";

export default defineComponent({
  name: "WalletCard",
  emits: [ "success", "accClick" ],
  components:{
    PrimBt,
    SecretField
  },
  props: {
    walletID:{
      type: Number,
    },
    bank_name:{
      type: String,
    },
    account_number:{
      type: String,
    },
    full_name:{
      type: String,
    },
    ifsc_code: {
      type: String,
    },



    defaultBank:{
      type: Boolean,
      default: false
    },
    moreBtn: {
      type: Boolean,
      default: true
    },
  },
  setup(props, { emit }){

    const model = new DelBankAccountModel({
      onSubmit(ok, model){
        console.log('onSubmit:');
        if (ok){
          Toast.success("success")
          emit("success")
        }
        return true;
      }
    });
    const canSubmit = computed(()=>{
      return model.canSubmit.value;
    });

    const state = reactive({
      show: false,
      showDetail: false,
      showDelete: false,
    })


    const closeDialog = () => {
      state.showDelete = false;
      state.showDetail = false;
    }
    const showDialog = (type: string) => {
      console.log("type", type)
      state.show = false
      if(type == "detail"){
        state.showDetail = true
      }
      if(type == "delete"){
        state.showDelete = true
        model.state.account_id.value = props.walletID
      }
    }

    const goEditUrl = (account_id: number) => {
      facade.router.push({ name: RouterNames.EditWallet,
        params: {
          account_id,
        }
      })
    }






    return{
      model,
      ...toRefs(state),
      canSubmit,
      closeDialog,
      showDialog,
      goEditUrl,
    }
  }
});
</script>

<style lang="scss" scoped>
.content {
  @apply text-white;
}
.bank-name{
  @apply flex items-center justify-between mb-1;
  p{
    @apply text-white text-base;
    width: 70%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

}
.bank-number{
  @apply flex items-center justify-between mt-1 text-xs;
  ::v-deep(){
    .van-button{
      &__text{
        @apply text-white;
      }
    }
  }
}

.editBankAccount{
  ::v-deep(){
    .van-popup{
      @apply p-6 bg-bg;
      .iconLine{
        @apply flex items-center;
        @apply text-white text-base;
        p{
          @apply ml-1;
        }
      }
    }
  }
  .fab__bottom{
    @apply flex justify-center flex-row;
    .van-button {
      width: calc(100% - 2rem);
    }
  }
}
.dialog{
  &-header {
    @apply relative mb-6 text-xl font-medium;
    .closeBtn {
      @apply absolute;
      right: 0;
      top: 0;
    }
  }
  &-body{
    @apply text-base;
    .deleteText{
      @apply text-text;
    }
    .twoBtn{
      @apply flex items-center justify-between mt-4;
      .cancelBtn{
        @apply bg-bg border-2 border-tertiary text-tertiary;

      }
      .deleteBtn{
        @apply border-none text-bg;
      }
        .van-button {
          &--default {
            @apply font-bold text-base rounded-xl;
            width: calc(100% - 53%);
          }
        }
    }
    .betweenLine{
      @apply mb-2;
      @apply flex items-center justify-between;
    }

  }
}

</style>
