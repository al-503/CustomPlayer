<template>
  <div class="info-light">
    <!-- <InfoLightHeader /> -->
    <div class="info-light-header">
      <!-----ici heure courante------->
      <CurrentHour />
      <CurrentChannelLogo :logo="channel.logo"/>
    </div>

    <div class="info-light-bottom">
      <!-- ici info en cours -->
      <!-- ici info suivante -->
    </div>
  </div>
</template>

<script>
import Store from '@/store'

import CurrentHour from "@/components/CurrentHour.vue"
import CurrentChannelLogo from '@/components/CurrentChannelLogo.vue'

export default {
  components: {
    CurrentHour,
    CurrentChannelLogo,
  }, 

  computed: {
    channel: () => Store.state.firstChannel
  },
};
</script>

<style lang="scss">
.info-light-header {
  position: absolute;
  width: 100%;
  height: 28%;
  background: linear-gradient(0deg, rgba(132, 132, 132, 0) 0%, rgba(69, 69, 69, 0.5) 51.56%, rgba(0, 0, 0, 0.75) 100%);
  border-radius: 2px;
}
</style>
