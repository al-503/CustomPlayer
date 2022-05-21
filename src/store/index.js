import { createStore } from 'vuex'
import Sources from '../assets/sources/channels.json'

export default createStore({
  state: {
    Channels: Sources.channels,
    firstChannel: Sources.channels[0],//juste pour le dev 
    // currentChannel: Sources.channels[currentIndex]
    // currentProgramme: Sources.channels[currentIndex].programme[0]
    // afterProgramme: Sources.channels[currentIndex].programme[1],
    currentIndex: 25,

  },
  getters: {
    getCurrentChannel (state) {
      return state.Channels[state.currentIndex]
    },
    getProgramme (state) {
      return state.Channels[state.currentIndex].programme
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
