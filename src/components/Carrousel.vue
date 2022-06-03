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
import CarrouselSlide from "@/components/CarrouselSlides.vue"

export default {
  components: {
    CarrouselSlide
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
    //init currentslide //
    this.currentSlide = 0
  },

  computed: {
    channels: () => Store.getters.getChannels,
  },

  methods: {
///////// ici previous et next slide ///////////////////
  scrollToTop(e) { 
      if(e.key === "a"){ // key pour le dev
      //console.log(this.$refs.slider.scrollHeight)
      //console.log(this.$refs.slider.clientHeight)
        if(this.currentSlide < this.$refs.slider.scrollHeight){
            //console.log(this.currentSlide)
            this.$refs.slider.scrollTo({
              top: this.currentSlide = this.currentSlide - this.oneSlide,
              behavior: "smooth"
            });
        } else if(this.currentSlide > this.$refs.slider.scrollHeight) {
          // console.log(this.$refs.slider.scrollHeight)
          // console.log(this.$refs.slider.clientHeight)
          // console.log(this.$refs.slider.scrollHeight - (this.$refs.slider.clientHeight + this.oneSlide))// 490 c'est les margin 
            this.$refs.slider.scrollTo({
              top: this.currentSlide = this.$refs.slider.scrollHeight - (this.$refs.slider.clientHeight + this.oneSlide), // essayer math floor car je doit etre vers les 6111 - onSlide et pas 7111
              behavior: "smooth"
            });
        }
      } 
    },

    scrollToBottom(e) {
      if(e.key === "q"){  // key pour le dev
        if(this.currentSlide >= 0){
          this.$refs.slider.scrollTo({
            top: this.currentSlide = this.currentSlide + this.oneSlide,
            behavior: "smooth"
          });
        } else if(this.currentSlide < 0) {
          this.$refs.slider.scrollTo({
            top: this.currentSlide = this.oneSlide,
            behavior: "smooth"
          });
        }
      }
    },
  }
////////////////////////////////////////////////////////

///// pour la classe focus du carrousel //////
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
