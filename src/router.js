import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Topic from './components/Topic.vue'
import ContentList from './components/ContentList.vue'
import User from './components/User.vue'
Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: '/vue-forum',
      component: Home,
      children: [
        {
          path: '',
          component: Topic
        },
        {
          path: ':type',
          component: Topic
        }
      ]
    },
    {
      path: '/vue-forum/topic/:id',
      component: ContentList
    },
    {
      path: '/vue-forum/user/:user',
      component: User
    }
  ],
  mode: 'history'
})
