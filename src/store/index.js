import Vue from 'vue'
import Vuex from 'vuex'
import topics from './modules/topics'
import login from './modules/login'
import content from './modules/content'
import user from './modules/user'
import collect from './modules/collect'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    topics,
    login,
    content,
    user,
    collect
  }
})
