import { createStore } from 'vuex'
import Sources from '../assets/sources/channels.json'

export default createStore({
  state: {
    Channels: Sources.channels,
    currentIndex: 0,
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
      state.currentIndex++
    },
    // diminue le current index de -1
    KeyRight(state) {
      return state.currentIndex--
    },
  },
  actions: {
  },
  modules: {
  }
})
