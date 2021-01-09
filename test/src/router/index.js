import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../components/index.vue'
import Article from '../components/article.vue'
import Blog from '../components/blog.vue'
import Allproducts from '../components/allproducts.vue'
import Land from '../components/land.vue'
import Registe from '../components/registe.vue'
import Shop from '../components/shop.vue'
import Personal from '../components/personal.vue'
import Info from '../components/info.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/info',
    name: 'Info',
    component: Info
  },
  {
    path: '/index',
    name: 'index',
    component:Index
  },
  {
    path: '/article',
    name: 'Article',
    component:Article
  },
  {
    path: '/blog',
    name: 'Blog',
    component:Blog
  },
  {
    path: '/allproducts',
    name: 'Allproducts',
    component:Allproducts
  },
  {
    path: '/land',
    name: 'Land',
    component:Land
  },
  {
    path: '/registe',
    name: 'Registe',
    component:Registe
  },
  {
    path: '/shop',
    name: 'Shop',
    component:Shop
  },
  {
    path: '/personal',
    name: 'Personal',
    component:Personal
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
