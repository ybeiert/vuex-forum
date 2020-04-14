import axios from 'axios'
const login = {
  state: {
    info: null
  },
  mutations: {
    login(state, res) {
      state.info = res
    },
    logout(state) {
      sessionStorage.clear()
      state.info = null
    }
  },
  actions: {
    login({ commit }, accesstoken) {
      axios
        .post('https://www.vue-js.com/api/v1/accesstoken', { accesstoken })
        .then(res => {
          sessionStorage.setItem('avatar_url', res.data.avatar_url)
          sessionStorage.setItem('id', res.data.id)
          sessionStorage.setItem('loginname', res.data.loginname)
          sessionStorage.setItem('success', res.data.success)
          commit('login', res.data)
          console.log(res.data)
        })
    }
  }
}
export default login
