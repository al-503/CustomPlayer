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
.errorMessageDiv{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid white;
    position: absolute;
    background-color: #3f3f3f;
    opacity: 69%;
    left:50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    padding: 4%;  
    border-radius: 20px;
}

.errorMessageText {
  font-family: "Roboto", "Open Sans", sans-serif;
  text-transform: capitalize;
  color: white;
  font-weight: bold;
  font-size: 48px;
  text-align: center;
}
</style>
