<template>
<div class="errorMessageDiv"><p class="errorMessageText">{{message}}</p></div>
    
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
*{
    box-sizing: border-box;
}
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
}

.errorMessageText{
    color: white;
    font-weight: bold;
    font-size: 48px;
    text-align: center;
}
</style>