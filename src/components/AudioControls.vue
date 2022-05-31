  <template>
  <div class="audio-controls">
    <div class="volumeBarContainer">
      <progress class="volumeBar" ref="volumeBar" value="0" min="0" max="1">
        <span class="currentVolume" ref="currentVolume"></span>
      </progress>
    </div>
  </div>
  <div class="greyBackground"></div>
</template>

<script>
export default {
  props: {
    currentVolumeLevel: {
      type: Number,
      required: false,
    },
    maxVolumeLevel: {
      type: Number,
      required: false,
    },
  },
  data: () => ({
    volumeBar: null,
    currentVolume: null,
  }),
  mounted() {
    this.volumeBar = this.$refs.volumeBar;
    this.currentVolume = this.$refs.currentVolume;
    this.volumeBar.value = this.currentVolumeLevel;
    document.addEventListener("keyup", (e) => this.volumeKeyListener(e));
  },

  methods: {
    volumeChange() {
      if ((this.currentVolume.style.width = 0 + "%")) {
        this.currentVolume.style.width = 5 + "%";
      }
      if (this.$refs.volumeBar != null) {
        this.$refs.volumeBar.setAttribute("max", this.maxVolumeLevel);
        this.volumeBar.value = this.currentVolumeLevel;
        this.currentVolume.style.width =
          Math.floor((this.currentVolumeLevel / this.maxVolumeLevel) * 100) +
          "%";
      }
    },

    volumeKeyListener(e) {
      if (e.key === "+" || e.key === "-") {
        this.volumeChange();
      }
    },
  },
};
</script>

<style lang="scss">
.volumeBarContainer {
  position: absolute;
  bottom: 540px;
  // top: 470px;
  // bottom: 54%;
  // left: 81.5%;
  right: -7.5%;
}

.volumeBar {
  position: relative;
  width: 500px;
  border: solid 3px rgb(255, 255, 255);
  border-radius: 15px;
  transform: rotate(270deg);
  z-index: 1;
}

.volumeBar[value] {
  position: relative;
  height: 20px;
  border: solid 3px rgb(255, 255, 255);
  border-radius: 15px;
}

.volumeBar[value]::-webkit-progress-bar {
  background-color: #d4d3d3;
  border-radius: 15px;
}

.volumeBar[value]::-webkit-progress-value {
  background-image: linear-gradient(
    90deg,
    rgb(65, 71, 197) 30%,
    rgb(0, 178, 241) 100%
  );
  border-radius: 40px;
}

.volume-icon {
  z-index: 1;
}
.currentVolume {
  border-radius: 15px;
}

.greyBackground {
  position: absolute;
  top: 0;
  right: 0;
  width: 20%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(132, 132, 132, 0) 0%,
    rgba(69, 69, 69, 0.4) 51.56%,
    rgba(0, 0, 0, 0.6) 100%
  );
  border-radius: 2px;
}
</style>