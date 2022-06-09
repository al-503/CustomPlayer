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
  margin-right: 2%;
  font-family: "Inter", sans-serif;
  width: 60%;
  display: flex;
}

.next-programme-thumb,.next-programme-text {
  margin: 1%;
}

.next-programme-text {
  margin-top: 3%;
}

.next-programme-img {
  width: 100%;
  //sinon ça fait n'imp pourtant les photo ont les même dimenssions
  min-width: 300px;
  max-width: 300px;
  //sinon ça fait n'imp pourtant les photo ont les même dimenssions
  min-height: 150px;

  margin: 1%;
  margin-top: 2%;
}

.next-programme-msg {
  position: absolute;
  top:73%;
  right: 32%;
  font-weight: 900;
  font-size: 33px;
}

.next-programme-title {
  font-size: 39px;
  font-weight: 900;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* number of lines to show */
  -webkit-box-orient: vertical;
}

.next-programme-time {
  font-size: 30px;
  margin: 1% auto;
}

.next-programme-resume {
  margin: 1% auto;
  width: 50ch;
  height: 37%;
  font-size: 18px;

  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 20px; /* définie les éspaces entre les lignes */
  max-height: 42px; 
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
}

.next-programme-resume,.next-programme-title,.next-programme-time {
    padding: 2px;
}

</style>
