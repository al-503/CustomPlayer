<template>
  <div class="player-view">
    <CustomPlayer />
  </div>
</template>

<script>
// @ is an alias to /src
import CustomPlayer from '@/components/CustomPlayer.vue'
import CurrentHour from '@/components/CurrentHour.vue'

export default {
  components: {
    CustomPlayer,
    CurrentHour
  }
}
</script>

<style lang="scss"></style>
