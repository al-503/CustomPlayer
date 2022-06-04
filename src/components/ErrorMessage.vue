<template>
  <div class="errorMessageDiv">
    <p class="errorMessageText">{{ errorMessage }}</p>
  </div>
</template>

<script>
import Store from "@/store";
export default {
  data() {
    return {
      message: "Aucune Chaîne Trouvée",
    };
  },
  computed: {
    errorMessage: () => Store.getters.getErrorMessage,
  },
};
</script>

<style>
.errorMessageDiv {
  border: 3px solid white;
  width: 29%;
  height: 30%;
  position: absolute;
  z-index: 2 !important;
  background-color: #3f3f3f;
  opacity: 69%;
  left: 36%;
  top: 35%;
}

.errorMessageText {
  font-family: "Roboto", "Open Sans", sans-serif;
  text-transform: capitalize;
  color: white;
  font-weight: bold;
  font-size: 48px;
  text-align: center;
  margin-top: 21%;
}
</style>
