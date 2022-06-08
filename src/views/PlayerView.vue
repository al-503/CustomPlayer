<template>
  <div class="player-view">
    <router-view />
    <CustomPlayer :currentFlux="programme[0].sources">
      <InfoLight
        v-if="
          ((infoDisplayed && !videoIsOnPause) || displayInfoLightArrival) &&
          !infoMaxDisplayed
        "
      />
      <transition name="fading">
        <DisplayInputNumber v-if="inputDisplay" />
      </transition>
      <InfoMax v-if="true && !videoIsOnPause" />
      <ErrorMessage v-if="showErrorMessage && !videoIsOnPause" />
      <transition name="slide">
        <Carrousel v-if="carrouselDisplay" />
      </transition>
    </CustomPlayer>
    <!-- <ContentAdult v-if="isVideoAdult" /> -->
  </div>
</template>

<script>
import Store from "@/store";

import CustomPlayer from "@/components/CustomPlayer.vue";
import InfoLight from "@/components/InfoLight.vue";
import InfoMax from "@/components/InfoMax.vue";
import DisplayInputNumber from "@/components/DisplayInputNumber.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";
import Carrousel from "@/components/Carrousel.vue";
// import ContentAdult from "@/components/ContentAdult.vue";

export default {
  components: {
    CustomPlayer,
    InfoLight,
    InfoMax,
    DisplayInputNumber,
    ErrorMessage,
    Carrousel,
    //  ContentAdult
  },

  created() {
    // changement de chaine et des infos //
    document.addEventListener("keydown", (e) => this.ChannelChange(e));
    // display de l'info light //
    document.addEventListener("keydown", (e) => this.showInfoLight(e));
    // display de l'info max
    document.addEventListener("keydown", (e) => this.showInfoMax(e));
    // changement de chaine par num //
    document.addEventListener("keydown", (e) =>
      this.ChannelChangeWithNumKey(e)
    );
    // disparition de l'infoLight pour InputNumber //
    document.addEventListener("keydown", (e) => this.switchDisplay(e));
    // apparition du carrousel //
    document.addEventListener("keydown", (e) => this.showCarrousel(e));
  },

  mounted() {
    setTimeout(() => {
      this.$store.commit("SET_DISPLAY_INFOLIGHT_ARRIVAL", false);
    }, 4000);
  },

  computed: {
    // display de l info light a l'arriver sur la chaîne //
    displayInfoLightArrival: () => Store.getters.getdisplayInfoLightArrival,
    // ajout des programmes //
    programme: () =>  Store.getters.getProgramme,
    // pour display l'info ligtht
    infoDisplayed: () => Store.state.defaultDisplay,
    // fonction forEach channels
    channels: () => Store.getters.getChannels,
    //display de l'info max //
    infoMaxDisplayed: () => Store.state.defaultDisplayInfoMax,
    // display des messages d'erreur //
    showErrorMessage: () => Store.getters.getShowErrorMessage,
    //pour display le carrousel //
    carrouselDisplay: () => Store.state.carrouselDisplay,

    newIndex: () => Store.getters.getNewIndex,
    changeSrc: () => Store.getters.getChangeSrc,
    videoIsOnPause: () => Store.getters.getVideoIsOnPause,
    isVideoAdult: () => Store.getters.getAdultStatus,
  },

  data: () => ({
    tabOfInput: [],
    channelNumberInput: null,
    waitingNextInput: null,
    waitingChannelNumbers: null,
    matchSucces: false,
    checkingMatchToggle: true,
    inputDisplay: true,
    errorMessageNoChannelDisplaySetTimeOut: null,
  }),

  methods: {
    ChannelChange(e) {
      if (e.key == "PageUp") {
        if (Store.state.currentIndex === 29) {
          Store.state.currentIndex = 0;
          this.DisplayedInfoLight();
        } else {
          // console.log(Store.state.currentIndex = Store.state.currentIndex + 1)
          Store.commit("KeyLeft");
          this.$store.commit("CarrouselHide")
          this.DisplayedInfoLight();
        }
      } else if (e.key == "PageDown") {
        if (Store.state.currentIndex === 0) {
          // si currentIndex = 0 alors faire current index = array.length
          Store.state.currentIndex = 29;
          this.DisplayedInfoLight();
        } else {
          //console.log(Store.state.currentIndex = Store.state.currentIndex - 1)
          Store.commit("KeyRight");
          this.$store.commit("CarrouselHide")
          this.DisplayedInfoLight();
        }
      }
    },

    //// ici les fonctions pour faire apparaître l'info light ////

    DisplayedInfoLight() {
      Store.commit("LightInfoDisplay");
      if (this.infoLightVisible != null) {
        clearTimeout(this.infoLightVisible);
      }
      this.infoLightVisible = setTimeout(this.stopInfoLight, 4000);
    },

    stopInfoLight() {
      Store.commit("LightInfoDefault");
    },

    showInfoLight(e) {
      if (!this.carrouselDisplay) {
        if (e.key === "ArrowUp") {
          this.DisplayedInfoLight();
        }
      }
    },
    //// ici les fonctions pour faire disparaitre l'info light ////
    ////            si apparition de l'InputNumber             ////
    switchDisplay(e) {
      let regInput = new RegExp("^[0-9]+$");

      if (regInput.test(e.key)) {
        this.inputDisplay = true;
        this.stopInfoLight();
      }
    },

    //////////////////////////////////////////////////////////////////

    //// Gestion InfoMax ////

    DisplayInfoMax() {
      Store.commit("DisplayInfoMax");
    },
    HideInfoMax() {
      Store.commit("HideInfoMax");
    },

    showInfoMax(e) {
      if (e.key === "i" && !this.carrouselDisplay) {
        if (!this.carrouselDisplay) {
          if (this.infoMaxDisplayed == false) {
            this.DisplayInfoMax();
          } else {
            this.HideInfoMax();
          }
        }
      }
    },

    // ici fonction pour display le carrousel //
    showCarrousel(e) {
      if ( !this.carrouselDisplay && !this.infoDisplayed && !this.displayInfoLightArrival && !this.infoMaxDisplayed ) {
        if (e.key === "ArrowLeft") {
          Store.commit("CarrouselShow");
        }
      } else if (this.carrouselDisplay) {
        if (e.key === "ArrowLeft") {
          Store.commit("CarrouselHide");
        }
      }
    },
    ////////////////////////////////////////////

    //// ici gestion des changement de chaîne par num ////

    // manageTabOfInput() a pour but de transformer le contenu du tableau tabOfInput en nombre exploitable //
    manageTabOfInput() {
      if (this.tabOfInput.length == 3) {
        this.channelNumberInput =
          this.tabOfInput[0] +
          "" +
          this.tabOfInput[1] +
          "" +
          this.tabOfInput[2];
      }
      if (this.tabOfInput.length == 2) {
        this.channelNumberInput = this.tabOfInput[0] + "" + this.tabOfInput[1];
      } else if (this.tabOfInput.length == 1) {
        this.channelNumberInput = this.tabOfInput[0];
      }
      this.matchSucces = false;
    },

    hidingErrorMessageNoChannel() {
      this.$store.commit("SET_CHANGE_SHOW_ERROR_MESSAGE", false);
    },

    // forEachChannel est une fonciton qui parcours toutes les channels et qui regarde si l'input de l'utilisateur et appel la fonction checkingMatch //
    forEachChannel() {
      this.channels.forEach((channel) =>
        this.checkingMatch(channel.number, channel.programme[0].sources)
      );
      if (this.matchSucces == false) {
        this.$store.commit("SET_CHANGE_ERROR_MESSAGE", "Aucune chaîne trouvée");
        this.$store.commit("SET_CHANGE_SHOW_ERROR_MESSAGE", true);
        if (this.errorMessageNoChannelDisplaySetTimeOut != null) {
          clearTimeout(this.errorMessageNoChannelDisplaySetTimeOut);
        }
        this.errorMessageNoChannelDisplaySetTimeOut = setTimeout(
          this.hidingErrorMessageNoChannel,
          3000
        );
      }
      this.matchSucces == false;
    },

    checkingMatchToggleFalsy() {
      this.checkingMatchToggle = true;
    },

    // checkinMatch() regarde si l'input de l'utilisateur match avec un numéros de chaine contenu dans channels //
    checkingMatch(channelNumber, channelSource) {
      if (this.channelNumberInput == channelNumber) {
        this.matchSucces = true;
        let index = this.channels.findIndex(
          (channel) => channel.number == channelNumber
        );
        this.$store.commit("SET_CURRENT_INDEX", index);
        this.DisplayedInfoLight();
        if (this.checkingMatchToggle == true) {
          this.checkingMatchToggle = false;
          this.$store.commit("SET_CHANGE_SRC", true);
          setTimeout(this.checkingMatchToggleFalsy, 3000);
        }
      }

      this.tabOfInput = [];
    },

    ChannelChangeWithNumKey(e) {
      // on regarde si l'input reçu est de type Number, si oui, on rentre
      if (!isNaN(e.key)) {
        // On regarde si le tableau tabOfInput contient moin de 2 elements, si oui on rentre
        if (this.tabOfInput.length < 3) {
          // on met la clé de l'input reçu dans le tableau tabOfInput
          this.tabOfInput.push(e.key);

          this.waitingNextInput = setTimeout(this.manageTabOfInput, 3000);
          this.waitingChannelNumbers = setTimeout(this.forEachChannel, 3000);
        }
      }
    },
  },
};
</script>
<style lang="scss" scope>
.fading-leave-active {
  transition: opacity 0.25s;
}
.fading-enter,
.fading-leave-to {
  opacity: 0;
}
</style>