import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import FindMusic from '@/components/FindMusic'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FindMusic',
      component: FindMusic
    }
  ]
})
