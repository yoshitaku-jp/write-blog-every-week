import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './Home.vue'
import Posts from './Posts.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/posts',
        name: 'posts',
        component: Posts,
    }
  ]
})