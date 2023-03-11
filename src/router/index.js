import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
//import BikesView from '@/views/BikesView.vue'
import BikeDetail from '@/views/Detail.vue'
import Objects from '@/views/Objects.vue'
import Object from '@/views/Object.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/objects',
      name: 'Objects',
      component: Objects
    },
    {
      path: '/objects/:id',
      name: 'Object',
      component: Object
    },
    {
      path: '/bikes',
      name: 'bikes',
      component: () => import('../views/BikesView.vue')
    },
    
    //SRA: I suppose I could have used a nested route here, but I was running short on time
    //    children: [
    //  {
    //    path: 'chat/:userId',
    //    component: () =>
    //    import("../components/ChatBox.vue"),
    //  }
    //]
    //
    /*{
    path: "/bikes/:model",
    name: "BikeDetail",
    props: true,
    component: () =>
      import("../views/Detail.vue")
    } */
  ]
})

export default router
