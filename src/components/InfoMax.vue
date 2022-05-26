<template>
<CurrentHour class="currentHour"/>
	<div class="infoMaxMainDiv">
     
		<div class="infoMaxBody">
			<CurrentChannelLogo :logo="currentChannel.logo" />
            
            <p class="genreCreatingTimeInfoMax" >{{programme[0].genre}}</p>
            <p class="descriptionInfoMax">{{programme[0].description}}</p>
            <ExitButton />
		</div>
	</div>
</template>


<script>
import Store from '@/store'
import ExitButton from '@/components/ExitButton.vue'

import CurrentHour from "@/components/CurrentHour.vue"
import CurrentChannelLogo from '@/components/CurrentChannelLogo.vue'

export default {
  components: {
    CurrentHour,
    CurrentChannelLogo,
    ExitButton
  },
  computed: {
    currentChannel: () => Store.getters.getCurrentChannel,
    programme: () => Store.getters.getProgramme,
    }
}


</script>

<style>
.infoMaxMainDiv{
    width: 30%;
    height: 100%;
    background-color: #3f3f3f;
    opacity: 69%;
    position: absolute;
}
.currentHour{
margin-right: 10px;
}
</style>
