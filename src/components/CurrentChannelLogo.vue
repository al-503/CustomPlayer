<template>
  <div class="current-channel-logo">
    <!-- <img :src="" :alt=""> -->
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
import Store from '@/store'

export default {
 
  props: {
    name: {
      type: String,
      required: true
    }
  },
}
</script>

<style lang="scss">

</style>
