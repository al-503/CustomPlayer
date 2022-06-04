<template>
  <div class="splashScreen">
    <img
      class="splashScreenImg"
      :src="require('@/assets/sources/logoWiztiteam/logo.png')"
    />
    <h1 class="projectName">wiztiteam</h1>
  </div>
</template>
<script>
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    return { router };
  },

  mounted() {
    setTimeout(this.toPlayerView, 2500);
  },

  methods: {
    toPlayerView() {
      this.$router.push({ path: "/player" });
    },
  },
};
</script>

<style lang="scss" scope>
.splashScreen {
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #3f3e3e;
  display: flex;
  align-items: center;
  justify-content: center;
}
.splashScreenImg {
  position: relative;
  padding-bottom: 50px;
}
.projectName {
  color: #ffffff;
  font-size: 125px;
  font-family: "Roboto", "Open Sans", sans-serif;
  text-transform: uppercase;
  text-shadow: 1px 1px 15px black;
}

@-webkit-keyframes rotating {
  from {
    transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
  }
}
@keyframes rotating {
  from {
    transform: rotate(0deg);
    -o-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
    -o-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
  }
}
@-webkit-keyframes rotating {
  from {
    transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
  }
}
.splashScreenImg {
  -webkit-animation: rotating 2s linear;
  -moz-animation: rotating 2s linear;
  -ms-animation: rotating 2s linear;
  -o-animation: rotating 2s linear;
  animation: rotating 2s linear;
}
</style>
