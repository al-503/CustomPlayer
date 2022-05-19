  <template>
  <div class="audio-controls">
    <div class="volumeBarContainer">
      <progress class="volumeBar" ref="volumeBar" value="0" min="0" max="1">
        <span class="currentVolume" ref="currentVolume"></span>
      </progress>
      <!-- <fa class="volume-icon" :icon="volumeIcon" /> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // volumeIcon: {
    //   type: String,
    //   required: true,
    // },
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
    // iconTheme1: "volume-high",
    // iconTheme2: "volume",
    // iconTheme3: "volume-low",
    // iconTheme4: "volume-slash",
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
      if ((this.currentVolume.style.width = 0 + "%")) {
        this.currentVolume.style.width = 5 + "%";
      }
      this.$refs.volumeBar.setAttribute("max", this.maxVolumeLevel);
      this.volumeBar.value = this.currentVolumeLevel;
      this.currentVolume.style.width =
        Math.floor((this.currentVolumeLevel / this.maxVolumeLevel) * 100) + "%";
      // if (this.currentVolume.style.width >= 95 + "%") {
      //   this.currentVolume.style.width = 100 + "%";
      // }
      // if (this.currentVolume.style.width <= 5.5 + "%") {
      //   this.currentVolume.style.width = 0 + "%";
      // }
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
// .volume-icon {
// }
</style>