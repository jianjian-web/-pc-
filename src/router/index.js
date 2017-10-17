import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import FindMusic from '@/components/FindMusic'
import Search from '@/components/Search'
import Mv from '@/components/Mv'
import Friend from '@/components/Friend'
import Recommend from '@/components/Recommend'
import SongSheet from '@/components/SongSheet'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/findMusic/recommend'
    },
    {
      path: '/findMusic',
      name: 'FindMusic',
      component: FindMusic,
      children:[
        {
          path:'recommend',
          component:Recommend
        },
        {
          path:'songSheet',
          component:SongSheet
        }
      ]
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/mv',
      name: 'mv',
      component: Mv
    },
    {
      path: '/friend',
      name: 'friend',
      component: Friend
    }
  ]
})
