<template>
  <div class="errorMessageDiv">
    <p class="errorMessageText">{{message}}</p>
  </div> 
</template>

<script>
export default {
  data(){
    return{
      message: 'Aucune Chaîne Trouvée'
    }
  },
  computed:{
    MessageErrorNoChanel: function(){
      this.message= 'Aucune Chaîne Trouvée'
    },
    MessageErrorAnyArror: function(){
      this.message= 'Any Error'
    }
  }
}
</script>

<style>
.errorMessageDiv{
    border: 3px solid white;
    width: 29%;
    height: 30%;
    position: absolute;
    z-index: 2!important;
    background-color: #3f3f3f;
    opacity: 69%;
    left:36%;
    top: 35%;   
}

.errorMessageText{
    color: white;
    font-weight: bold;
    font-size: 48px;
    text-align: center;
    margin-top: 21%;
}

</style>
