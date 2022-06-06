<template>
     <input type="submit" value="INFO+" class="infoButton" v-on:keyup.enter="hideInfoLightAndShowInfoMax" >
</template>

<script>
import Store from "@/store";
export default {
  methods:{
        hideInfoLightAndShowInfoMax: function () {
          
          Store.commit('LightInfoDefault');
          Store.commit('DisplayInfoMax');
        }
    }
}
</script>

<style>
.infoButton {
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