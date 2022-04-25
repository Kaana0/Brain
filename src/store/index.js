import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
    addSearch() {

    }
  },
  actions: {
    fetchItems({ commit }) {
      return axios.get('')
      .then(response => {
        commit('receiveItems', response.data)
      })
    }
  },
  modules: {
  }
})
