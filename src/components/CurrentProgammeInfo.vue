<template>
  <div class="current-info">
    <h3>{{ title }}</h3>
    <p>{{ gender }}</p>
    <!-- bouton info+ -->
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
    }
  }

}
</script>
