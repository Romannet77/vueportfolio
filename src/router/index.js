import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import My from '../views/My.vue'
import Friend from '../views/Friend.vue'
import CursorTrap from '../views/experiments/CursorTrap.vue'
import SquareTrap from '../views/experiments/SquareTrap.vue'
import SquareRun from '../views/experiments/SquareRun.vue'
import Example from '../views/experiments/Example.vue'
import PortfolioForm from '../views/portfolio/Form.vue'
import List from '../views/portfolio/List.vue'
import PortfolioShow from '../views/portfolio/PortfolioShow.vue'
import Login from '../views/Login.vue'
import Password from '../views/Password.vue'
import Register from '../views/Register.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/password',
    name: 'password',
    component: Password
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/my',
    name: 'My',
    component: My
  },
  {
    path: '/friend',
    name: 'Friend',
    component: Friend
  },
  {
    path: '/experiments/CursorTrap',
    name: 'CursorTrap',
    component: CursorTrap
  },
  {
    path: '/experiments/SquareTrap',
    name: 'SquareTrap',
    component: SquareTrap
  },
  {
    path: '/experiments/SquareRun',
    name: 'SquareRun',
    component: SquareRun
  },
  {
    path: '/experiments/Example',
    name: 'Example',
    component: Example
  },
  {
    path: '/portfolio/new',
    name: 'Form',
    component: PortfolioForm
  },
  {
    path: '/portfolio/List',
    name: 'List',
    component: List
  },
  {
    path: '/portfolio/:slug',
    name: 'Portfolio page',
    component: PortfolioShow
  },
  {
    path: '/portfolio/edit/:slug',
    name: 'Portfolio page',
    component: PortfolioForm
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// VueRouter = new VueRouter({
//   routes: [
//     {
//       path: '/about/:id',
//       component: About,
//       children: [
//         {
//           // UserProfile will be rendered inside User's <router-view>
//           // when /user/:id/profile is matched
//           path: '',
//           component: My
//         },
//         {
//           // UserPosts will be rendered inside User's <router-view>
//           // when /user/:id/posts is matched
//           path: '',
//           component: Friend
//         }
//       ]
//     }
//   ]
// })
export default router
