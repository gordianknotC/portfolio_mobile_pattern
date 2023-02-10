<template lang="pug">
.single_news
  .news-img.rounded-lg.mr-4
  .news-detail
    .news-line
      .category ball
      .newsDate
        SvgIcon(name="clock" :size="24")
        .text-white.text-sm.ml-1 2021/06/20
    .mt-2
      .context Lorem ipsum dolorsitamet consetetur




</template>


<script lang="ts">
import { defineComponent } from "vue";
import {onMounted, reactive, toRefs, watch} from "~/appCommon/base/vueTypes";
import {facade} from "~/types/facadeTypes";
import RouterNames from "~/router/name";
import {DateExt} from "~/appCommon/base/addon";
import { is } from "~/appCommon/extendBase/impls/utils/typeInferernce";

export default defineComponent({
  name: "SingleNews",

  setup(props){
    const state = reactive({

    })


    return{

    }
  }

});
</script>

<style lang="scss" scoped>
.single_news{
  @apply flex items-center my-4 w-full;

  .news{
    &-img{
      @apply opacity-50 ;
      background-color: #fff;
      width: 100px;
      height: 80px;
    }
    &-detail{
      @apply flex flex-col flex-1;
    }
    &-line{
      @apply flex;
      .category{
        @apply bg-primary px-2 text-white;
        @apply h-6 mr-2 rounded-lg text-center;
      }
      .newsDate{
        @apply opacity-50 text-white flex items-center;
      }
      .context{
        @apply text-white font-medium text-base w-full;
      }
    }

  }

}

</style>
