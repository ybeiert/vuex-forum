import axios from 'axios'
const content = {
  state: {
    filter: null,
    list: null
  },
  mutations: {
    filter(state, res) {
      state.filter = res
    },
    filterList(state, res) {
      state.list = res
    }
  },
  actions: {
    filter({ commit }, id) {
      axios.get(`https://www.vue-js.com/api/v1/topic/${id}`).then(res => {
        commit('filter', res.data.data)
      })
    },
    filterList({ commit }, id) {
      axios.get(`https://www.vue-js.com/api/v1/topic/${id}`).then(res => {
        commit('filterList', res.data.data.replies)
      })
    },
    issue({ commit }, payload) {
      axios
        .post(
          `https://www.vue-js.com/api/v1//topic/${payload.topic_id}/replies`,
          payload.newTopics
        )
        .then(res => {
          payload.clearInput()
          payload.filterIssue(payload.topic_id)
        })
    }
  }
}
export default content
