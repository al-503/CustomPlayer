<template>
  <div class="contenerProgress">
    <progress ref="progress" id="progress" value="0" min="0">
      <div ref="progressbar" id="progress-bar"></div>
    </progress>
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
    setInterval: null,
  }),
  mounted() {
    this.progress = this.$refs.progress;
    this.progressBar = this.$refs.progressbar;
    this.setInterval = setInterval(() => this.setMaxProgress(), 100);
    document.addEventListener("keyup", (e) => this.keyListen(e));
  },
  beforeUnmount() {
    clearInterval(this.setInterval);
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
    keyListen(e) {
      console.log(e.key);
      if (e.key == "ArrowUp") {
        this.setMaxProgress();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.contenerProgress {
  width: 387px;
  height: 29px;
  position: absolute;
  bottom: 15%;
  left: 16.6%;
}
#progress {
  margin: 0 100px;
}

#progress[value] {
  color: grey;
  position: relative;
  width: 387px;
  height: 29px;
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
