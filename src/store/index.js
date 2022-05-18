import { createStore } from 'vuex'
import Sources from '../assets/sources/channels.json'

export default createStore({
  state: {
    allChannel: Sources.channels,
    firstChannel: Sources.channels[1],
    currentChannelArray: Sources.channels[0],
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    //faire un commit
  },
  modules: {
  }
})
