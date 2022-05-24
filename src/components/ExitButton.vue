<template>
     <input type="submit" value="EXIT" class="exitButtton" v-on:keyup.enter="returnToMainPage" >
</template>

<script>
export default {
  methods:{
        returnToMainPage: function () {
            this.$router.push('/');
        }
    }
}
</script>
<style>
.exitButtton {
    width: 146px;
    height: 47px;
    border-radius: 15px;
    border: 4px solid white;
    font-size: 28px;
    color: white;
    font-style: italic;
}
</style>