<template>
  <div class="player-view">
    <router-view />
    <CustomPlayer> <!---il prend bien celui la-->
      <InfoLight v-if="true" />
    </CustomPlayer>
  </div>
</template>

<script>
import Store from '@/store'
// @ is an alias to /src
import CustomPlayer from "@/components/CustomPlayer.vue";
import InfoLight from "@/components/InfoLight.vue";

export default {
  components: {
    CustomPlayer,
    InfoLight,
  },
  created () {
    document.addEventListener("keydown", (e) => this.ChannelChange(e));
  },
  methods: {
//aura besoin d'un refacto et va être déplacée en parti dans le store
    ChannelChange (e) {
      if ( e.key == "PageUp" ) {
        if ( Store.state.currentIndex === 29 ){
          Store.state.currentIndex = 0
        } else {
           console.log(Store.state.currentIndex = Store.state.currentIndex + 1)
        }
      } else if ( e.key == "PageDown" ) {
        if ( Store.state.currentIndex === 0){
          //attention ici la valeur est en dur est doit etre remplacer avec un point length
          Store.state.currentIndex = 29
        } else {
          console.log(Store.state.currentIndex = Store.state.currentIndex - 1)
        }
      }
      // doit faire current index -1
      // si currentIndex = 0 alors faire current index = array.length 
    }
  },
}
</script>
