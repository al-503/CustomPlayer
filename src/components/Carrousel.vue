<template>
  <div class="carrousel">
      <div class="carrousel-slides">
        <CarrouselSlide v-for="(channel, index) in channels"
                        :key="channel.id"
                        :index="index"
                        
                        :logo="channel.logo"
                        :thumb="channel.programme[0].thumb"
                        :title="channel.programme[0].title"
                        :startTime="channel.programme[0].startTime"
                        :endTime="channel.programme[0].endTime" />
      </div>                 
  </div>

</template>

<script>
import Store from "@/store"
import CarrouselSlide from "@/components/CarrouselSlides.vue"

export default {
  components: {
    CarrouselSlide
  },

  created() {
     // slide vers le bas //
    document.addEventListener("keydown", (e) => this.nextSlide(e));
    // slide vers le haut // 
    document.addEventListener("keydown", (e) => this.previousSlide(e));
  },

  computed: {
    channels: () => Store.getters.getChannels,
    // l'index de la slide qui est show
    //visibleSlide: () => Store.state.visibleSlide,
  },
  methods: {
///////// ici previous et next slide ///////////////////
    nextSlide(e) {
      if(e.key == "q"){ // key pour le dev
        if(this.visibleSlide >= this.channels.length - 1) {
          this.visibleSlide = 0
        } else {
          this.visibleSlide++
        }
      }
    },

    previousSlide(e) {
      if(e.key == "a"){ // key pour le dev
        if(this.visibleSlide <= 0) {
          this.visibleSlide = this.channels.length - 1
        } else {
          this.visibleSlide--
        }
      }
    },
////////////////////////////////////////////////////////
  }
}
</script>

<style lang="scss">
.carrousel-slides {
  height: 100%;
  padding: 20px;
  position: absolute;
    left: 2%;
//// defini la scrollbar 
  overflow-x: hidden;
  overflow-y: scroll;
////////////////////////
  &::-webkit-scrollbar{
    display: none;
  }
}
.carrousel {
  width: 50%;
  height: 100vh;
  overflow: hidden;

  background: linear-gradient(
    270deg,
    rgba(132, 132, 132, 0) 0%,
    rgba(69, 69, 69, 0.5) 51.56%,
    rgba(0, 0, 0, 0.75) 100%
  );
}

</style>
