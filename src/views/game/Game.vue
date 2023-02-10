<template lang="pug">
MainLayout
  .game-box(v-for="game in gameData" :key="game")
    .game-box_icon
    .info
      .info__title {{ game.name }}
      .info__bar
        .info__bar__outer(:style="{width: game.progressWidth}")
          .task Task {{ game.game_schedule }}/{{ game.mission.length }}
    .flex.items-center
      .percentage {{ game.complete_worth }}/{{ game.total_worth }}
      SvgIcon(name="coin" :size="24")




</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import MainLayout from "~/layout/MainLayout/MainLayout.vue";
import { toRefs } from "~/appCommon/base/vueTypes";
import BaseApi from "~/services/apiService";
import {GetGame} from "~/types/apiTypes";
import { is } from "~/appCommon/extendBase/impls/utils/typeInferernce";

export default defineComponent({
  name: "Game",
  components: {
    MainLayout
  },
  setup() {
    const state = reactive({
      progressWidth: `${(50 / 100) * 100}%`,
      gameData: [] as GetGame[],
    });

    // 取得遊戲列表
    const getGame = async () => {
      const result = await BaseApi.getGame();
      state.gameData = result.data
    };

    // 計算完成進度
    const gameSchedule = (data: GetGame[]) => {
      data.map(game => {
        const completeMission = game.mission.filter(mission=>{
          return is.not.undefined(mission.complete_datetime)
        })
        game.game_schedule = completeMission.length
        console.log("completeMission.length", completeMission.length)
        game.progressWidth =
            `${(completeMission.length / game.mission.length) * 100}%`
        console.log("state.progressWidth", state.progressWidth)
        
      })
    }

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
      await getGame(); // 取得遊戲列表
      await gameSchedule(state.gameData)  // 計算完成進度
      await gameCoin(state.gameData)  // 計算獎勵與總數
    });

    return {
      ...toRefs(state)
    };
  }
});
</script>

<style lang="scss" scoped>
.icon-box {
  width: 50px;
  height: 50px;
  @apply bg-primary-grey;
}
.percentage {
  @apply text-lg text-white font-bold;
}

.info {
  @apply text-white flex-1;
  &__title {
    @apply text-base font-bold;
  }
  &__bar {
    height: 20px;
    border-radius: 100px;
    @apply bg-bg-dark_blue;
    &__outer {
      border-radius: 100px;
      @apply bg-primary-light h-full;
      .task {
        @apply text-sm;
        @apply pl-2 whitespace-nowrap;
      }
    }
  }
}

.game-box{
 @apply flex my-4;

  &_icon{
    @apply bg-primary-grey rounded-lg w-12 h-12;
  }
  .info {
    @apply text-white flex-1 mx-4;
    &__title {
      @apply text-base font-bold;
    }
    &__bar {
      height: 20px;
      border-radius: 100px;
      @apply bg-bg-dark_blue flex-1;
      &__outer {
        border-radius: 100px;
        @apply bg-primary-light h-full;
        .task {

          @apply pl-2 text-sm whitespace-nowrap;
        }
      }
    }
  }

}
</style>
