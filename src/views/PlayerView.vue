<template>
  <div class="player-view">
    <router-view />
    <CustomPlayer :currentFlux="programme[0].sources">
     <InfoLight v-if="true" />
      <!--<InfoMax v-if="true" />-->
    </CustomPlayer>
  </div>
</template>

<script>
import Store from '@/store'

import CustomPlayer from "@/components/CustomPlayer.vue";
import InfoLight from "@/components/InfoLight.vue";
import InfoMax from "@/components/InfoMax.vue"

export default {
  components: {
    CustomPlayer,
    InfoLight,
    InfoMax
  },

  created () {
    document.addEventListener("keydown", (e) => this.ChannelChange(e));
  },

  computed: {
    programme: () => Store.getters.getProgramme,
  },

  methods: {
    ChannelChange (e) {
      if ( e.key == "PageUp" ) {
        if ( Store.state.currentIndex === 29 ){
          Store.state.currentIndex = 0
        } else {
          // console.log(Store.state.currentIndex = Store.state.currentIndex + 1)
          Store.commit('KeyLeft')
        }
      } else if ( e.key == "PageDown" ) {
        if ( Store.state.currentIndex === 0){
          // si currentIndex = 0 alors faire current index = array.length 
          Store.state.currentIndex = 29
        } else {
          //console.log(Store.state.currentIndex = Store.state.currentIndex - 1)
          Store.commit('KeyRight') 
        }
      }
    }
  },
}
</script>
