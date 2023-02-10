<template lang="pug">

</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import BaseApi from "~/services/apiService";
import { facade } from "~/types/facadeTypes";
import {Toast} from "vant";
import RouterNames from "~/router/name";


export default defineComponent({
  name: "UserVerifyEmail",
  components:{

  },
  props:{
    token: {
      type: String
    }
  },
  setup(props){
    const verifyEmail = async () => {
      try{
        const verify = await BaseApi.patchUpdateEmail({
          email: facade.userStore.state.email!,
          token: props.token!
        })
        Toast.success("success")
        facade.userStore.updateFromModel({
          is_email_verified: true
        })

        await facade.router.push({
          name: RouterNames.Settings
        })

        console.log("verify", verify)
      }catch (e){
        console.log(e);
        Toast.fail(e.data.error_msg)
        facade.userStore.updateFromModel({
          is_email_verified: false
        })

        await facade.router.push({
          name: RouterNames.Settings
        })
      }
    }
    onMounted(()=>{
      verifyEmail()
    })

    return {

    }
  }

});
</script>

<style lang="scss" scoped>


</style>
