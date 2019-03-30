
import User from '../pages/User/User.vue'
import Classify from '../pages/Classify/Classify.vue'
import Discern from '../pages/Discern/Discern.vue'
import Shop from '../pages/Shop/Shop.vue'
import Home from '../pages/Home/Home.vue'
export default [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/classify',
    component: Classify
  },
  {
    path: '/shop',
    component: Shop
  },
  {
    path: '/discern',
    component: Discern
  },
  {
    path: '/user',
    component: User
  },
  {
    redirect: '/',
    path: '/home'
  },

]
