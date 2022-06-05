<template>
     <input type="submit" value="INFO" class="infoButtton" v-on:keyup.esc="returnToMainPage" >
</template>

<script>
import Store from "@/store";
export default {
  methods:{
        hideInfoLightAndShowInfoMax: function () {
          
        }
    }
}
</script>

<style>
.infoButtton {
    width: 146px;
    height: 47px;
    border-radius: 15px;
    border: 4px solid white;
    font-size: 28px;
    color: white;
    font-style: italic;
    background-color: #3f3f3f;
}
</style>