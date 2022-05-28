<template>
<CurrentHour class="currentHour"/>
	<div class="infoMaxMainDiv">
     
		<div class="infoMaxBody">
			<CurrentChannelLogo :logo="currentChannel.logo" id="logoChannel" />
            <p class="titleInfoMax">{{programme[0].title}}</p>
            <p class="genreCreatingTimeInfoMax" >{{programme[0].genre + '  ('+ programme[0].creating + ') -  '+ durationHour + 'h' + durationMinute}}</p>
            <p class="descriptionInfoMax">{{programme[0].description}}</p>
            <ExitButton class="exitButton"/>
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
    durationHour: () => Number(Store.getters.getProgramme[0].endTime.substr(0,2)) - Number(Store.getters.getProgramme[0].startTime.substr(0,2))

    
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
    display: flex;
    flex-direction: column;
}
.currentHour{
margin-right: 10px;
}

#logoChannel img{
  margin-left: 15%!important;
  top:7%
}
.titleInfoMax{
  color: white;
  font-size: 64px;
  margin-top: 23%;
  margin-left: 10%;
  padding: 0;
  font-weight: bold;
}
.genreCreatingTimeInfoMax{
  color: white;
  font-weight: bold;
  margin-left: 10%;
  margin-top: 5%;
  font-size: 33px;
}
.descriptionInfoMax{
  margin-top: 5%; 
  margin-left: 10%;
  margin-right: 10%;
  color: white;
  font-size: 30px;
  text-align: justify;
  height: 60%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 16; /*needs TV size correction*/
	-webkit-box-orient: vertical;
  text-overflow: ellipsis;
}
.exitButton{
  left: 10%;
  bottom: 4%;
  position: absolute;
}
</style>
