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
    assignedStringInputs: ["ArrowUp","ArrowDown","ArrowLeft","n","i","p","Enter","PageUp","PageDown","+","-","0","1","2","3","4","5","6","7","8","9"],
    displayInfoLightArrival: true,
    carrouselDisplay: false,
  },
  getters: {
    getAssignedInputs(state) {
      return state.assignedStringInputs
  },
    getdisplayInfoLightArrival(state) {
      return state.displayInfoLightArrival
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
    SET_DISPLAY_INFOLIGHT_ARRIVAL(state, payload){
      state.displayInfoLightArrival = payload
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
    CarrouselShow(state) {
      return state.carrouselDisplay = true
    },
    CarrouselHide(state) {
      return state.carrouselDisplay = false
    },
  },
  actions: {
  },
  modules: {
  }
})
