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
    tabIndex: []
  }),

  created() {
    // set la function focus //
    document.addEventListener("keyup", (e) => this.focusSlideById(e)); 
    //this.focusSlideById()
  },

  mounted() {
    // met les index en number
    this.idToNumber = parseInt(this.$refs.carrouselSLide.id); // en number
    this.idString = this.$refs.carrouselSLide.id // en string pour l id
    this.class = this.$refs.carrouselSLide.classList
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
        // console.log(this.tabIndex)// recup de tout les id et les convertis en number
         if(this.idToNumber === this.currentChannelIndex) { // ça marche
              console.log(this.class)// carrousel-slide <== renvoie la class 
              this.class.add("focus")
         }
      }


      // if(this.carrouselDisplay){
      //   // alors ont passe la classe focus sur le composant qui a l'index === aux current index 
      //   if(this.carrouselIndex === this.currentChannelIndex){
      //     this.carrouselIndex.classList.add("focus")
      //   }
      // }
    }

  },
}
</script>

<style lang="scss">
.carrousel-slide {
  margin: 0 auto;// pour que les carte ne soit pas couper en remontant
  width: 100%;
  height: 27%;
  margin-top: 2%;// pour ne pas être coller en hut de l'écran
}
.slide-img {
  width: 100%;
  height: 90%; // pour avoir une fausse margin qui n'impacte pas les calculs du carrousel
}
.slide-logo {
  width: 10%;
  height: 16%;
  position: relative;
    bottom: 85%;
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