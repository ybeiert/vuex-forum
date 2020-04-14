import axios from 'axios'
const user = {
  state: {
    information: null
  },
  mutations: {
    userInformation(state, res) {
      state.information = res
    }
  },
  actions: {
    userInformation({ commit }, username) {
      axios.get(`https://www.vue-js.com/api/v1/user/${username}`).then(res => {
        commit('userInformation', res.data.data)
      })
    }
  }
}
export default user
