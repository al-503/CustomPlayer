<template>
  <div class="progress">
    <div id="startTime">{{ programme[0].startTime }}</div>
    <div ref="time" id="time" :currentTimeSet="this.setCurrentTime()">
      {{ currentTimeSet }}
      <fa class="caret-down" icon="caret-down" />
    </div>
    <progress ref="progress" id="progress" value="0" min="0">
      <div ref="progressbar" id="progress-bar"></div>
    </progress>
    <div id="endTime">{{ programme[0].endTime }}</div>
  </div>
</template>
<script>
import Store from "@/store";

export default {
  computed: {
    programme: () => Store.getters.getProgramme,
    videoDuration: () => Store.getters.getVideoDuration,
    videoCurrentTime: () => Store.getters.getVideoCurrentTime,
  },
  data: () => ({
    duration: null,
    currentTime: null,
    progress: null,
    progressBar: null,
    currentTimeSet: null,
    timePosition: null,
    toggle: 0,
  }),
  mounted() {
    this.progress = this.$refs.progress;
    this.progressBar = this.$refs.progressbar;
    this.timePosition = this.$refs.time;
    // écoute le keyup de la touche "entrée" et appelle la méthode keyListenner
    document.addEventListener("keyup", (e) => this.keyListenner(e));
  },
  methods: {
    //méthode qui set currentTimeInSecond

    setCurrentTime() {
      let currentTimeInSeconds = Math.floor(this.videoCurrentTime);
      let hours = Math.floor(currentTimeInSeconds / 3600);
      let minutes = Math.floor((currentTimeInSeconds - hours * 3600) / 60);
      let seconds = currentTimeInSeconds - hours * 3600 - minutes * 60;

      hours = hours.toString().padStart(2, "0");
      minutes = minutes.toString().padStart(2, "0");
      seconds = seconds.toString().padStart(2, "0");

      this.currentTimeSet = hours + ":" + minutes + ":" + seconds;
    },
    // méthode qui gère la progression de la time bar
    setMaxProgress() {
      if (this.$refs.progress != null) {
        this.$refs.progress.setAttribute("max", this.videoDuration);
        this.progress.value = this.videoCurrentTime;
        this.progressBar.style.width =
          Math.floor((this.videoCurrentTime / this.videoDuration) * 100) + "%";
        if (this.timePosition != null) {
          this.timePosition.style.left =
            283 + 1290 * (this.videoCurrentTime / this.videoDuration) + "px";
          if (this.toggle == 1) {
            this.timePosition.style.visibility = "visible";
          } else {
            this.timePosition.style.visibility = "hidden";
          }
        }
      }
    },

    // Méthode de call back qui met à jour la progression de la time bar
    keyListenner(e) {
      if (e.key == "Enter" || e.key == "p" || e.key == "n") {
        if (this.toggle == 0) {
          this.toggle = 1;
        }
        this.setMaxProgress();
      }
    },
  },
};
</script>

<style lang="scss" scope>
#startTime,
#endTime {
  color: rgb(255, 255, 255);
  font-size: 50px;
  font-family: "Inter", sans-serif;
  font-weight: 100;
}

.progress {
  width: 1920px;
  height: 172px;
  position: absolute;
  left: 0px;
  bottom: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: rgba(63, 62, 62, 0.69);
  z-index: 1;
}

#progress {
  margin: 0 100px;
}

#progress[value] {
  color: grey;
  position: relative;
  width: 1290px;
  height: 30px;
  border: solid 4px rgb(255, 255, 255);
  border-radius: 30px;
}

#progress[value]::-webkit-progress-bar {
  background-color: grey;
  border-radius: 30px;
}

#progress[value]::-webkit-progress-value {
  background-image: linear-gradient(
    90deg,
    rgb(65, 71, 197) 43.75%,
    rgb(0, 178, 241) 100%
  );
  border-radius: 40px;
}

#progress-bar {
  border-radius: 30px;
}

#time {
  color: rgb(255, 255, 255);
  font-size: 20px;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  z-index: 1000;
  position: absolute;
  top: 19px;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  visibility: hidden;
}
.caret-down {
  height: 30px;
}
</style>
