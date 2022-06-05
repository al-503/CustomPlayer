<template>
    <div class="contentAdultMain">
    <CurrentHour class="curentHourAdult" />
    <CurrentChannelLogo :logo="currentChannel.logo" id="logoChannelAdult" />

     <div class="contentAdultDiv">
    <p class="contentAdultText">Contenu bloqué</p> <br>
    <fa class="lockIcon" icon="lock" />
  </div>
    </div >
</template>
<script>
import Store from "@/store";
import CurrentChannelLogo from "@/components/CurrentChannelLogo.vue";
import CurrentHour from "@/components/CurrentHour.vue";

export default {
   data() {
    return {
      durationHour: 0,
      durationMinute: 0,
      ProvisDurationMinute: 0,
    };
  },
  components: {
    CurrentChannelLogo,
    CurrentHour
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
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-top: 1%;
  padding-bottom: 1%;
}
.contentAdultText{
  font-family: "Roboto", "Open Sans", sans-serif;
  color: white;
  font-weight: bold;
  font-size: 48px;
}
#logoChannelAdult, .lock-keyhole {
  z-index: 3;
}
#logoChannelAdult img{
  top: 10%;
}
.lockIcon{
  height: 100px;
  z-index: 4;
  color: white;
}

</style>