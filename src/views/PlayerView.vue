<template>
  <div class="player-view">
    <router-view />
<<<<<<< HEAD
    <CustomPlayer> <!---il prend bien celui la-->
=======
    <CustomPlayer :videoURL="programme.sources">
>>>>>>> 85cc88cbbd0d59823f57c5fc15db4e2e9c957164
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
  computed:{
    programme: () => Store.getters.getProgramme[0],
  },
  //je ne sais pas à quoi sertt cette method - axel -
  methods: {
    // changeVideo(url) {
    //   this.videoURL = url;
    // },
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
