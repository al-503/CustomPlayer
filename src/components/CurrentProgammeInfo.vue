<template>
  <div class="current-info">

    <div class="info">
      <h1 class="current-title">{{ title }}</h1>
      <p class="gender">{{ gender }}</p>
      <!-- bouton info+ -->
    </div>

    <div class="info">
      <p class="time">{{ startAt + " - "+  endAt }}</p>
      <!-- heure de début / de fin -->
      <!-- progress bar  -->
    </div>
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
  display: flex;
}
.info {
  margin: 1.5%;
}
.current-title {
  font-size: 64px;
  font-weight: 900;
}
.gender,.time {
  font-size: 31px;
  padding: 3px;
}
.time {
  position: relative;
  top: 17%;
}
</style>