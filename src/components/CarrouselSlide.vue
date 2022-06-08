<template>
  <div ref="carrouselSLide" :id="index" class="carrousel-slide">
    <!-- thumb -->
    <img
      class="slide-img"
      :src="require('@/assets/sources/programmeThumb/' + thumb)"
      alt="thumb du programme"
    />
    <!-- logo -->
    <img
      class="slide-logo"
      :src="require('@/assets/sources/channelsLogo/' + logo)"
      alt="logo de la chaîne"
    />
    <!-- titre -->
    <div class="slide-text">
      <h3 class="slide-title">{{ title }}</h3>
      <!-- startTime - endTime -->
      <p class="slide-time">{{ startTime + "-" + endTime }}</p>
    </div>
  </div>
</template>

<script>
import Store from "@/store";

export default {
  props: {
    thumb: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },

  data: () => ({
    slideIndex: 0,
  }),

  created() {
    // set la function focus //
    document.addEventListener("keyup", (e) => this.focusSlideById(e));
    // permet de switch +1 focus //
    document.addEventListener("keyup", (e) => this.slideNext(e));
    // permet de switch -1 focus //
    document.addEventListener("keyup", (e) => this.slidePrevious(e));
    // pour changer de chaîne //
    document.addEventListener("keydown", (e) => this.changeChannelCarrousel(e));
  },

  mounted() {
    // met les index en number //
    this.idToNumber = parseInt(this.$refs.carrouselSLide.id); // en number
    // pour add une class //
    this.class = this.$refs.carrouselSLide.classList;
    // set lindex des slides //
    this.slideIndex = this.currentChannelIndex;
  },

  computed: {
    // pour conaitre la chaîne courente //
    currentChannelIndex: () => Store.state.currentIndex,
    // pour savoir si le carrousel est actif //
    carrouselDisplay: () => Store.state.carrouselDisplay,
    //  change src //
    carrouselVideoChange: () => Store.getters.getCarrouselVideoChange,
    // pour récup la taille des channels // 
    channels: () => Store.getters.getChannels,
  },

  methods: {
    focusSlideById(e) {
      if (e.key === "ArrowLeft") {
        // console.log(this.slideIndex);
        if (this.idToNumber === this.slideIndex) {
          this.class.add("focus");
        }
      }
    },

    slidePrevious(e){
      if(e.key === "ArrowUp" && this.carrouselDisplay){
        if(this.slideIndex > 0){
          this.slideIndex--
        } else {
          this.slideIndex = 0;
        }

        if(this.idToNumber === this.slideIndex) {
          this.class.add("focus")
        } else {
            this.class.remove("focus")
        }
      }
    },

    slideNext(e){
      if(e.key === "ArrowDown" && this.carrouselDisplay){
        if(this.slideIndex < (this.channels.length - 1)){
          this.slideIndex++
        } else {
          this.slideIndex = (this.channels.length - 1)
        }

        if(this.idToNumber === this.slideIndex) {
          this.class.add("focus")
        } else {
          this.class.remove("focus")
        }
      }
    },

    // ici doit changer de chaîne //
    changeChannelCarrousel(e) {
      if (e.key === "Enter" && this.carrouselDisplay) {
        // console.log("this.slide " + this.slideIndex);
        this.$store.commit("SET_CARROUSEL_CHANNEL_INDEX", this.slideIndex);
        // this.$store.commit("SET_CARROUSEL_CHANNEL_CHANGE", true);
        this.$store.commit("SET_CHANGE_SRC", true);
        // enleve le carrousel
        this.$store.commit("CarrouselHide")

        this.$store.commit("LightInfoDisplay")

        setTimeout(this.stopInfoLight, 4000);
      }
    },

    stopInfoLight() {
      Store.commit("LightInfoDefault");
    },
  },
};
</script>

<style lang="scss" scoped>
.carrousel-slide {
  margin: 2% auto;
  width: 100%;
  height: 27%;
  margin-top: 9%; // pour ne pas être coller en haut de l'écran
  margin-bottom: 9%;
  border: 1px solid whitesmoke;
}
.slide-img {
  width: 100%;
  height: 100%;
}
.slide-logo {
  width: 10%;
  height: 16%;
  position: relative;
  bottom: 95%;
  left: 85%;
}
.slide-text {
  text-align: center;
  color: white;
  position: relative;
  bottom: 38%;
}
.focus {
  border: 8px solid #00B2F1;
}
</style>