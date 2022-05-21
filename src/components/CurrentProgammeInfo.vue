<template>
  <div class="current-info">
    <div class="info-text">
      <h1 class="current-title">{{ title }}</h1>
      <p class="gender">{{ gender }}</p>
      <!-- bouton info+ -->
    </div>
    <p class="time">{{ startAt + " - "+  endAt }}</p>
    <!-- heure de début / de fin -->
    <!-- progress bar  -->
  </div>
</template>

<script>

export default  {
  props: {
    title: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      required: true
    },
    startAt: {
      type: String,
      required: true
    },
    endAt: {
      type: String,
      required: true
    }
  }

}
</script>

<style langue="scss">
.current-info{
  font-family: "Inter", sans-serif;
  width: 80%;
  display: flex;
}
.info-text,.time {
  padding: 1%;
  margin: 1%;
}

.current-title {
  font-size: 64px;
  font-weight: 900;
}
.gender,.time {
  font-size: 31px;
  margin: 2%;
}
.time {
  margin-top: 3%;
  display: block;
  width: 30%;
}
</style>