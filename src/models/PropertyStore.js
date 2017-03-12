import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

//  データストア
var PropertyStore = new Vuex.Store({
  state: {
    property: {
      nickname: 'Loading.....'
    }
  },
  mutations: {
    increment (state, n) {
      state.count += n
    },
    getUser (state, response) {
      state.property.nickname = response.data.nickname
    },
    setUser (state, nickname) {
      state.property.nickname = nickname
    }
  },
  actions: {
    getUser ({ commit }) {
      axios.get('http://127.0.0.1:4321/profile_wait')
        .then(response => {
          if (response.status === 200) {
            commit('getUser', response)
          }
        })
    },
    setUser ({ state, commit, rootState }) {
      if (state.property.nickname.length <= 3) {
        throw new Error('3文字以上入力してください')
      }
      axios.post('http://127.0.0.1:4321/profile')
        .then(response => {
          if (response.status === 200 && response.data.status === 'ok') {
            commit('setUser', state.property.nickname)
          } else {
            throw new Error('レスポンスエラー')
          }
        })
    }
  }
})
export default PropertyStore
