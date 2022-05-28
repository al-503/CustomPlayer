<template>
  <div class="container">
    <div class="previous-button">
      <fa class="previous-icon" icon="backward" />
    </div>
    <div class="next-button">
      <fa class="next-icon" icon="backward" />
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scope>
.previous-button,
.next-button {
  width: 174px;
  height: 174px;
  background: rgba(63, 62, 62, 0.69);
  border: rgba(255, 255, 255, 1) solid 4px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
}
.previous-button {
  top: 40%;
  left: 4%;
}
.next-button {
  top: 40%;
  right: 4%;
  transform: rotate(180deg);
}

.previous-icon,
.next-icon {
  position: relative;
  color: rgba(255, 255, 255, 1);
  width: 35%;
  height: auto;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
