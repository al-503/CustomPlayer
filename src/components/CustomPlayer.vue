<template>
  <div class="custom-player">
    <video controls loop autoplay="true" muted>
      <source
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        type="video/mp4"
      />
    </video>
  </div>
</template>

<script>
const videoBalise = document.getElementsByTagName('video')
console.log(videoBalise)

export default {}
</script>

<style lang="scss">
.custom-player {
  margin: 0 auto;
  max-width: 100vw;
  overflow: hidden;
}

video {
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  object-fit: fill;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
