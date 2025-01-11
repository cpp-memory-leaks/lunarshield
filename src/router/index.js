import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FirstPage from '../views/FirstPage.vue'
import IndustryInformation from '../views/IndustryInformation.vue'
import Product from '../views/Product.vue'
import RelatedTechnology from '../views/RelatedTechnology.vue'
import Support from '../views/Support.vue'
import Login from '../views/Login.vue'
import AboutView from '../views/AboutView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/AboutView',
      name: 'AboutView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/FirstPage',
      name: 'FirstPage',
      component: () => import('../views/FirstPage.vue'),
    },
    {
      path: '/IndustryInformation',
      name: 'IndustryInformation',
      component: () => import('../views/IndustryInformation.vue'),
    },
    {
      path: '/Product',
      name: 'Product',
      component: () => import('../views/Product.vue'),
    },
    {
      path: '/RelatedTechnology',
      name: 'RelatedTechnology',
      component: () => import('../views/RelatedTechnology.vue'),
    },
    {
      path: '/Support',
      name: 'Support',
      component: () => import('../views/Support.vue'),
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('../views/Login.vue'),
    }
  ],
})

export default router
