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
    getUser (state) {
      axios.get('http://127.0.0.1:4321/profile_wait')
        .then(response => {
          if (response.status === 200) {
            state.property.nickname = response.data.nickname
          }
        })
    },
    setUser (state) {
      axios.post('http://127.0.0.1:4321/profile')
        .then(response => {
          if (response.status !== 200) {
            state.property.nickname = 'eroor'
          }
        })
    }
  },
  actions: {
    getUser ({ commit }) {
      commit('getUser')
    },
    setUser ({ state, commit, rootState }) {
      if (state.property.nickname.length <= 3) {
        throw new Error('3文字以上入力してください')
      }
      commit('setUser')
    }
  }
})
export default PropertyStore
