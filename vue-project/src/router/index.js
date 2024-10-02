import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/components/HomeView.vue'
import ContactView from '@/components/ContactView.vue'
import Register from '@/components/Register.vue'
import Login from '@/components/Login.vue'
import NotFound from '@/components/NotFound.vue'
import Dashboard from '@/components/Dashboard.vue'
import Account from '@/components/Account.vue'
import Product from '@/components/Product.vue'
import ListUser from '@/components/ListUser.vue'
import UserDetail from '@/components/UserDetail.vue'
import EmployeeProfile from '@/components/EmployeeProfile.vue'
import ListEmployee from '@/components/ListEmployee.vue'
import EmployeeProjects from '@/components/EmployeeProjects.vue'
import EmployeeDetail from '@/components/EmployeeDetail.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/register',
      name:'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/:pathMatch(.*)*', 
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },

    {
      path: '/account',
      name: 'account',
      component: Account,
    },
    {
      path: '/product',
      name: 'product',
      component: Product,
     
    },
    {
      path: '/',
      name: 'ListUser',
      component: ListUser
    },
    {
      path: '/user/:id',
      name: 'UserDetail',
      component: UserDetail,
    },{
      path: '/employees',
      name: 'ListEmployee',
      component: ListEmployee
    },
    {
      path: '/employees/:id',
      name: 'EmployeeDetail',
      component: EmployeeDetail,
      children: [
        {
          path: 'profile',
          component: EmployeeProfile
        },
        {
          path: 'projects',
          component: EmployeeProjects
        }
  
      ]
    }
  
  ]
})

export default router
