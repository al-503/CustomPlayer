<template>
  <div class="custom-player">
    <video ref="videoBalise" loop muted>
      <source :src="currentFlux" type="video/mp4" />
    </video>
    <div v-if="!isPlaying && replay" class="play-pause-contener">
      <Pause :iconName="iconName" />
    </div>
    <transition name="fade">
      <div v-if="isPlaying && showing" class="play-pause-contener">
        <Play :iconName="iconName" />
      </div>
    </transition>
  </div>
  <div v-if="(!isPlaying && replay) || timeManageTimeBarDisplay">
    <TimeBar />
  </div>
  <transition name="fading">
    <div v-if="this.toggleBarSoundDisplay">
      <div class="audio-icon-container">
        <AudioIcons :volumeIcon="volumeIcon" />
      </div>
      <div class="audioControls">
        <AudioControls
          :currentVolumeLevel="currentVolumeLevel"
          :maxVolumeLevel="maxVolumeLevel"
        />
      </div>
    </div>
  </transition>
  <div v-if="timeManageTimeBarDisplay">
    <TimeManaging />
  </div>
  <slot></slot>
  <slot></slot>
</template>

<script>
import Store from "@/store";
import Pause from "./Pause.vue";
import Play from "./Play.vue";
import TimeBar from "./TimeBar.vue";
import AudioControls from "@/components/AudioControls.vue";
import AudioIcons from "@/components/AudioIcons.vue";
import TimeManaging from "@/components/TimeManaging.vue";

