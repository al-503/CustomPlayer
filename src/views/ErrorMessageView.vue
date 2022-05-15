<template>
 
  <div class="player-view">
     
    <CustomPlayer class="customPlayerError"/>
   
  </div>
  
   <ErrorMessage />
</template>

<script>
// @ is an alias to /src
import CustomPlayer from '@/components/CustomPlayer.vue'
import ErrorMessage from '@/components/ErrorMessage.vue'

export default {
  components: {
    CustomPlayer,
    ErrorMessage
  }

}
</script>

<style lang="scss">
.customPlayerError{
  
}

</style>
