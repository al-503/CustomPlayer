<template>
  <div class="current-channel-logo">
    <!-- <img :src="" :alt=""> -->
    <h1>{{ name }}</h1>
  </div>
</template>

<script>

export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
</style>
