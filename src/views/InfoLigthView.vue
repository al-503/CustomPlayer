<template>
  <div class="info-ligth">
    <InfoLigthHeader />
      <CustomPlayer />
  </div>
</template>

<script>
import CustomPlayer from '@/components/CustomPlayer.vue'
import InfoLigthHeader from '@/components/InfoLigthHeader.vue'

export default {
  components: {
    CustomPlayer,
    InfoLigthHeader,
  }
}
</script>

<style lang="scss">
</style>
