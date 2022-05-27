import { createStore } from 'vuex'
import Sources from '../assets/sources/channels.json'

export default createStore({
  state: {
    Channels: Sources.channels,
    currentIndex: 0,
    display: false
  },
  getters: {
    getCurrentChannel (state) {
      return state.Channels[state.currentIndex]
    },
    getProgramme (state) {
      return state.Channels[state.currentIndex].programme
    }
  },
  mutations: {
    // augment le current index de 1
    KeyLeft(state) {
      return state.currentIndex++
    },
    // diminue le current index de -1
    KeyRight(state) {
      return state.currentIndex--
    },
    // display info light
    LightInfodisplay(state) {
      return state.display = true
    }
  },
  actions: {
  },
  modules: {
  }
})