export default {
  components: {
    Pause,
    Play,
    TimeBar,
    AudioControls,
    AudioIcons,
    TimeManaging,
  },
  props: {
    currentFlux: {
      type: String,
      require: true,
    },
    pressedKeyCode: {
      type: Number,
      default: null,
    },
  },
  /* **data**
    isPlaying: false, => passe sur true si la vidéo est jouée
    isPlayAgain: false, => passe sur true si la video est jouée après avoir   été arrêtée
    videoSrc: null, => contient l'url de la vidéo
    iconName: null, => contient le nom de la font-awsome ("play" ou "pause")
    videoBalise: null, => contient la balise <video>
    replay: false, => passe sur true si la video est joué après avoir été arrêtée
    showing: true, 
    timeout: null, => contient le settime out
    videoDuration: null, => contient la durée totale de la vidéo
    videoCurrentTime: null, => contient l'avancement de la vidéo
    timePassed: 0, => contient durée en secondes depuis lancement application
   */

  data: () => ({
    isPlaying: false,
    isPlayAgain: false,
    iconName: null,
    volumeIcon: null,
    videoBalise: null,
    replay: false,
    showing: true,
    timeout: null,
    timebar: null,
    videoDuration: null,
    videoCurrentTime: null,
    currentVolumeLevel: null,
    maxVolumeLevel: null,
    toggleBarSoundDisplay: false,
    timeManageTimeBarDisplay: false,
    errorMessageUnAssignedInputlDisplaySetTimeOut: null,
    timePassed: 0,
  }),

  mounted() {
    // Timer démarrant au montage de la vue (en secondes)
    this.timer();
    // this.keepTimePassed();

    // Lorsque l'élément est monté, la source de la vidéo puis on met la vidéo en play
    this.$refs.videoBalise.play();
    this.$refs.videoBalise.muted = !this.$refs.videoBalise.muted; //cette ligne empeche de lancer la vidéo en autoplay
    this.$refs.videoBalise.volume = 0.5;
    // On écoute ici l'ensemble des touches du clavier et on appelle la fonction qui KeyListenner qui regarde quelle touche a été appuyée
    document.addEventListener("keydown", (e) => this.keyListenner(e));
    document.addEventListener("keydown", (e) => this.keyPageTurn(e));
    document.addEventListener("keydown", (e) => this.volumeKeyListener(e));
    document.addEventListener("keydown", (e) => this.timeManagement(e));
    document.addEventListener("keydown", (e) =>
      this.checkingIfInputGetAssigned(e)
    );
    document.addEventListener("keydown", (e) => this.keepTimePassed(e));

    this.currentTimeTimeout = setInterval(
      () => this.videoCurrentTimerefresh(),
      1000
    );
  },
  beforeDestroy() {
    clearInterval(this.currentTimeTimeout);
    clearInterval(this.timeInSeconds);
  },

  updated() {
    if (this.changeSrc == true) {
      if (this.videoIsOnPause) {
        this.toggleVideoPlay();
      }
      this.$store.commit("SET_CHANGE_SRC", false);
      this.$refs.videoBalise.pause();
      this.$refs.videoBalise.load();
      this.$refs.videoBalise.play();
      this.$store.commit("SET_CHANGE_SRC", false);
      // this.keepTimePassed();
    }
  },

  computed: {
    changeSrc: () => Store.getters.getChangeSrc,
    videoIsOnPause: () => Store.getters.getVideoIsOnPause,
    assignedStringInputs: () => Store.getters.getAssignedInputs,
    //checkCurrentTime: () => Store.getters.getVideoCurrentTime,
  },

  methods: {
    hidingErrorMessageUnassignedInput() {
      this.$store.commit("SET_CHANGE_SHOW_ERROR_MESSAGE", false);
    },
    //méthode qui regarde si l'input est assigné
    checkingIfInputGetAssigned(e) {
      let inputAssigned = false;
      this.assignedStringInputs.forEach((element) => {
        if (e.key == element) {
          inputAssigned = true;
        }
      });
      if (!inputAssigned) {
        this.$store.commit("SET_CHANGE_ERROR_MESSAGE", "Touche non assignée");
        this.$store.commit("SET_CHANGE_SHOW_ERROR_MESSAGE", true);
        if (this.errorMessageUnAssignedInputlDisplaySetTimeOut != null) {
          clearTimeout(this.errorMessageNoChannelDisplaySetTimeOut);
        }
        this.errorMessageUnAssignedInputlDisplaySetTimeOut = setTimeout(
          this.hidingErrorMessageUnassignedInput,
          3000
        );
      }
    },
    // la méthode show fait un Call back de la méthode hide au bout de 0.5 secondes
    show() {
      this.timeout = setTimeout(this.hide, 500);
    },
    // La méthode hide fait disparaître le composant play (elle passe this.showing sur false ce qui empeche de passer le v-if)
    hide() {
      this.showing = false;
      clearTimeout(this.timeout);
    },

    // La méthode toggleVideoPlay regarde si la video est jouée. Si elle est joué, elle l'a met en pause et inversement
    toggleVideoPlay() {
      if (this.$refs?.videoBalise !== null && this.$refs?.videoBalise.paused) {
        this.isPlaying = true;
        this.isPlayAgain = true;
        this.$store.commit("SET_VIDEO_IS_ON_PAUSE", false);
        this.$refs.videoBalise.play();
        this.show();
      } else {
        this.isPlaying = false;
        this.$store.commit("SET_VIDEO_IS_ON_PAUSE", true);
        this.isPlayAgain = false;
        this.$refs.videoBalise.pause();
        this.showing = true;
      }
      this.replay = true;
      this.dynamicIconSetting(this.isPlayAgain);
    },

    // Cette méthode envoie dynamiquement aux enfant play/pause le nom de l'icone fontawsome à afficher
    dynamicIconSetting(isPlayAgain) {
      if (isPlayAgain) {
        this.iconName = "pause";
      } else {
        this.iconName = "play";
      }
    },

    // Cette méthode regarder si la touche "entrée" est down
    keyListenner(e) {
      if (e.key == "Enter") {
        // on met à jour les valeurs videoDuration et videoCurrentTime qui sont envoyées par la suite au composant enfant timebar
        this.videoDuration = this.$refs.videoBalise.duration;
        // méthode qui gère le "play/pause"
        this.toggleVideoPlay();
      }
    },

    // keyPageTurn gère le changement de la source de la vidéo lorsque l'utilisateur change de chaîne
    keyPageTurn(e) {
      if (e.key == "PageUp" || e.key == "PageDown") {
        if (this.videoIsOnPause) {
          this.toggleVideoPlay();
        }
        this.$refs.videoBalise.pause();
        this.$refs.videoBalise.load();
        this.$refs.videoBalise.play();
      }
    },

    //////////////// Audio /////////////////////////////

    myStopFunction() {
      clearTimeout(this.barSoundVisible);
    },

    disparition() {
      this.toggleBarSoundDisplay = false;
    },

    alterVolume(dir) {
      const currentVolume = parseFloat(this.$refs.videoBalise.volume).toFixed(
        2
      );
      console.log("cur " + currentVolume);
      if (dir === "+") {
        if (currentVolume < 0.95) {
          this.$refs.videoBalise.volume += 0.05;
          this.iconDisplay(this.$refs.videoBalise.volume);
        } else if (currentVolume == 0.95) {
          this.$refs.videoBalise.volume = 1;
          this.iconDisplay(this.$refs.videoBalise.volume);
        }
      } else if (dir === "-") {
        if (currentVolume > 0.05) {
          this.$refs.videoBalise.volume -= 0.05;
          this.iconDisplay(this.$refs.videoBalise.volume);
        } else if (currentVolume == 0.05) {
          this.$refs.videoBalise.volume = 0;
          this.iconDisplay(this.$refs.videoBalise.volume);
        }
      }
      console.log(this.$refs.videoBalise.volume);
    },

    volumeKeyListener(e) {
      if (e.key === "+" || e.key === "-") {
        this.toggleBarSoundDisplay = true;
        if (this.barSoundVisible != null) {
          this.myStopFunction();
        }
        this.barSoundVisible = setTimeout(this.disparition, 2000);
      }
      if (e.key === "+") {
        this.alterVolume("+");
      }
      if (e.key === "-") {
        this.alterVolume("-");
      }
      this.currentVolumeLevel = this.$refs.videoBalise.volume;
    },
    iconDisplay(value) {
      if (value < 0.04) {
        this.volumeIcon = "volume-xmark";
      }
      if (value >= 0.04 && value < 0.3) {
        this.volumeIcon = "volume-off";
      }
      if (value >= 0.3 && value < 0.75) {
        this.volumeIcon = "volume-low";
      }
      if (value >= 0.75) {
        this.volumeIcon = "volume-high";
      }
    },
    //////////////////// Time management /////////////////////////////

    removeTimeBar() {
      this.timeManageTimeBarDisplay = false;
    },

    clearTimeBarVisibleTimeOut() {
      clearTimeout(this.timeBarVisible);
    },

    videoCurrentTimerefresh() {
      if (this.$refs.videoBalise != null) {
        this.$store.commit(
          "SET_VIDEO_CURRENT_TIME",
          this.$refs.videoBalise.currentTime
        );

        this.$store.commit(
          "SET_VIDEO_DURATION",
          this.$refs.videoBalise.duration
        );
      }
    },

    timeManagement(e) {
      if (e.key == "p" || e.key == "n") {
        this.timeManageTimeBarDisplay = true;
        if (this.timeBarVisible !== null) {
          this.clearTimeBarVisibleTimeOut();
        }
        this.timeBarVisible = setTimeout(this.removeTimeBar, 3000);
      }

      if (e.key == "p") {
        if (this.$refs.videoBalise.currentTime > 10) {
          this.$refs.videoBalise.currentTime -= 10;
        } else {
          this.$refs.videoBalise.currentTime = 0;
        }
      }
      if (e.key == "n") {
        this.$refs.videoBalise.currentTime += 10;
      }
    },
    //////////////////// Keep Time Passed /////////////////////////////

    timePassing() {
      this.timePassed += 1;
      console.log(this.timePassed);
    },
    timer() {
      this.timeInSeconds = setInterval(this.timePassing, 1000);
    },
    changeTime() {
      this.$refs.videoBalise.currentTime = this.timePassed;
    },
    keepTimePassed(e) {
      let regInput = new RegExp("^[0-9]+$");
      if (e.key == "PageUp" || e.key == "PageDown") {
        this.changeTime();
      }
      if (regInput.test(e.key)) {
        setTimeout(this.changeTime(), 3000);
      }
    },
  },
};
</script>

<style lang="scss" scope>
.custom-player {
  margin: 0 auto;
  max-width: 100vw;
  overflow: hidden;
}

video {
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  object-fit: fill;
  &::-webkit-scrollbar {
    display: none;
  }
  position: absolute;
  z-index: -1;
}

.testt {
  width: 100px;
  height: 100px;
  background-color: white;
}

.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
