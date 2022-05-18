<template>
  <router-view />
</template>

<script>
// import Source from '../sources/sources.json'
// const channels = Source.channels[0]
// console.log(channels)

import Store from '@/store'

console.log(Store.state.allChannel)
console.log(Store.state.firstChannel)

export default {}

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
