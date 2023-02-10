<template lang="pug">
section.game
  header.section-header
    h3 Games for you
    router-link.more(:to="{ name: RouterNames.Game}") MORE
  .game-item(v-for="game in threeGame" :key="game")
    img.pic(:src="require('@/assets/img/fandream11.png')" alt="Fandream11")
    h4 {{ game.name }}
    .flex.justify-center.items-center
      span.text-semibold {{ game.complete_worth }}/{{ game.total_worth }}
      svg-icon.ml-1(name="coin" :size="24")

</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import { toRefs } from "~/appCommon/base/vueTypes";
import BaseApi from "~/services/apiService";
import {GetGame} from "~/types/apiTypes";
import RouterNames from "~/router/name";


export default defineComponent({
  name: "HomePageGameSection",
  components: {

  },
  setup() {
    const state = reactive({
      gameData: [] as GetGame[],
      threeGame: [] as GetGame[],
    });

    const getGame = async () => {
      const result = await BaseApi.getGame();
      state.gameData = result.data
      for(let i = 0; i < 3; i ++){
        state.threeGame.push(state.gameData[i])
      }
    };
    // 計算獎勵與總數
    const gameCoin = (data: GetGame[]) => {
      data.map(game => {
        // 取得每個任務的 worth
        let worthArr = [] as any
        game.mission.map(worth=>{
          worthArr.push(worth.worth)
        })
        let total = 0
        for (let i = 0; i < worthArr.length; i++){
          total += Number(worthArr[i])
        }
        game.total_worth = total

        // 取得完成任務後的 worth
        const completeMission = game.mission.filter(complete=>{
          return complete.complete_datetime
        })
        let completeWorthArr = [] as any
        completeMission.map(worth=>{
          completeWorthArr.push(worth.worth)
        })
        let completeWorth = 0
        for (let i = 0; i < completeWorthArr.length; i++){
          completeWorth += Number(completeWorthArr[i])
        }
        game.complete_worth = completeWorth
      })
    }

    onMounted(async () => {
      await getGame();  // 取得遊戲列表
      await gameCoin(state.gameData)  // 計算獎勵與總數

    });

    return {
      ...toRefs(state),
      RouterNames
    };
  }
});
</script>

<style lang="scss" scoped>
.section-header {
  @apply flex justify-between items-center mb-4;
  h3 {
    @apply text-2xl text-light;
  }
  .more {
    @apply text-tertiary-light;
  }
}
section.game {
  @apply mb-8;
}

.game-item {
  @apply grid gap-4 items-center text-light;
  grid-template-columns: 48px 1fr auto;

  &:not(:last-of-type) {
    @apply mb-4;
  }
}

</style>
