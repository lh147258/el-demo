import Vue from 'vue'
import VueRouter from 'vue-router'

const Index = () => import('#')
const CitySearch = () => import('#/CitySearch')
const Meta = () => import('#/Meta')
Vue.use(VueRouter)
let routers = [
  {
    path: '/',
    name: 'index',
    component: Index,
  },
  {
    path:'/city/:id',
    name:'citySearch',
    component:CitySearch,
    props: true
  },
  { path:'/meta',
    name:"meta",
    component:Meta,
    meta: { keepAlive: true }
  }
]
const router = new VueRouter({
  mode: "history",
  routes: routers
})
router.beforeEach((to, from, next) => {
  next()
})


export default router
