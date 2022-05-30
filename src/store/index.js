import { createStore } from 'vuex'
import Sources from '../assets/sources/channels.json'

export default createStore({
  state: {
    Channels: Sources.channels,
    currentIndex: 0,
    defaultDisplay: false,
    changeSrc: false,
    defaultDisplayInfoMax: false
  },
  getters: {
    getChangeSrc(state) {
      return state.changeSrc
    },
    getChannels (state) {
      return state.Channels
    },
    getCurrentChannel (state) {
      return state.Channels[state.currentIndex]
    },
    getProgramme (state) {
      return state.Channels[state.currentIndex].programme
    }
  },
  mutations: {
    SET_CHANGE_SRC(state, payload) {
      state.changeSrc = payload
    },
    SET_CURRENT_INDEX(state, payload) {
      state.currentIndex = payload
    },
    // augment le current index de 1
    KeyLeft(state) {
      return state.currentIndex++
    },
    // diminue le current index de -1
    KeyRight(state) {
      return state.currentIndex--
    },
    // display info light
    LightInfoDisplay(state) {
      return state.defaultDisplay = true
    },
    //fait disparaitre info light
    LightInfoDefault(state) {
      return state.defaultDisplay = false
    },
    // display info max
    DisplayInfoMax(state) {
      return state.defaultDisplayInfoMax = true
    },
    //fait disparaitre info light
    HideInfoMax(state){
          return state.defaultDisplayInfoMax = false
    },

  },
  actions: {
  },
  modules: {
  }
})
