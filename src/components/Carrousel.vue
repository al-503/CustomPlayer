<template>
  <div class="carrousel">
    <div class="carrousel-slides">
      <CarrouselSlide v-for="channel in channels"
                      :key="channel.id"
                      :logo="channel.logo"
                      :thumb="channel.programme[0].thumb"
                      :title="channel.programme[0].title"
                      :startTime="channel.programme[0].startTime"
                      :endTime="channel.programme[0].endTime" />

  </div>
</div>
</template>

<script>
import Store from "@/store"

import CarrouselSlide from "@/components/CarrouselSlides.vue"

export default {
  components: {
    CarrouselSlide
  },
  computed: {
    channels: () => Store.getters.getChannels,
  },
}
</script>

<style lang="scss">
.carrousel {
  width: 50%;
  height: 100vh;
  overflow: hidden;

  background: linear-gradient(
    270deg,
    rgba(132, 132, 132, 0) 0%,
    rgba(69, 69, 69, 0.5) 51.56%,
    rgba(0, 0, 0, 0.75) 100%
  );
}

.carrousel-slides {
  width: 50%;
}

</style>
