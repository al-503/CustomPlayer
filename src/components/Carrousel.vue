<template>
  <div class="carrousel">
    <div class="carrousel-slides" >
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

import CarrouselSlide from "@/components/CarrouselSlide.vue"

export default {
  components: {
    CarrouselSlide
  },
  computed: {
    channels: () => Store.getters.getChannels,
  }
}
</script>

<style lang="scss">

</style>
