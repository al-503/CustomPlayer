<template>
  <div class="current-channel-logo">
    <img :src="require('@/assets/sources/channelsLogo/'+ logo)"
          alt="logo de la chaîne"
          class="logo-image">
  </div>
</template>

<script>

export default {
  props: {
    logo: {
      type: String,
      required: true
    }
  },
}
</script>

<style lang="scss">
.current-channel-logo {
  width: 50%;
}

.logo-image {
  position: absolute;
  width: 120px;
  top: 26%;
  left: 6%;
  transform: translate(-50%, -50%);
}
</style>
