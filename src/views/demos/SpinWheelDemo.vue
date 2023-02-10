<!--<template lang="pug">-->
<!--SubLayout(-->
<!--  pageTitle="Wheel"-->
<!--)-->
<!--  template(#navRight)-->
<!--    MyEarn-->
<!--  .py-6.flex.justify-center.overflow-hidden-->
<!--    .wheel.mb-4-->
<!--      svg-icon.wheel__pointer(name="wheel-pointer" :size="60")-->
<!--      svg-icon.wheel__border(name="wheel-border" :size="327")-->
<!--      .wheel__content(ref="wheelElt")-->
<!--        .wheel__innerShadow-->
<!--        Sector.wheel__sector(-->
<!--          v-for="(item, idx) in list"-->
<!--          :style="getSectorStyle(idx)"-->
<!--          :key="idx"-->
<!--          :text="item.item"-->
<!--          :background-color="getColor(item, idx)"-->
<!--          :border-thickness="0"-->
<!--          :diameter="280"-->
<!--          :sectorAngleInDegree="sectorAngle"-->
<!--          :initialQuadrant="4"-->
<!--          :fontColor="getFontColor(item)"-->
<!--          fontSize="1.5rem"-->
<!--        )-->
<!--  van-button(-->
<!--    type="primary"-->
<!--    @click="spin"-->
<!--    block-->
<!--    :disabled="stage == EStage.spinning"-->
<!--  ).spin-btn.btn-tertiary Spin-->
<!--</template>-->

<!--<script lang="ts">-->
<!--import { ComputedRef, defineComponent, ref, watch } from "vue";-->
<!--import MyEarn from "~/components/MyEarn.vue";-->
<!--import SubLayout from "~/layout/SubLayout.vue";-->
<!--import {-->
<!--  computed,-->
<!--  onMounted,-->
<!--  reactive,-->
<!--  toRefs-->
<!--} from "~/appCommon/base/vueTypes";-->
<!--import { facade } from "~/types/facadeTypes";-->
<!--import {Prize, PrizeList} from "~/types/apiTypes";-->
<!--import { assert } from "~/appCommon/extendBase/impls/utils/assert";-->
<!--import Sector from "~/components/Sector.vue";-->

<!--const randomArr = (start: number, end: number) => {-->
<!--  return Math.round(start + Math.random() * (end - start));-->
<!--};-->

<!--enum EStage {-->
<!--  idle,-->
<!--  spinning-->
<!--}-->

<!--export default defineComponent({-->
<!--  name: "SpinWheel",-->
<!--  components: {-->
<!--    SubLayout,-->
<!--    MyEarn,-->
<!--    Sector,-->
<!--  },-->
<!--  setup() {-->
<!--    const colors ={-->
<!--      firstPrize: "#fff",-->
<!--      0: "#fa638b",-->
<!--      1: "#f9ea63",-->
<!--      2: "#25b8d7",-->
<!--      3: "#62faba",-->
<!--    }-->

<!--    const state = reactive({-->
<!--      list: [] as PrizeList,-->
<!--      startPlay: false,-->
<!--      prizes: 0,-->
<!--      initialDegree: 90, // 開始指針位置-->
<!--      targetDegree: 0, // 目的位置-->
<!--      stage: EStage.idle, // 狀態 idle / spinning-->
<!--      counter: 1, // spin 次數，用來疊加-->
<!--      sectorAngle: 0,-->
<!--    });-->

<!--    const wheelElt = ref<HTMLElement>();-->
<!--    const span = computed(() => 360 / state.list.length);-->
<!--    const radius = computed(() => Number(span.value.toFixed(2)));-->

<!--    const spin = () => {-->
<!--      if (state.stage == EStage.spinning) return;-->

<!--      const index = Math.min(Math.floor(Math.random() * 10), state.prizes - 1);-->
<!--      const prize = state.list[index].item;-->
<!--      spinToPrize(prize);-->
<!--    };-->


<!--    /** 第四象限為第一個 prize 起算 90 度（state.initialDegree) 作為 startupIndex-->
<!--     *  以輸入參數 prize 取得 targetIndex-->
<!--     *  @param prize: 獎金字串-->
<!--     * */-->
<!--    const spinToPrize = (prize: string) => {-->
<!--      let acc = 0;-->

<!--      const initialSpeed = 360 * 30 * state.counter;-->
<!--      const targetIndex = state.list.findIndex(_ => _.item === prize);-->
<!--      assert(targetIndex != -1, "prize not found");-->

<!--      const startupIndex = state.list.findIndex(_ => {-->
<!--        acc += span.value;-->
<!--        return Math.floor(acc) >= state.initialDegree;-->
<!--      });-->

<!--      const targetDegree = span.value * targetIndex - state.initialDegree;-->
<!--      const shift = +span.value / 2;-->

<!--      state.targetDegree = -(initialSpeed + targetDegree + shift);-->
<!--      console.log(-->
<!--        wheelElt.value,-->
<!--        startupIndex,-->
<!--        "spinTo:",-->
<!--        targetIndex,-->
<!--        targetDegree + shift,-->
<!--        prize-->
<!--      );-->
<!--    };-->

<!--    watch(-->
<!--      () => state.targetDegree,-->
<!--      () => {-->
<!--        state.stage = EStage.spinning;-->
<!--        wheelElt.value!.style!.transform = `rotate(${state.targetDegree}deg)`;-->
<!--      }-->
<!--    );-->

<!--    /** 假定資料由後端來-->
<!--     *  如果格式不同，告知後端改或直接在 apiService 轉-->
<!--     **/-->
<!--    const initializeWheel = async () => {-->
<!--      const wheelData = await facade.apiService.getWheelPrize();-->
<!--      state.list = wheelData.data;-->
<!--      state.prizes = state.list.length;-->
<!--      state.sectorAngle = (360 / state.prizes);-->
<!--    };-->

<!--    onMounted(async () => {-->
<!--      await initializeWheel();-->
<!--      wheelElt.value!.addEventListener("transitionstart", () => {-->
<!--        console.log("anim start");-->
<!--      });-->
<!--      wheelElt.value!.addEventListener("transitionend", () => {-->
<!--        console.log("animation has ended");-->
<!--        state.stage = EStage.idle;-->
<!--        state.counter++;-->
<!--      });-->
<!--    });-->

<!--    return {-->
<!--      ...toRefs(state),-->
<!--      radius,-->
<!--      wheelElt,-->
<!--      spin,-->
<!--      EStage,-->
<!--      getColor(item: Prize, idx: number){-->
<!--        return item.firstPrize-->
<!--          ? colors.firstPrize-->
<!--          //@ts-ignore-->
<!--          : colors[idx % 4 as any];-->
<!--      },-->
<!--      getFontColor(item: Prize){-->
<!--        return item.firstPrize-->
<!--            ? "#000"-->
<!--            : "#fff";-->
<!--      },-->
<!--      getSectorStyle(idx:number){-->
<!--        return `transform: rotate(${state.sectorAngle * idx}deg)`;-->
<!--      }-->
<!--    };-->
<!--  }-->
<!--});-->
<!--</script>-->

<!--<style lang="scss" scoped>-->
<!--.wheel {-->
<!--  width: 327px;-->
<!--  height: 327px;-->
<!--  position: relative;-->

<!--  &__pointer,-->
<!--  &__content {-->
<!--    position: absolute;-->
<!--    top: 0;-->
<!--    right: 0;-->
<!--    left: 0;-->
<!--    bottom: 0;-->
<!--    margin: auto;-->
<!--  }-->

<!--  &__content {-->
<!--    position: absolute;-->
<!--    top: 0;-->
<!--    right: 0;-->
<!--    left: 0;-->
<!--    bottom: 0;-->
<!--    margin: auto;-->
<!--    z-index: 5;-->
<!--    width: 280px;-->
<!--    height: 280px;-->
<!--    border-radius: 50%;-->
<!--    transition: transform 5s cubic-bezier(0, 0.47, 0.31, 1.03);-->
<!--  }-->

<!--  &__pointer {-->
<!--    z-index: 10;-->
<!--    filter: drop-shadow(0 0 6px rgba(#000, 0.8));-->
<!--    transform: translateY(-8px);-->
<!--  }-->
<!--  &__sector,  &__innerShadow{-->
<!--    @apply w-full h-full;-->
<!--    position: absolute;-->
<!--    left: 0;-->
<!--    top: 0;-->
<!--  }-->
<!--  &__innerShadow{-->
<!--    background: none;-->
<!--    box-shadow: inset rgba(0,0,0,0.8) 0 0 10px;-->
<!--    border-radius: 140px;-->
<!--    z-index: 10000;-->
<!--  }-->
<!--}-->

<!--.spin-btn {-->
<!--  bottom: 3%;-->
<!--  left: 50%;-->
<!--  width: 80%;-->
<!--  transform: translate(-50%, 0);-->
<!--  @apply fixed rounded-md border-none;-->
<!--}-->
<!--</style>-->
