<template>
  <div class="player-view">
    <router-view />
    <CustomPlayer :currentFlux="programme[0].sources">
      <InfoLight v-if="infoDisplayed"/>
    </CustomPlayer>
  </div>
</template>

<script>

import Store from '@/store'

import CustomPlayer from "@/components/CustomPlayer.vue";
import InfoLight from "@/components/InfoLight.vue";

export default {
  components: {
    CustomPlayer,
    InfoLight,
  },

  created () {
    // changement de chaine et des infos // 
    document.addEventListener("keydown", (e) => this.ChannelChange(e));
    // display de l'info light //
    document.addEventListener("keydown", (e) => this.showInfoLight(e));
  },

  computed: {
    programme: () => Store.getters.getProgramme,

    infoDisplayed: () => Store.state.display,
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
    },

    showInfoLight (e) {
      if(e.key === "ArrowUp") {
        Store.commit('LightInfodisplay'); 
      }
    }
  },
}
</script>
