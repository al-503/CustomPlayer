<template>
  <div class="player-view">
    <router-view />
    <CustomPlayer :videoURL="programme.sources">
      <InfoLight v-if="true" />
    </CustomPlayer>
  </div>
</template>

<script>
import Store from '@/store'
// @ is an alias to /src
import CustomPlayer from "@/components/CustomPlayer.vue";
import InfoLight from "@/components/InfoLight.vue";

export default {
  components: {
    CustomPlayer,
    InfoLight,
  },
  computed:{
    programme: () => Store.getters.getProgramme[0],
  },
  methods: {
    changeVideo(url) {
      this.videoURL = url;
    },
  },
};
</script>
