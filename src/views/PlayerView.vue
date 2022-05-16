<template>
  <div class="player-view">
    <CustomPlayer :videoURL="videoURL" />
  </div>
</template>

<script>
// @ is an alias to /src
import CustomPlayer from "@/components/CustomPlayer.vue";

export default {
  components: {
    CustomPlayer,
  },
  data: () => ({
    videoURL:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  }),
  methods: {
    changeVideo(url) {
      this.videoURL = url;
    },
  },
};
</script>

<style lang="scss"></style>
