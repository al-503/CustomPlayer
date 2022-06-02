<template>

  <div :id="index" class="carrousel-slide">
    <!-- thumb -->
    <img class="slide-img" :src="require('@/assets/sources/programmeThumb/'+ thumb)" alt="thumb du programme"> 
    <!-- logo -->
    <img class="slide-logo" :src="require('@/assets/sources/channelsLogo/'+ logo)" alt="logo de la chaîne">
    <!-- titre -->
    <div class="slide-text">
      <h3 class="slide-title">{{ title }}</h3>
      <!-- startTime - endTime -->
      <p class="slide-time">{{ startTime + "-" +  endTime }}</p>
    </div>
  </div>

</template>

<script>

export default {
  props: {
    thumb: {
      type: String,
      required: true
    },
    logo: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    startTime: {
      type: String,
      required: true
    },
    endTime: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
}
// partie de la video d alex mais c'est un slider pas un carrousel //
    // <div v-show="visibleSlide === index" class="carrousel-slide">
    //   <!-- thumb -->
    //   <img class="slide-img" :src="require('@/assets/sources/programmeThumb/'+ thumb)" alt="thumb du programme"> 
    //   <!-- logo -->
    //   <img class="slide-logo" :src="require('@/assets/sources/channelsLogo/'+ logo)" alt="logo de la chaîne">
    //   <!-- titre -->
    //   <div class="slide-text">
    //     <h3 class="slide-title">{{ title }}</h3>
    //     <!-- startTime - endTime -->
    //     <p class="slide-time">{{ startTime + "-" +  endTime }}</p>
    //   </div>
    // </div>
//////////////////////////////////////////////////////////////////////
</script>

<style lang="scss">
.carrousel-slide {
  margin:0% auto;
  width: 350px;
  height: 234px;
}
.slide-img {
  width: 100%;
}
.slide-logo {
  width: 37px;
  height: 32px;
  position: relative;
    bottom: 90%;
    left: 85%;
}
.slide-text {
  text-align: center;
  color: white;
  position: relative;
    bottom: 38%;
}

</style>