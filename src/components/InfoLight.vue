<template>
  <div class="info-light">
    <!-- <InfoLightHeader /> -->
    <div class="info-light-header">
      <!-----ici heure courante------->
      <CurrentHour />
      <!-----ici logo courante------->
      <CurrentChannelLogo :logo="currentChannel.logo"/>
    </div>

    <div class="info-light-bottom">
      <!-- ici info en cours -->
      <CurrentProgrammeInfo :title="programme.title" :gender="programme.genre" :startAt="programme.startTime" :endAt="programme.endTime" />
      <!-- ici info suivante -->
    </div>
  </div>
</template>

<script>
import Store from '@/store'

import CurrentHour from "@/components/CurrentHour.vue"
import CurrentChannelLogo from '@/components/CurrentChannelLogo.vue'
import CurrentProgrammeInfo from '@/components/CurrentProgammeInfo.vue'

export default {
  components: {
    CurrentHour,
    CurrentChannelLogo,
    CurrentProgrammeInfo,
  },
  data: () => ({
    //currentIndex: 8,
  }),

  computed: {
    currentChannel: () => Store.getters.getCurrentChannel,
    programme: () => Store.getters.getCurrentProgramme,
  },
  methods: {

    // setInfoLIgth () {
    //   let currentChannel = this.getCurrentChannel(currentIndex)
    //   let CurrentProgamme = this.getCurrentProgramme()
    // },
      

    keyRigth () {
      // doit faire current index -1
      // si currentIndex = 0 alors faire current index = array.length 
    },

    keyLeft () {
      // doit faire index +1
      // si array est a son max index alors currentIndex = 0 
    }
  }
};
</script>

<style lang="scss">
.info-light-header {
  position: absolute;
  width: 100%;
  height: 28%;
  background: linear-gradient(
    0deg,
    rgba(132, 132, 132, 0) 0%,
    rgba(69, 69, 69, 0.5) 51.56%,
    rgba(0, 0, 0, 0.75) 100%
  );
  border-radius: 2px;
}
.info-light-bottom {
  position: absolute;
  width: 100%;
  height: 25%;
  top: 80%;

  background: rgba(63, 62, 62, 0.69);
  backdrop-filter: blur(20px);

  color:white;
}
</style>
