import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/home/Home.vue'

const Profile = () => import('views/profile/Profile')//懒加载
const Cart = () => import('views/cart/Cart')

Vue.use(VueRouter)

const routes = [
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/',
    redirect: "./home"
  },
  {
    path: '/home',
    name: 'home',
    component: Home,

  },
  {
    path: '/catagory',
    name: 'category',
    component: () => import('views/catagory/Catagory')//懒加载
  }
]

const router = new VueRouter({
  mode: 'history',//默认为哈希值路径
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active"
})

export default router
