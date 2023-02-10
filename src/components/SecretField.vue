<template lang="pug">
van-field(
  v-bind="$attrs"
  :type="p_type"
  rows="1"
  :border="false"
  autocomplete="new-password"
)
  template(#label="data" )
    slot(name="label")
  template.size(#right-icon="data")
    button.p-0.m-0.items-center(@click="onToggleEyeBall")
      SvgIcon(:name="eyeBall" :size="24")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {computed, reactive, toRefs} from "~/appCommon/base/vueTypes";

export default defineComponent({
  name: "SecretField",
  inheritAttrs:true,
  setup(props, {emit, attrs}) {
    const state = reactive({
      p_type: "password"
    })

    return {
      ...toRefs(state),
      onToggleEyeBall(){
        state.p_type = state.p_type === "password"
          ? "text"
          : "password";
        console.log("2toggle eyeball", state.p_type, attrs);
      },
      eyeBall: computed(()=>{
        return state.p_type === "password"
          ? "eye-off"
          : "eye";
      }),
    }
  }
});
</script>
<style lang="scss">
.size{
  height: 24px;
  line-height: normal;
}

</style>
