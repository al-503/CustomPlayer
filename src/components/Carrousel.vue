<template>
  <div class="carrousel">
      <div ref="slider" class="carrousel-slides">
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
import CarrouselSlide from "@/components/CarrouselSlide.vue"

export default {
  components: {
    CarrouselSlide
  },

  computed: {
    channels: () => Store.getters.getChannels,
    carrouselDisplay: () => Store.state.carrouselDisplay,
    currentChannelIndex: () => Store.state.currentIndex,
  },

  Data:() =>({
    currentSlide: 0
  }),

  created() {
     // slide vers le bas //
    document.addEventListener("keydown", (e) => this.scrollToBottom(e));
    // slide vers le haut // 
    document.addEventListener("keydown", (e) => this.scrollToTop(e));
  },

  mounted() {
    // scrollHeigth mesure tout les élément meme sortant / .length recup du nombre de slide de mon array //
    this.oneSlide = Math.ceil(this.$refs.slider.scrollHeight / this.channels.length);
    // calcul currentTop //
    this.currentSlideTop = this.oneSlide * this.currentChannelIndex;
    // current top  affiche la slide courrante a la pos en haut de l'écran//
    this.$refs.slider.scrollTop = this.currentSlideTop
    //init currentslide //
    this.currentSlide = this.$refs.slider.scrollTop // permet de bien exécuter le défilement
  },


  methods: {
///////// ici previous et next slide ///////////////////
  scrollToTop(e) { 
      if(e.key === "ArrowUp"){
        if(this.currentSlide < this.$refs.slider.scrollHeight){
          this.$refs.slider.scrollTo({
            top: this.currentSlide = this.currentSlide - this.oneSlide,
            behavior: "smooth"
          });
        } else if(this.currentSlide > this.$refs.slider.scrollHeight) {
            this.$refs.slider.scrollTo({
              top: this.currentSlide = this.$refs.slider.scrollHeight - (this.$refs.slider.clientHeight + this.oneSlide),
              behavior: "smooth"
            });
        }
      } 
    },

    scrollToBottom(e) {
      if(e.key === "ArrowDown"){
        if(this.currentSlide >= 0){
          this.$refs.slider.scrollTo({
            top: this.currentSlide = this.currentSlide + this.oneSlide,
            behavior: "smooth"
          });
        } else if(this.currentSlide < 0){
          this.$refs.slider.scrollTo({
            top: this.currentSlide = this.oneSlide,
            behavior: "smooth"
          });
        }
      }
    },
  }
////////////////////////////////////////////////////////
//// a faire ////

///// pour la class focus du carrousel //////
// ont veut que par défaut l index du carrousel = current index et cette card a la class focus (bord bleu) //
// si on descend indexCaroussel +1 si ont monte index carroussel -1 //
// et la classe focus s'enléve et se met sur le nouvel index //
// quand ont appuis sur enter la cards avec la class focus remplace le current index avec son index // 
// le carrousel disparaît//
// la chaîne change // 

// suite logique l'infolight apparait //
/////gérer les affichage et prioriter //// 
///////////////////////////////////////////////////////////////
}
</script>

<style lang="scss">
.carrousel-slides {
  height: 100%;
  position: absolute;
    left: 6%;
//// defini la scrollbar 
  overflow-x: hidden;
  overflow-y: scroll;
////////////////////////
  &::-webkit-scrollbar{
    display: none;
  }
}
.carrousel {
  position: absolute;
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
