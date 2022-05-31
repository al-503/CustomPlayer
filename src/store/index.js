import { createStore } from 'vuex'
import Sources from '../assets/sources/channels.json'

export default createStore({
  state: {
    Channels: Sources.channels,
    currentIndex: 0,
    defaultDisplay: false,
    changeSrc: false,
    focusSlide: 0,
    carrouselDisplay: true, // true pour le dev
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
    },
    getPreviousChannel (state) {
      let indexPrecedant = state.currentIndex - 1
      if(state.currentIndex === 0){
        return state.Channels[29]
      } else {
        state.Channels[indexPrecedant]
      }
    },
    getNextChannel (state) {
      let indexSuivant = state.currentIndex + 1
      if(state.currentIndex === 29){
        return state.Channels[0]
      } else {
        state.Channels[indexSuivant]
      }
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
    // method pour le display du carrousel plus tard
    CarrouselDisplay(state) {
      return state.carrouselDisplay = true
    },
    CarrouselDisplayReset(state) {
      return state.carrouselDisplay = false
    }
  },
  actions: {
  },
  modules: {
  }
})
