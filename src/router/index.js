import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:"/toregister",
    name:"ToRegister",
    component: () => import(/* webpackChunkName: "about" */ '../views/ToRegister.vue')

  },
  {
    path:"/reference",
    name:"Reference",
    component:() => import ('../views/Reference.vue')
  },
  {
    path:"/bigbit",
    name:"BigBit",
    component:() => import('../views/BigBit.vue')
  },
  {
    path:"/tologin",
    name:"ToLogin",
    component:() => import('../views/ToLogin.vue')
  },
  {
    path:"/yangi",
    name:"yangi",
    component:() => import('../views/yangi.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
