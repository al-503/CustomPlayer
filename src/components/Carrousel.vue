<template>
  <div class="carrousel">
    <div class="carrousel-slides">
      <CarrouselSlide v-for="(channel, index) in channels"
                      :key="channel.id"
                      :index="index"
                      :focusSlide="focusSlide"
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
  data: () =>({
     focusSlide: 0 // provisoire pour dev
  }),
  created() {
    // next slide //
    document.addEventListener("keydown", (e) => this.nextSlide(e));
  },
  computed: {
    channels: () => Store.getters.getChannels,
    //focusSlide: () => Store.state.focusSlide,
    // pour vérifier ma conditions de next
    carrouselDisplay: () => Store.state.carrouselDisplay,
  },
  methods: {
///////// ici previous et next slide ///////////////////
    nextSlide(e) {
      if(e.key == "ArrowDown" && this.carrouselDisplay === true){
        if(this.focusSlide >= this.channels.length -1) {
          this.focusSlide = 0
        } else {
          this.focusSlide++
        }
      }
    },

    // previousSlide() {
    //   if(e.key == "ArrowUp" && this.carrouselDisplay === true){
    //     console.log("previous")
    //   }
    // },
////////////////////////////////////////////////////////
  }
}
</script>

<style lang="scss">
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

.carrousel-slides {
  width: 50%;
  position: absolute;
    top: 40%;
    left: -12%;
}

</style>
