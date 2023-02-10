<template lang="pug">
section
  Sector(
    text="45'-4 quadrant"
    background-color="blue"
    :border-thickness="0"
    :sectorAngleInDegree="45"
    :initialQuadrant="4"
    :diameter="280"
    font-color="black"
  )
  Sector(
    text="60'-4 quadrant"
    background-color="orange"
    :border-thickness="0"
    :sectorAngleInDegree="60"
    :initialQuadrant="4"
    :diameter="280"
  )
  Sector(
    text="45'-1 quadrant"
    background-color="blue"
    :border-thickness="0"
    :sectorAngleInDegree="45"
    :initialQuadrant="1"
    :diameter="280"
  )
  Sector(
    text="60'-1 quadrant"
    background-color="orange"
    :border-thickness="0"
    :sectorAngleInDegree="60"
    :initialQuadrant="1"
    :diameter="280"
  )
  Sector(
    text="45'-2 quadrant"
    background-color="blue"
    :border-thickness="0"
    :sectorAngleInDegree="45"
    :initialQuadrant="2"
    :diameter="280"
  )
  Sector(
    text="60'-2 quadrant"
    background-color="orange"
    :border-thickness="0"
    :sectorAngleInDegree="60"
    :initialQuadrant="2"
    :diameter="280"
  )
</template>

<script lang="ts">
import { ComputedRef, defineComponent, ref, watch } from "vue";
import MyEarn from "~/components/MyEarn.vue";
import SubLayout from "~/layout/SubLayout.vue";
import Sector from "~/components/Sector.vue";

const randomArr = (start: number, end: number) => {
  return Math.round(start + Math.random() * (end - start));
};

enum EStage {
  idle,
  spinning
}

export default defineComponent({
  name: "SpinWheel",
  components: {
    SubLayout,
    MyEarn,
    Sector,
  },
  setup() {

    return {
    };
  }
});
</script>

<style lang="scss" scoped>

</style>
