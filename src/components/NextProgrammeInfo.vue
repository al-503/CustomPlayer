<template>
  <div class="next-programme">
    <div class="next-programme-thumb">
      <img class="next-programme-img" :src="require('@/assets/sources/programmeThumb/'+ thumb)" alt="image du programme à suivre">
      <p class="next-programme-msg">A suivre ...</p> 
    </div>

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
  margin-right: 2%;

  display: flex;
}
.next-programme-thumb,.next-programme-text {
  margin: 1%;
}

.next-programme-thumb {
  width: 100%;
}
.next-programme-img {
  width: 100%;
  margin: 1%;
}
.next-programme-msg {
  position: absolute;
  top:60%;
  right: 38%;
  font-weight: 900;
  font-size: 33px;
}

.next-programme-title {
  font-size: 39px;
  font-weight: 900;
}
.next-programme-time {
  font-size: 30px;
}
.next-programme-resume {
  margin: 0 auto;
  font-size: 20px;
}
.next-programme-resume,.next-programme-title,.next-programme-time {
    padding: 2px;
}

</style>
