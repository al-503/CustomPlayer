<template>
  <div class="input-number-container" v-if="this.toggleInputNumberDisplay">
    <div class="info-light-header">
      <div class="input-number">{{ inputPressed }}</div>
      <CurrentHour />
    </div>
  </div>
</template>

<script>
import Store from "@/store";

import CurrentHour from "@/components/CurrentHour.vue";

export default {
  components: {
    CurrentHour,
  },
  data: () => ({
    inputPressed: "",
    arrayInput: [],
    toggleInputNumberDisplay: false,
  }),
  mounted() {
    document.addEventListener("keydown", (e) => this.inputNumberListener(e));
  },
  computed: {},
  methods: {
    inputNumberListener(e) {
      let regInput = new RegExp("^[0-9]+$");

      if (regInput.test(e.key)) {
        this.toggleInputNumberDisplay = true;
        if (this.inputNumberVisible != null) {
          this.stopFunction();
        }
        this.inputNumberVisible = setTimeout(this.undisplay, 3000);
        if (this.arrayInput.length < 3) {
          this.arrayInput.push(e.key);
          // console.log(this.arrayInput);
        } else {
          this.arrayInput.splice(0, 1);
          this.arrayInput.push(e.key);
          // console.log(this.arrayInput);
        }
      }
      this.inputPressed = this.arrayInput.join("");
      // console.log(this.inputPressed);
    },
    stopFunction() {
      clearTimeout(this.inputNumberVisible);
    },
    undisplay() {
      this.toggleInputNumberDisplay = false;
      this.arrayInput.length = 0;
    },
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
}
.input-number {
  position: absolute;
  left: 2%;
  top: 6%;
  font-size: 85px;
  font-family: "Inter", sans-serif;
  font-weight: bold;
  line-height: 103px;
  color: #ffffff;
}
</style>
