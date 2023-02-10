<template lang="pug">
.grid.grid-cols-2.gap-2
  .info
    svg-icon(name="cash" :size="28")
    .info__text {{ numeralHelper.asFloat(pay_out_balance, 2) }}
  .info
    svg-icon(name="coin" :size="28")
    .info__text {{ numeralHelper.asFloat(coin_balance, 2) }}
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {onMounted, reactive, toRefs} from "~/appCommon/base/vueTypes";
import BaseApi from "~/services/apiService";
import {facade} from "~/types/facadeTypes";
import {numeralHelper} from "~/utils/numericHelper";

export default defineComponent({
  name: "MyEarn",
  setup(){
    const state = reactive({
      coin_balance: "",
      pay_out_balance: ""
    })
    const getBalance = async () => {
      const balance = await BaseApi.GetBalance()
      state.coin_balance = balance.data.coin_balance
      state.pay_out_balance = balance.data.pay_out_balance
    }
    onMounted(async ()=>{
      await getBalance()
    })

    return {
      ...toRefs(state),
      numeralHelper
    }
  }
});
</script>

<style lang="scss" scoped>
.info {
  min-width: 120px;
  @apply flex items-center bg-primary-med_dark rounded-xl p-1 border border-primary-light;
  &__text {
    @apply text-white ml-1;
  }
}
</style>
