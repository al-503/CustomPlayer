<template>
  <div class="player-view">
    <router-view />
    <CustomPlayer :videoURL="videoURL">
      <InfoLight v-if="false"/>
    </CustomPlayer>
  </div>
</template>

<script>
// @ is an alias to /src
import CustomPlayer from "@/components/CustomPlayer.vue";
import InfoLight from "@/components/InfoLight.vue";

export default {
  components: {
    CustomPlayer,
    InfoLight,
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
