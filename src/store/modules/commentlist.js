import axios from 'axios'
const list = {
  state: { all: [] },
  mutations: {
    // getList(state, list) {
    //   state.all = list
    // },
    addList(state, newList) {
      state.all.unshift(newList)
    }
  },
  actions: {
    // getList({ commit }, id) {
    //   axios.get(`https://www.vue-js.com/api/v1/topic/${id}`).then(res => {
    //     commit('getList', res.data.data)
    //   })
    // },
    addList({ commit }, payload) {
      axios
        .post('https://www.vue-js.com/api/v1/topics/', payload.newList)
        .then(res => {
          commit('addComment', res.data.data)
          payload.clearInput()
        })
    }
  }
}

export default list
