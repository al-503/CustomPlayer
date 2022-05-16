<template>
  <router-view />
</template>

<script>
import Source from "../sources/sources.json";
console.log(Source);

export default {};
</script>

<style lang="scss">
* {
  padding: 0px;
  margin: 0px;
}

#app {
  max-width: 100vw;
}
html {
  overflow: hidden;
  box-sizing: border-box;
  object-fit: contain;
}
</style>
