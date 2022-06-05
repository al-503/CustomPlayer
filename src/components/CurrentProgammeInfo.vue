<template>
  <div class="current-info">
    <div class="info-text">
      <h1 class="current-title">{{ title }}</h1>
      <p class="gender">{{ gender }}</p>
      <!-- bouton info+ -->
      <!--<div class="info-plus">INFO +</div>-->
      <InfoButton />
    </div>
    <p class="time">{{ startAt + " - " + endAt }}</p>
    <MiniTimeBar />
  </div>
</template>

<script>
import MiniTimeBar from "@/components/MiniTimeBar.vue";
import InfoButton from "@/components/InfoButton.vue";

export default {
  components: {
    MiniTimeBar,
    InfoButton
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

<style langue="scss">
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

.info-plus {
  margin-top: 2%;
  margin-left: 2%;
  padding: 1%;
  width: 16%;
  height: 17%;
  border: 1px solid white;
  border-radius: 12px;
  text-align: center;
  font-weight: 900;
  font-style: italic;
}
</style>