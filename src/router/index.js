import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegiterView.vue'
import TodoListView from '@/views/TodoListView.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      redirect: '/login',
    },

    {
      path: '/todoList',
      name: 'todoList',
      component: TodoListView,
      meta: { requiresAuth: true },
    },

    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },

    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
  ],
})

// 路由守衛
router.beforeEach((to, from) => {
  const token = document.cookie.replace(
    /(?:(?:^|.*;\s*)vue3-todolist-token\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  )

  if (to.meta.requiresAuth && !token) {
    return '/login'
  }

  if ((to.path === '/login' || to.path === '/register') && token) {
    return '/todoList'
  }
})
export default router
