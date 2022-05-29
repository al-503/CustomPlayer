<template>
  <div class="volumeIconContainer">
    <fa class="volumeIcon" :icon="volumeIcon" />
  </div>
</template>
<script>
export default {
  props: {
    volumeIcon: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.volumeIcon {
  height: 40px;
  color: rgba(255, 255, 255, 1);
  position: absolute;
  bottom: 20%;
  left: 1805px;
  z-index: 1;
}
</style>