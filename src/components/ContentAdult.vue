<template>
    <div class="contentAdultMain">
    <CurrentChannelLogo :logo="currentChannel.logo" id="logoChannelAdult" />
     <div class="contentAdultDiv">
    <p class="contentAdultText">Contenu bloqué</p>
  </div>
    </div >
</template>
<script>
import Store from "@/store";
import CurrentChannelLogo from "@/components/CurrentChannelLogo.vue";
export default {
  components: {
    CurrentChannelLogo,
  },

  computed: {
    currentChannel: () => Store.getters.getCurrentChannel,
    programme: () => Store.getters.getProgramme,
  },
};
</script>
<style>
.contentAdultMain{
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 100%;
  background-color: #3f3f3f;
}
.contentAdultDiv{
  border: 3px solid white;
  width: 29%;
  height: 30%;
  position: absolute;
  z-index: 2;
  background-color: #3f3f3f;
  opacity: 69%;
  left: 36%;
  top: 35%;
  border-radius: 25px;
}
.contentAdultText{
  font-family: "Roboto", "Open Sans", sans-serif;
  color: white;
  font-weight: bold;
  font-size: 48px;
  text-align: center;
  margin-top: 21%;
}
#logoChannelAdult{
  z-index: 3;
}
#logoChannelAdult img{
  top: 10%;
}

</style>