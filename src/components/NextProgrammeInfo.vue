<template>
  <div class="next-programme">

    <!-- <img :src="require('@/assets/sources/channelsThumb/'+ thumb)" alt="image du programme à suivre">
    <p>A suivre ...</p> -->
    
    <div class="next-programme-text">
      <h2 class="next-programme-title">{{ title }}</h2>
      <p  class="next-programme-time">{{ startAt + "-" + endAt }}</p>
      <p class="next-programme-resume">{{ resume }}</p>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    title: {
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
.next-programme {
  font-family: "Inter", sans-serif;
  width: 80%;
  margin: 1.5%;
}
.next-programme-title {
  font-size: 39px;
  font-weight: 900;
}
.next-programme-time {
  font-size: 30px;
}
.next-programme-resume {
  font-size: 24px;
  width: 30%;
}

</style>
