<template lang="pug">
section
  .brand.brand-heading-gradient
    .brand__heading {{$txt.commissionClub}}

  .pageContainer
    section.inline-flex.items-center.w-full
      van-tabs.app-tabs-xl.flex-1(
        v-model:active="state.activeName"
        @click="onTabClick"
      )
        van-tab(:title="$txt.signUp" :name="RouterNames.SignUp" :key="1")
        van-tab(:title="$txt.login" :name="RouterNames.SignIn" :key="2")
      section.w-full.flex-1

    component(:is="comp")

</template>

<script lang="ts">
import {computed, defineComponent, onMounted, reactive, toRefs} from "~/appCommon/base/vueTypes";
import PrimBt from "~/components/PrimBt.vue";
import SecBtWhite from "~/components/SecBtWhite.vue";
import SvgIcon from "~/components/SvgIcon.vue";
import SignIn from "~/views/signIn/SignIn.vue";
import SignUp from "~/views/signUp/SignUp.vue";
import {facade} from "~/types/facadeTypes";
import RouterNames from "~/router/name";
import {Optional} from "~/appCommon/base/baseApiTypes";

export default defineComponent({
  components:{
    PrimBt,
    SecBtWhite,
    SvgIcon,
    [RouterNames.SignIn]: SignIn,
    [RouterNames.SignUp]: SignUp,
  },
  setup() {
    const comp = computed(()=>{
      return facade.router.currentRoute.value.name === RouterNames.SignIn
          ? RouterNames.SignIn
          : RouterNames.SignUp;
    });

    const state = reactive({
      phoneNumber: undefined as Optional<string>,
      activeName: comp.value,
    });

    const onTabClick = (name: string, title: string)=>{
      console.log("onTabClick Name:", name);
      //state.activeName = name;
      facade.router.push({
        name: name
      });
    }

    console.log("getRoute:", comp.value, state.activeName);

    return {
      state,
      comp,
      canSubmit: computed(()=>false),
      RouterNames,
      onTabClick,
    };
  }
}
)
</script>

<style lang="scss" scoped>
.NotFound {
  width: 100vw;
  height: 100vh;
  @apply flex justify-center items-center bg-white;
}

.brand{
  height: 6rem;
  &__heading{
    @apply text-center items-center inline-flex;
    @apply justify-around w-full h-full text-light;
    font-size: 1.6rem;
  }
}

.pageContainer{
  @apply px-6 py-4;
}

::v-deep(){
  .app-tabs-xl{
    &.van-tabs {
      .van-tab{
        font-size: 1.6rem;

        &__text{
          @apply p-0 m-0 font-normal;
          font-size: 1.6rem;
          height: 1.6rem;
          white-space: nowrap;
        }
      }

      .van-tab:not(:first-child) {
        @apply pl-4;
      }

      .van-tab:first-child {
        @apply pr-4;
      }

      .van-tabs__line{
        @apply bg-line-prim-active_link;
        width: 45%;
      }
    }
  }
}

</style>
