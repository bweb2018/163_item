
import User from '../pages/User/User.vue'
import Classify from '../pages/Classify/Classify.vue'
import Discern from '../pages/Discern/Discern.vue'
import Shop from '../pages/Shop/Shop.vue'
import Home from '../pages/Home/Home.vue'
import Search from '../pages/Search/Search.vue'
import Selection from '../pages/Discern/Selection/Selection.vue'
import FindCommdity from '../pages/Discern/FindCommdity/FindCommdity.vue'
export default [
  {
    path: '/home',
    component: Home,
    meta: {
      isShow: true
    }
  },
  {
    path: '/classify',
    component: Classify,
    meta: {
      isShow: true
    }
  },
  {
    path: '/shop',
    component: Shop,
    meta: {
      isShow: true
    }
  },
  {
    path: '/discern',
    component: Discern,
    children: [
      {
        path: '/discern/selection',
        component: Selection,
        meta: {
          isShow: true
        }
      },
      {
        path: '/discern/findCommdity',
        component: FindCommdity,
        meta: {
          isShow: true
        }
      },

      {
        path: '/discern',
        redirect: '/discern/findCommdity'
      }
    ],

    meta: {
      isShow: true
    },

  },
  {
    path: '/user',
    component: User,
  },
  {
    path: '/home/search',
    component: Search
  },
  {
    path: '/',
    redirect: '/home'
  }


]
