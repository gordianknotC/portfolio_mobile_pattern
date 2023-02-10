<template lang="pug">
.branding-card.branding-card--dark.p-6
  .dateAndId
    p {{ withdraw_dateTime }}
    p {{ withdraw_ID }}
  .feeAndStatus
    p ₹ {{ numeralHelper.asFloat(withdraw_amount, 2) }}
    .flex.flex-col
      p(:class="statusColor(withdraw_status)") {{ EWithdrawStatus[withdraw_status] }}


</template>

<script lang="ts">
import {defineComponent} from "vue";
import {reactive} from "~/appCommon/base/vueTypes";
import { EWithdrawStatus } from "~/types/apiTypes";
import {numeralHelper} from "~/utils/numericHelper";

export default defineComponent({
  name: "WithdrawCard",
  props: {
    withdraw_dateTime: {
      type: String,
    },
    withdraw_ID: {
      type: String,
    },
    withdraw_amount: {
      type: String,
    },
    withdraw_status: {
      type: Number,
    },

  },
  setup(props){
    const state = reactive({
    })

    const statusColor = (status: number) => {
      switch (status){
        case 1:
          return "text-warning-light"
        case 2:
          return "text-error-light"
        case 3:
          return "text-success-light"
      }
      return true
    }


    return {
      statusColor,
      EWithdrawStatus,
      numeralHelper
    }

  }
});
</script>

<style lang="scss" scoped>
.dateAndId{
  @apply flex items-center justify-between;
  @apply text-text text-sm mb-2;
}
.feeAndStatus{
  @apply flex items-center justify-between;
  @apply text-text-light text-lg;
}
</style>
