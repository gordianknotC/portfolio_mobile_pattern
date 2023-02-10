<template lang="pug">
section
  pre text           : {{counterText}}
  pre retires        : {{counter.state.retries}}
  pre max retries    : {{counter.state.maxTimes}}
  pre exceed retries : {{counter.hasExceedMaxRetries.value}}
  pre enabled        : {{enabled}}
  pre canResend      : {{canResend}}


  van-button(@click="restart" :disabled="!canResend")
    span.text restart
  van-button(@click="reset")
    span.text reset
  van-button(@click="start")
    span.text start
  van-button(@click="continuum")
    span.text continuum


</template>

<script lang="ts">
import { ComputedRef, defineComponent, ref, watch } from "vue";
import {VerifyOTPPeriodCounter} from "~/store/counter/counter";
import {computed, onMounted} from "~/appCommon/base/vueTypes";
import {facade} from "~/types/facadeTypes";
import {APP_CONFIGS} from "~/config";


export default defineComponent({
  name: "CounterDemo",
  components: {
  },
  setup() {
    APP_CONFIGS.DEFAULT_MODELS.COUNTER.SPAN = 11;
    APP_CONFIGS.DEFAULT_MODELS.COUNTER.PERIOD = 11;

    const counter = new VerifyOTPPeriodCounter();

    const counterText = computed(()=>{
      const text =  counter.currentCounter.value;
      const enabled =  counter.counterEnabled.value;
      if (enabled)
        return `(${text})`;
      return "";
    });

    const exceedCounterText = computed(()=>{
      return facade.i18n.value.counterExceedMaxRetries.format({
        seconds:  counter.currentCounter.value});
    });

    const canResend = computed(()=>{
      return !counter.counterEnabled.value;
    });

    const enabled = counter.counterEnabled;

    //@ts-ignore
    window.counter = counter;
    onMounted(()=>{
      console.group("MOUNT");
      if (counter.counterEnabled.value){
        console.log("continue");
        counter.continue();
      }else if (counter.hasExceedMaxRetries.value){
        console.log("restart...");
        counter.reset();
        counter.start();
      }else{
        console.log("start");
        counter.start();
      }
      console.groupEnd();
    })    ;
    return {
      counter,
      counterText,
      exceedCounterText,
      enabled,
      canResend,
      restart(){
        counter.reset();
        counter.start();
      },
      reset(){
        counter.reset();
      },
      start(){
        counter.start();
      },
      continuum(){
        counter.continue();
      }
    };
  }
});
</script>

<style lang="scss" scoped>

</style>
