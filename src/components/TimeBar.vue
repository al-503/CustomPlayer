<template>
  <div class="progress">
    <div id="startTime">21H00</div>
    <progress ref="progress" id="progress" value="0" min="0">
      <span ref="progressbar" id="progress-bar"></span>
    </progress>
    <div id="endTime">22H00</div>
  </div>
</template>
<script>
export default {
  props: {
    videoCurrentTime: {
      type: Number,
      required: false,
    },
    videoDuration: {
      type: Number,
      required: false,
    },
  },
  data: () => ({
    duration: null,
    currentTime: null,
    progress: null,
    progressBar: null,
  }),
  mounted() {
    this.progress = this.$refs.progress;
    this.progressBar = this.$refs.progressbar;
    // écoute le keyup de la touche "entrée" et appelle la méthode keyListenner
    document.addEventListener("keyup", (e) => this.keyListenner(e));
  },
  methods: {
    // méthode qui gère la progression de la time bar
    setMaxProgress() {
      if (this.$refs.progress != null) {
        this.$refs.progress.setAttribute("max", this.videoDuration);
        this.progress.value = this.videoCurrentTime;
        this.progressBar.style.width =
          Math.floor((this.videoCurrentTime / this.videoDuration) * 100) + "%";
      }
    },
    // Méthode de call back qui met à jour la progression de la time bar
    keyListenner(e) {
      if (e.key == "Enter") {
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
</style>
