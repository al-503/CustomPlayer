  <template>
  <div class="audio-controls">
    <div class="volumeBarContainer">
      <!-- <div class="volumeBar" ref="volumeBar"></div>
      <div class="currentVolume" ref="currentVolume"></div> -->
      <progress class="volumeBar" ref="volumeBar" value="0" min="0">
        <span class="currentVolume" ref="currentVolume"></span>
      </progress>
    </div>
  </div>
</template>

<script>
var video = document.getElementsByTagName("video");
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
    document.addEventListener("keyup", (e) => this.volumeKeyListener(e));
  },

  methods: {
    volumeProgress() {
      if (this.$ref.volumeBar != null) {
        this.$refs.volumeBar.setAttribute("max", this.maxVolumeLevel);
        this.volumeBar.value = this.currentVolumeLevel;
        this.currentVolume.style.height =
          Math.floor((this.videoCurrentTime / this.videoDuration) * 100) + "%";
      }
      // this.height = video.volume * 500;
      // console.log(this.height);
      // return (progressBar.style.height = this.height + "px");
    },
  },
};
</script>

<style lang="scss">
.volumeBar[value] {
  position: relative;
  width: 20px;
  height: 500px;
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
    rgb(65, 71, 197) 43.75%,
    rgb(0, 178, 241) 100%
  );
  border-radius: 40px;
}
.currentVolume {
  border-radius: 15px;
}
</style>