import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainView from '../views/MainView.vue'
import DefaultTab from '@/components/navbar/DefaultTab.vue'
import DataTab from '@/components/navbar/DataTab.vue'

Vue.use(VueRouter)

const routesArr = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/main/:userId',
    // 路由懒加载
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: MainView,
    children: [
      {
        // 当 /user/:id/profile 匹配成功
        // UserProfile 将被渲染到 User 的 <router-view> 内部
        path: 'default',
        component: DefaultTab,
      },
      {
        path: 'data',
        component: DataTab,
      },
      {
        path: '',
        redirect: 'default'
      }
    ]
  }
]

const router = new VueRouter({
  routes: routesArr
})

export default router