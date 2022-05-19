  <template>
  <div class="audio-controls">
    <div class="volumeBarContainer">
      <progress class="volumeBar" ref="volumeBar" value="0" min="0" max="1">
        <span class="currentVolume" ref="currentVolume"></span>
      </progress>
      <!-- <fa class="volume-icon" :icon="volumeIcon" /> -->
    </div>
  </div>
  <div class="greyBackground"></div>
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
.volumeBarContainer {
  position: absolute;
  bottom: 50%;
  right: -150px;
  // z-index: 1;
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
// .volume-icon {
// }
</style>