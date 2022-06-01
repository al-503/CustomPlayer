import { createStore } from 'vuex'
import Sources from '../assets/sources/channels.json'

export default createStore({
  state: {
    Channels: Sources.channels,
    currentIndex: 0,
    defaultDisplay: false,
    changeSrc: false,
    defaultDisplayInfoMax: false,
    videoIsOnPause: false,
    errorMessage: null,
    showErrorMessage: false,
    splashScreenDisplay: true,
    assignedStringInputs: ["ArrowUp","ArrowDown","n","i","p","Enter","PageUp","PageDown","+","-","0","1","2","3","4","5","6","7","8","9"]
  },
  getters: {
    getAssignedInputs(state) {
      return state.assignedStringInputs
    },
    getSplashScreenDisplay(state) {
      return state.splashScreenDisplay
    },
    getShowErrorMessage(state) {
      return state.showErrorMessage
    },
    getErrorMessage(state) {
      return state.errorMessage

    },
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
    getVideoIsOnPause(state) {
      return state.videoIsOnPause
    }
  },
  mutations: {
    SET_SPLASH_SCREEN_DISPLAY(state, payload){
      state.splashScreenDisplay = payload
    },
    SET_VIDEO_IS_ON_PAUSE(state, payload){
      state.videoIsOnPause = payload
    },
    SET_CHANGE_SHOW_ERROR_MESSAGE(state, payload) {
      state.showErrorMessage = payload
    },
    SET_CHANGE_ERROR_MESSAGE(state, payload) {
      state.errorMessage = payload
    },
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
