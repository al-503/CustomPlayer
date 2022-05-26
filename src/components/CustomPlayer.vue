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
  <div v-if="!isPlaying && replay">
    <TimeBar
      :videoCurrentTime="videoCurrentTime"
      :videoDuration="videoDuration"
    />
  </div>
  <div class="audioControls">
    <AudioControls
      :currentVolumeLevel="currentVolumeLevel"
      :maxVolumeLevel="maxVolumeLevel"
    />
  </div>
  <slot></slot>
</template>

<script>
import Pause from "./Pause.vue";
import Play from "./Play.vue";
import TimeBar from "./TimeBar.vue";
import AudioControls from "@/components/AudioControls.vue";

export default {
  components: {
    Pause,
    Play,
    TimeBar,
    AudioControls,
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
   */

  data: () => ({
    isPlaying: false,
    isPlayAgain: false,
    iconName: null,
    videoBalise: null,
    replay: false,
    showing: true,
    timeout: null,
    timebar: null,
    videoDuration: null,
    videoCurrentTime: null,
    currentVolumeLevel: null,
    maxVolumeLevel: null,
  }),

  mounted() {
    // Lorsque l'élément est monté, la source de la vidéo puis on met la vidéo en play
    this.$refs.videoBalise.play();
    this.$refs.videoBalise.muted = !this.$refs.videoBalise.muted; //cette ligne empeche de lancer la vidéo en autoplay
    this.$refs.videoBalise.volume = 0.5;
    // On écoute ici l'ensemble des touches du clavier et on appelle la fonction qui KeyListenner qui regarde quelle touche a été appuyée
    document.addEventListener("keydown", (e) => this.keyListenner(e));
    document.addEventListener("keydown", (e) => this.keyPageTurn(e));
    document.addEventListener("keydown", (e) => this.volumeKeyListener(e));
  },
  // beforeUpdate() {
  //   this.$refs.videoBalise.pause();
  //   this.$refs.videoBalise.load();
  //   this.$refs.videoBalise.play();
  // },

  methods: {
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
        this.$refs.videoBalise.play();
        this.show();
      } else {
        this.isPlaying = false;
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
        this.videoCurrentTime = this.$refs.videoBalise.currentTime;
        console.log(this.videoDuration);
        console.log(this.videoCurrentTime);
        // méthode qui gère le "play/pause"
        this.toggleVideoPlay();
      }
    },

    // keyPageTurn gère le changement de la source de la vidéo lorsque l'utilisateur change de chaîne
    keyPageTurn(e) {
      if (e.key == "PageUp" || e.key == "PageDown") {
        this.$refs.videoBalise.pause();
        this.$refs.videoBalise.load();
        this.$refs.videoBalise.play();
      }
    },

    ///////////
    // Audio //
    //////////

    alterVolume(dir) {
      // const currentVolume = Math.floor(this.$refs.videoBalise.volume * 10) / 10;
      const currentVolume = parseFloat(this.$refs.videoBalise.volume).toFixed(
        2
      );
      console.log("cur " + currentVolume);
      if (dir === "+") {
        if (currentVolume < 0.95) {
          this.$refs.videoBalise.volume += 0.05;
        } else if (currentVolume == 0.95) {
          this.$refs.videoBalise.volume = 1;
        }
      } else if (dir === "-") {
        if (currentVolume > 0.05) {
          this.$refs.videoBalise.volume -= 0.05;
        } else if (currentVolume == 0.05) {
          this.$refs.videoBalise.volume = 0;
        }
      }
      console.log(this.$refs.videoBalise.volume);
    },

    volumeKeyListener(e) {
      if (e.key === "+") {
        this.alterVolume("+");
      }
      if (e.key === "-") {
        this.alterVolume("-");
      }
      this.currentVolumeLevel = this.$refs.videoBalise.volume;
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
