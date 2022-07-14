import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from "@/components/HelloWorld";

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/components/HomePage'),
    //想要导航栏不动子页面刷新，就得添加要跳转的子组件
    children: [
      {
        path: '',
        name: HelloWorld,
        component: () => import('@/components/HelloWorld')
      },
      {
        path: '/index',
        name: 'index',
        component: () => import('@/components/HelloWorld')  //懒加载还是要写的
      },

      {
        path: '/uploadDoc',
        name: 'uploadDoc',
        component: () => import('@/views/UploadDocPage/Uploader'),
      },

      {
        path: '/detFinish',
        name: 'detFinish',
        component: () => import('@/views/UploadDocPage/DetectionFinish')
      },

      {
        path: '/localVideoPlay',
        name: 'localVideoPlay',
        component: () => import('@/components/LocalVideoPlay')
      },

      {
        path: '/playVideo',
        name: 'playVideo',
        component: () => import('@/views/PlayVideo/PlayVideo')
      },

      {
        path: '/playLocalVideo',
        name: 'playLocalVideo',
        component: () => import('@/views/PlayVideo/playLocalVideo')
      }
    ]
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
