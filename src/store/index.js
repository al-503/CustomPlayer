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
    KeyLeft(state, n) {
      state.currentIndex += n
    },
    KeyRight(state) {
      return state.currentIndex--
    },
  },
  actions: {
  },
  modules: {
  }
})
