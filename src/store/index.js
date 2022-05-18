import { createStore } from 'vuex'
import Sources from '../../sources/sources.json'

export default createStore({
  state: {
    allChannel: Sources.channels,
    firstChannel: Sources.channels[0],
    currentChannelArray: Sources.channels[i],
    i: 0
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
