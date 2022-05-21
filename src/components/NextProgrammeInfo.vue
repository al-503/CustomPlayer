<template>
  <div class="next-programme">
    <h2>{{ title }}</h2>
    <p>{{ startAt + "-" + endAt }}</p>
    <p>{{ resume }}</p>

    <!-- <img :src="require('@/assets/sources/channelsLogo/'+ thumb)" alt="image du programme à suivre">
    <p>A suivre ...</p> -->

  </div>
</template>

<script>
export default {
  props: {
    tilte: {
      type: String,
      require: true
    },
    startAt:{
      type: String,
      require: true
    },
    endAt: {
      type: String,
      require: true
    },
    resume: {
      type: String,
      require: true
    },
    thumb: {
      type: String,
      require: true
    }
  }

}
</script>

<style lang="scss">

</style>
