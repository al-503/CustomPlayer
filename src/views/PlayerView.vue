<template>
  <div class="player-view">
    <router-view />
    <CustomPlayer :currentFlux="programme[0].sources">
      <InfoLight v-if="infoDisplayed"/>
    </CustomPlayer>
  </div>
</template>

<script>
import Store from "@/store";

import CustomPlayer from "@/components/CustomPlayer.vue";
import InfoLight from "@/components/InfoLight.vue";

export default {
  components: {
    CustomPlayer,
    InfoLight,
  },

  created() {
     // changement de chaine et des infos //
    document.addEventListener("keydown", (e) => this.ChannelChange(e));
     // display de l'info light //
    document.addEventListener("keydown", (e) => this.showInfoLight(e));
     // changement de chaine par num //
    document.addEventListener("keydown", (e) => this.ChannelChangeWithNumKey(e));
  },

  computed: {
    programme: () => Store.getters.getProgramme,
    infoDisplayed: () => Store.state.defaultDisplay,
    channels: () => Store.getters.getChannels,
    newIndex: () => Store.getters.getNewIndex,
    changeSrc: () => Store.getters.getChangeSrc,
  },
  
  data: () => ({
    tabOfInput: [],
    channelNumberInput: null,
    waitingNextInput: null,
    waitingChannelNumbers: null,
    matchSucces: false,
  }),

  methods: {
    ChannelChange(e) {
      if (e.key == "PageUp") {
        if (Store.state.currentIndex === 29) {
          Store.state.currentIndex = 0;
        } else {
          // console.log(Store.state.currentIndex = Store.state.currentIndex + 1)
          Store.commit("KeyLeft");
        }
      } else if (e.key == "PageDown") {
        if (Store.state.currentIndex === 0) {
          // si currentIndex = 0 alors faire current index = array.length
          Store.state.currentIndex = 29;
        } else {
          //console.log(Store.state.currentIndex = Store.state.currentIndex - 1)
          Store.commit("KeyRight");
        }
      }
    },

//// ici les fonctions pour faire apparaître l'info light ////

    ResetTimeoutInfoLight() {
      clearTimeout(this.infoLightVisible);
    },

    stopInfoLight() {
      Store.commit('LightInfoDefault')
    },

    showInfoLight (e) {
      if(e.key === "ArrowUp") {
        Store.commit('LightInfoDisplay');
        if( this.infoLightVisible != null) {
          console.log("info light" + this.infoLightVisible)
          this.ResetTimeoutInfoLight();
        }
        this.infoLightVisible = setTimeout(this.stopInfoLight, 4000);
      }
    }
    //////////////////////////////////////////////////////////////////
    
  //// ici gestion des changement de chaîne par num ////
    
    // manageTabOfInput() a pour but de transformer le contenu du tableau tabOfInput en nombre exploitable
    manageTabOfInput() {
      if (this.tabOfInput.length == 2) {
        this.channelNumberInput = this.tabOfInput[0] + "" + this.tabOfInput[1];
      } else if (this.tabOfInput.length == 1) {
        this.channelNumberInput = this.tabOfInput[0];
      }
      this.matchSucces = false;
    },

    // forEachChannel est une fonciton qui parcours toutes les channels et qui regarde si l'input de l'utilisateur et appel la fonction checkingMatch
    forEachChannel() {
      this.channels.forEach((channel) =>
        this.checkingMatch(channel.number, channel.programme[0].sources)
      );
      if (this.matchSucces == false) {
        console.log("chaine pas trouvée");
      }
      this.matchSucces == false;
    },

    // checkinMatch() regarde si l'input de l'utilisateur match avec un numéros de chaine contenu dans channels
    checkingMatch(channelNumber, channelSource) {
      if (this.channelNumberInput == channelNumber) {
        this.matchSucces = true;
        this.$store.commit("SET_CURRENT_INDEX", this.channelNumberInput);
        this.$store.commit("SET_CHANGE_SRC", true);
      }

      this.tabOfInput = [];
    },

    ChannelChangeWithNumKey(e) {
      // on regarde si l'input reçu est de type Number, si oui, on rentre
      if (!isNaN(e.key)) {
        // On regarde si le tableau tabOfInput contient moin de 2 elements, si oui on rentre
        if (this.tabOfInput.length < 2) {
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
