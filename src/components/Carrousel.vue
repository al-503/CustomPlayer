<template>
  <div class="carrousel">
      <div ref="sliders" class="carrousel-slides">
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
    document.addEventListener("keydown", (e) => this.scrollToBottom(e));
    // slide vers le haut // 
    document.addEventListener("keydown", (e) => this.scrollToTop(e));
  },

  computed: {
    channels: () => Store.getters.getChannels,
    // l'index de la slide qui est show
    //visibleSlide: () => Store.state.visibleSlide,
  },
  methods: {
///////// ici previous et next slide ///////////////////
// on veut la taille du tableaux (30) * la taile en px d'un tuile (250) = 7500 et un clic est égal a 250 et donc 2 clic 500 etc
    scrollToBottom(e) {
      if(e.key === "q"){  // key pour le dev
      console.log(this.$refs.sliders.scrollTop = 200) // scrollTop defini la position de départ a 0 et peut etre rréatribuer 
      const scrollbarWidth = this.$refs.sliders.offsetHeight + this.$refs.sliders.clientHeight;
      console.log(scrollbarWidth)
        //if(scrollAmount <= this.$refs.sliders.scrollHeigth - this.$refs.sliders.clientHeigth) {
          this.$refs.sliders.scrollTo({
            top: 250, // c'est la taille idéale // il faut que cette taille augmente a chaque input
            behavior: "smooth"
          });
       // }
      }
    },

    scrollToTop(e) { 
      if(e.key === "a"){ // key pour le dev
        this.$refs.sliders.scrollTo({ // scroll to permet de passer des proprieter css de la scroll bar
          left: 0,
          top: -6000,
          behavior: "smooth"
        });
      }
    },
////////////////////////////////////////////////////////

///// pour la classe focus du carrousel //////
// ont veut que par défaut l index du carrousel = current index et cette card a la class focus (bord bleu) //
// si on descend indexCaroussel +1 si ont monte index carroussel -1 //
// et la classe focus s'enléve et se met sur le nouvel index //
// quand ont appuis sur enter la cards avec la class focus remplace le current index avec son index // 
// le carrousel disparaît//
// la chaîne change // 
// suite logique l'infolight apparait //
///////////////////////////////////////////////////////////////
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
  scroll-behavior: autox;
////////////////////////
  // &::-webkit-scrollbar{
  //   display: none;
  // }
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
