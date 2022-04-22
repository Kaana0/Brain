import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    foodDatas: [
      {
          "name": "青じそ",
          "photo": "siso.jpg",
          "bonus": "おいしい",
          "detail": "あたまにいい"
      },
      {
          "name": "アスパラガス",
          "photo": "as.jpg",
          "bonus": "おいしい",
          "detail": "あたまにいい"
      },
      {
          "name": "パセリ",
          "photo": "paseri.jpg",
          "bonus": "おいしい",
          "detail": "あたまにいい"
      },
      {
          "name": "枝豆",
          "photo": "eda.jpg",
          "bonus": "おいしい",
          "detail": "あたまにいい"
      },
      {
          "name": "えんどう豆",
          "photo": "endo.jpg",
          "bonus": "おいしい",
          "detail": "あたまにいい"
      }
  ],
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
