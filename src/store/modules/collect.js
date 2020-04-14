import axios from 'axios'
const collect = {
  state: {
    collect: null
  },
  mutations: {
    collect(state, newCollect) {
      state.collect = newCollect
    },
    de_collect(state, res) {
      state.collect = res
    }
  },
  actions: {
    collect({ commit }, payload) {
      axios
        .post('https://www.vue-js.com/api/v1/topic/collect', payload.newCollect)
        .then(res => {
          commit('collect', res.data)
        })
    },
    de_collect({ commit }, payload) {
      axios
        .post(
          'https://www.vue-js.com/api/v1/topic/de_collect',
          payload.newCollect
        )
        .then(res => {
          commit('de_collect', res.data)
        })
    }
  }
}
export default collect
