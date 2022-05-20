import { createStore } from 'vuex'
import Sources from '../assets/sources/channels.json'

export default createStore({
  state: {
    allChannel: Sources.channels,
    firstChannel: Sources.channels[0],//juste pour le dev 
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
