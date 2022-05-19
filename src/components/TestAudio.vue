<template>
  <div class="audio-controls">
    <!-- <div class="volumeBarContainer"> -->
    <div class="volumeBar">
      <div class="backgroundColor"></div>
      <!-- <div class="currentVolume" :style="height"></div> -->
      <!-- <div class="currentVolume" :style="{ height: this.height + 'px' }"></div> -->
      <div class="currentVolume"></div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
    data() {
      return {

      };
    },
  props: {

  },
  methods: {},
  mounted() {
    video.muted = !video.muted;
    video.volume = 0.7;
  },
  computed: {
    volumeProgress() {
      const progressBar = document.getElementsByClassName("currentVolume");
      console.log(this.height)
      this.height = video.volume * 500;
      console.log(this.height)
      return (progressBar.style.height = this.height + "px");
    },
  },
};

window.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("video");

  const alterVolume = function (dir) {
    const currentVolume = Math.floor(video.volume * 10) / 10;
    if (dir === "+") {
      if (currentVolume < 1) video.volume += 0.05;
    } else if (dir === "-") {
      if (currentVolume > 0) video.volume -= 0.05;
    }
  };

  window.addEventListener("keypress", function (e) {
    if (e.key === "+") {
      alterVolume("+");
    }
    if (e.key === "-") {
      alterVolume("-");
    }
  });
});
</script>

<style lang="scss">
.volumeBar {
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  width: 12px;
  height: 500px;
  border-radius: 15px;
  border: 3px solid #ffffff;
  z-index: 1;
}

.volumeBar .currentVolume {
  position: absolute;
  width: 12px;
  height: 250px;
  border-radius: 15px;
  background-color: #00b2f1;
  z-index: 1;
}

.volumeBar .backgroundColor {
  position: absolute;
  width: 12px;
  height: 500px;
  border-radius: 15px;
  background-color: #d4d3d3;
  z-index: 1;
}
/* .volumeBarContainer {
    background: linear-gradient(to right, transparent 0%, black 100%);
} */
</style>
