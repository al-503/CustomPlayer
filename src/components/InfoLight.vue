<template>
  <div class="info-light">
    <!-- <InfoLightHeader /> -->
    <div class="info-light-header">
      <!-- ici logo de chaine -->
      <CurrentHour />
      <!-- <CurrentChannelLogo :src="" :alt=""/> -->
    </div>

      <CustomPlayer />

    <div class="info-light-bottom">
      <!-- ici info en cours -->
      <!-- ici info suivante -->
    </div>
  </div>
</template>

<script>
import CustomPlayer from '@/components/CustomPlayer.vue'
import CurrentHour from '@/components/CurrentHour.vue'
import CurrentChannelLogo from '@/components/CurrentChannelLogo.vue'

export default {
  components: {
    CustomPlayer,
    CurrentHour,
    CurrentChannelLogo
  }
}
</script>

<style lang="scss">

.info-light-header {
  position: absolute;
  width: 1920px;
  height: 233px;
  background: linear-gradient(0deg, rgba(132, 132, 132, 0) 0%, rgba(69, 69, 69, 0.5) 51.56%, rgba(0, 0, 0, 0.75) 100%);
  border-radius: 2px;
}
</style>
