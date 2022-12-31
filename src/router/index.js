import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainView from '../views/MainView.vue'

Vue.use(VueRouter)

const routesArr = [
  {
    path: '/',
    name: 'home', // 随意给
    component: HomeView
  },
  {
    path: '/main',
    name: 'main',
    // 路由懒加载
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: MainView
  }
]

const router = new VueRouter({
  routes: routesArr
})

export default router