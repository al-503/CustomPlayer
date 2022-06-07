<template>
  <div ref="carrouselSLide" :id="index" class="carrousel-slide">
    <!-- thumb -->
    <img class="slide-img" :src="require('@/assets/sources/programmeThumb/'+ thumb)" alt="thumb du programme"> 
    <!-- logo -->
    <img class="slide-logo" :src="require('@/assets/sources/channelsLogo/'+ logo)" alt="logo de la chaîne">
    <!-- titre -->
    <div class="slide-text">
      <h3 class="slide-title">{{ title }}</h3>
      <!-- startTime - endTime -->
      <p class="slide-time">{{ startTime + "-" +  endTime }}</p>
    </div>
  </div>
</template>

<script>
import Store from "@/store"

export default {
  props: {
    thumb: {
      type: String,
      required: true
    },
    logo: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    startTime: {
      type: String,
      required: true
    },
    endTime: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },

  data: () => ({
    slideIndex: 0
  }),

  created() {
    // set la function focus //
    document.addEventListener("keyup", (e) => this.focusSlideById(e)); 
    // permet de switch +1 focus //
    document.addEventListener("keyup", (e) => this.slideNext(e))
    // permet de switch -1 focus //
    document.addEventListener("keyup", (e) => this.slidePrevious(e))
  },

  mounted() {
    // met les index en number //
    this.idToNumber = parseInt(this.$refs.carrouselSLide.id); // en number
    // met les id en string //
    this.idString = this.$refs.carrouselSLide.id // en string pour l id
    // pour add une class //
    this.class = this.$refs.carrouselSLide.classList
    // set lindex des slides //
    this.slideIndex = this.currentChannelIndex
  },

  computed: {
    // pour conaitre la chaîne courente //
    currentChannelIndex: () => Store.state.currentIndex,
    // pour savoir si le carrousel est actif //
    carrouselDisplay: () => Store.state.carrouselDisplay,
  },

  methods: {

    focusSlideById(e) {
       if(e.key === "ArrowLeft") {
        console.log(this.slideIndex)
        // console.log(this.tabIndex)// recup de tout les id et les convertis en number
         if(this.idToNumber === this.slideIndex) { // ça marche
            // console.log(this.class)// carrousel-slide <== renvoie la class 
              this.class.add("focus")
         }
      }
    },

    slidePrevious(e){
      if(e.key === "ArrowUp" && this.carrouselDisplay){
        //console.log('coucou Previous')
        this.slideIndex--
          if(this.idToNumber === this.slideIndex) {
            this.class.add("focus")
          } else {
             this.class.remove("focus")
          }
        //console.log(this.slideIndex)
      }
    },

    slideNext(e){
      if(e.key === "ArrowDown" && this.carrouselDisplay){
        //console.log('coucou Next')
        this.slideIndex++
          if(this.idToNumber === this.slideIndex) {
            this.class.add("focus")
          } else {
             this.class.remove("focus")
          }
      }
    },
 
 // ici doit changer de chaîne // 
    // changeChannelCarrousel(e) {
    //  if(e.key === "a" && this.carrouselDisplay){ //&& (this.currentChannelIndex != this.slideIndex)
    //   console.log("-----current index après appui sur a------")
    //   console.log(Store.state.currentIndex)
    //   console.log("-----------")
    //   Store.state.currentIndex = this.slideIndex // la lindex current vaut bien 
    //  }
    // }

  },
}
</script>

<style lang="scss">
.carrousel-slide {
  margin: 0 auto;// pour que les carte ne soit pas couper en remontant
  width: 100%;
  height: 27%;
  margin-top: 5.8%;// pour ne pas être coller en hut de l'écran
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