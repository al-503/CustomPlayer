<template>
  <div class="carrousel-slide">
    <!-- thumb -->
    <!-- <img :src="require('@/assets/sources/programmeThumb/'+ thumb)" alt="thumb du programme"> doit avoir des thumb -->
    <!-- logo -->
    <img :src="require('@/assets/sources/channelsLogo/'+ logo)" alt="logo de la chaîne">
    <!-- titre -->
    <h3>{{ title }}</h3>
    <!-- startTime - endTime -->
    <p>{{ startTime + "-" +  endTime }}</p>
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

</style>