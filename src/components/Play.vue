<template>
  <div class="pause-button">
    <fa class="play-icon" :icon="iconName" />
  </div>
</template>
<script>
export default {
  props: {
    iconName: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    iconTheme: "play",
  }),
};
</script>

<style lang="scss" scope>
.pause-button {
  width: 174px;
  height: 174px;
  position: absolute;
  top: 40%;
  left: 45.47%;
  background: rgba(63, 62, 62, 0.69);
  border: rgba(255, 255, 255, 1) solid 4px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.play-icon {
  position: relative;
  color: rgba(255, 255, 255, 1);
  width: 35%;
  height: auto;
  margin-left: 5px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
