<template>
  <div class="current-info">
    <div class="info-text">
      <h1 class="current-title">{{ title }}</h1>
      <p class="gender">{{ gender }}</p>
      <!-- bouton info+ -->
      <div class="info-plus">INFO <fa icon="circle-info" /></div>
    </div>
    <p class="time">{{ startAt + " - " + endAt }}</p>
    <MiniTimeBar />
  </div>
</template>

<script>
import MiniTimeBar from "@/components/MiniTimeBar.vue";

export default {
  components: {
    MiniTimeBar,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    startAt: {
      type: String,
      required: true,
    },
    endAt: {
      type: String,
      required: true,
    },
  },
};
</script>

<style langue="scss" scoped>
.current-info {
  font-family: "Inter", sans-serif;
  width: 80%;
  display: flex;
}
.info-text {
  margin-top: 2%;
  margin-left: 3%;
}
.current-title {
  font-size: 64px;
  font-weight: 900;

  width: 15ch;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* number of lines to show */
  -webkit-box-orient: vertical;
}
.gender,
.time {
  font-size: 31px;
  margin: 1.5%;
}
.time {
  margin-top: 5%;
  text-align: center;
}
.infoButton {
  width: 146px;
  height: 47px;
  border-radius: 15px;
  border: 4px solid white;
  font-size: 28px;
  color: white;
  font-style: italic;
  background-color: #3f3f3f;
}
.info-plus {
  margin-top: 2%;
  margin-left: 1%;
  font-size: 28px;
  color: white;
  padding: 1%;
  width: 146px;
  height: 47px;
  border: 4px solid white;
  border-radius: 15px;
  text-align: center;
  font-weight: 900;
  font-style: italic;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
</style>