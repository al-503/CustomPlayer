  <template>
  <div class="audio-controls">
    <div class="volumeBarContainer">
      <progress class="volumeBar" ref="volumeBar" value="0" min="0">
        <span class="currentVolume" ref="currentVolume"></span>
      </progress>
    </div>
  </div>
</template>

<script>
// var video = document.getElementsByTagName("video");
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
    this.volumeBar.value = 0.5;
    document.addEventListener("keyup", (e) => this.volumeKeyListener(e));
  },

  methods: {
    volumeChange() {
      this.$refs.volumeBar.setAttribute("max", this.maxVolumeLevel);
      this.volumeBar.value = this.currentVolumeLevel;
      this.currentVolume.style.width =
        Math.floor((this.currentVolumeLevel / this.maxVolumeLevel) * 100) + "%";
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
.volumeBar {
  position: relative;
  width: 500px;
  border: solid 3px rgb(255, 255, 255);
  border-radius: 15px;
  transform: rotate(270deg);
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
.currentVolume {
  border-radius: 15px;
}
</style>