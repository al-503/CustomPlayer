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
    document.addEventListener("keyup", (e) => this.changeChannelCarrousel(e));
  },

  mounted() {
    // met les index en number //
    this.idToNumber = parseInt(this.$refs.carrouselSLide.id); // en number
    // met les id en string //
    this.idString = this.$refs.carrouselSLide.id; // en string pour l id
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
        console.log(this.slideIndex);
        // console.log(this.tabIndex)// recup de tout les id et les convertis en number
        if (this.idToNumber === this.slideIndex) {
          // ça marche
          // console.log(this.class)// carrousel-slide <== renvoie la class
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
      if (e.key === "a" && this.carrouselDisplay) {
        //Store.state.currentIndex = this.slideIndex // la lindex current vaut bien
        // console.log("this.slide " + this.slideIndex);
        this.$store.commit("SET_CARROUSEL_CHANNEL_INDEX", this.slideIndex);
        // this.$store.commit("SET_CARROUSEL_CHANNEL_CHANGE", true);
        this.$store.commit("SET_CHANGE_SRC", true);
      }
    },
  },
};
</script>

<style lang="scss">
.carrousel-slide {
  margin: 0 auto; // pour que les carte ne soit pas couper en remontant
  width: 100%;
  height: 27%;
  margin-top: 5.8%; // pour ne pas être coller en hut de l'écran
  border: 1px solid whitesmoke;
}
.slide-img {
  width: 100%;
  height: 100%; // pour avoir une fausse margin qui n'impacte pas les calculs du carrousel
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
  border: 3px solid blue;
}
</style>