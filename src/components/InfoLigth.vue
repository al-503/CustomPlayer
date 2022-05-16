<template>
  <div class="info-ligth">
    <!-- <InfoLigthHeader /> -->
    <div class="info-ligth-header">
      <!-- ici logo de chaine -->
      <CurrentHour />
    </div>

      <CustomPlayer />

    <div class="info-ligth-bottom">
      <!-- ici info en cours -->
      <!-- ici info suivante -->
    </div>
  </div>
</template>

<script>
import CustomPlayer from '@/components/CustomPlayer.vue'
import CurrentHour from '@/components/CurrentHour.vue'

export default {
  components: {
    CustomPlayer,
    CurrentHour,
  }
}
</script>

<style lang="scss">

.info-ligth-header {
  position: absolute;
  width: 1920px;
  height: 233px;
  background: linear-gradient(0deg, rgba(132, 132, 132, 0) 0%, rgba(69, 69, 69, 0.5) 51.56%, rgba(0, 0, 0, 0.75) 100%);
  border-radius: 2px;
}
</style>
