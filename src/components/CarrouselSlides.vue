<template>
  <div class="carrousel-slide">
    <!-- thumb -->
    <img class="slide-img" :src="require('@/assets/sources/programmeThumb/'+ thumb)" alt="thumb du programme"> 
    <!-- logo -->
    <img class="slide-logo" :src="require('@/assets/sources/channelsLogo/'+ logo)" alt="logo de la chaîne">
    <!-- titre -->
    <div class="slide-texte">
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
    }
  },

}
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
    top: 8%;
    left: 85%;
}
.slide-text {
  text-align: center;
  color: white;
  position: relative;
}

</style>