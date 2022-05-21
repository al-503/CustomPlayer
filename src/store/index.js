import { createStore } from 'vuex'
import Sources from '../assets/sources/channels.json'

export default createStore({
  state: {
    Channels: Sources.channels,
    firstChannel: Sources.channels[0],//juste pour le dev 
    // currentChannel: Sources.channels[currentIndex]
    // currentProgramme: Sources.channels[currentIndex].programme[0]
    // afterProgramme: Sources.channels[currentIndex].programme[1],
    currentIndex: 16,

  },
  getters: {
    getCurrentChannel (state) {
      return state.Channels[state.currentIndex]// [0] // renvoi un array avec toutes les chaines
    },
    getCurrentProgramme (state) {
      return state.Channels[state.currentIndex].programme[0]
      // let programme = getCurrentChannel(currentIndex).programme
      // return programme[currentIndex]
    },
    // getNextProgramme () {

    // },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
