<template>
  <router-view />
</template>

<script>
///***** Permet de récup la key d'une touche *******///
// window.addEventListener('keydown', function(e){  ///
//   console.log(e)                                 ///
// });                                              ///
///////////////////////////////////////////////////////
</script>

<style lang="scss">
// ici le style commun à tout les composants
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap");

* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
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
