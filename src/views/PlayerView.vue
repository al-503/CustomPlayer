<template>
  <div class="player-view">
    <router-view />
    <CustomPlayer :currentFlux="programme[0].sources">
      <InfoLight v-if="true" />
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
    document.addEventListener("keydown", (e) => this.ChannelChange(e));
    document.addEventListener("keydown", (e) =>
      this.ChannelChangeWithNumKey(e)
    );
  },

  computed: {
    programme: () => Store.getters.getProgramme,
  },
  data: () => ({
    tabOfInput: [],
    channelNumberInput: null,
    waitingNextInput: null,
    waitingChannelNumbers: null,
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
    manageTabOfInput() {
      if (this.tabOfInput.length == 2) {
        this.channelNumberInput = this.tabOfInput[0] + "" + this.tabOfInput[1];
      } else if (this.tabOfInput.length == 1) {
        this.channelNumberInput = this.tabOfInput[0];
      }
    },

    forEachChannel() {
      channels.forEach((channel) =>
        checkingMatch(channel.number, channel.sources)
      );
    },

    checkingMatch(channelNumber, channelSource) {
      if (this.channelNumberInput == channelNumber) {
        /**
         *  video.pause();
         *   source.setAttribute("src", channelSource);
         *    video.load();
         *     video.play();
         */
        this.tabOfInput = [];
      } else {
        console.log("chaine non trouvée");
        this.tabOfInput = [];
      }
    },

    ChannelChangeWithNumKey(e) {
      if (!isNaN(e.key)) {
        if (this.tabOfInput.length < 2) {
          this.tabOfInput.push(e.key);
          this.waitingNextInput = setTimeout(this.manageTabOfInput, 3000);
          this.waitingChannelNumbers = setTimeout(this.forEachChannel, 3000);
        }
      }
    },
  },
};
</script>
