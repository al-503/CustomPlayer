<template>
  <div class="current-channel-logo">
    <h1>{{ name }}</h1>
    <!-- <img :src="" :alt=""> -->
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
