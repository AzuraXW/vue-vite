import { RouteItem } from '../types'
import Home from '@/pages/Home/index.vue'
import About from '@/pages/About/index.vue'

const routes: Array<RouteItem> = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: 'About',
    path: '/about',
    component: About,
  },
]

export default routes
