<template>
  <div class="info-light">
    <div class="info-light-header top-show">
      <!-----ici heure courante: ------->
      <CurrentHour />
      <!-----ici logo courante: ------->
      <CurrentChannelLogo :logo="currentChannel.logo" />
    </div>

    <div class="info-light-bottom bottom-show">
      <!-- ici info en cours: -->
      <CurrentProgrammeInfo
        :title="programme[0].title"
        :gender="programme[0].genre"
        :startAt="programme[0].startTime"
        :endAt="programme[0].endTime"
      />
      <!-- les index ici sont en dur car pas de gestions des heures -->
      <!-- des programme donc pas utile de refaire une fonction juste pour -->
      <!-- changer un index sur une chaine qui n'a que 2 programes fixe -->
      <!-- ici info suivante: -->
      <NextProgrammeInfo
        :title="programme[1].title"
        :startAt="programme[1].startTime"
        :endAt="programme[1].endTime"
        :resume="programme[1].description"
        :thumb="programme[1].thumb"
      />
    </div>
  </div>
</template>

<script>
import Store from "@/store";

import CurrentHour from "@/components/CurrentHour.vue";
import CurrentChannelLogo from "@/components/CurrentChannelLogo.vue";
import CurrentProgrammeInfo from "@/components/CurrentProgammeInfo.vue";
import NextProgrammeInfo from "@/components/NextProgrammeInfo.vue";

export default {
  components: {
    CurrentHour,
    CurrentChannelLogo,
    CurrentProgrammeInfo,
    NextProgrammeInfo,
  },

  computed: {
    currentChannel: () => Store.getters.getCurrentChannel,
    programme: () => Store.getters.getProgramme,
  },
};
</script>

<style lang="scss">
.info-light-header {
  position: absolute;
  width: 100%;
  height: 28%;
  background: linear-gradient(
    0deg,
    rgba(132, 132, 132, 0) 0%,
    rgba(69, 69, 69, 0.5) 51.56%,
    rgba(0, 0, 0, 0.75) 100%
  );
  border-radius: 2px;
  top: 0%;
}
.info-light-bottom {
  position: absolute;
  width: 100%;
  height: 20%;
  background: rgba(63, 62, 62, 0.69);
  backdrop-filter: blur(20px);
  color: white;
  display: flex;
  bottom: 0%;
}
</style>
