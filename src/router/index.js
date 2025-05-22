import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/Home.vue'
import LoginView from '../components/Login.vue';
import RegisterView from '@/components/Register.vue';
import FoodListView from '@/components/FoodList.vue';
import DashboardView from '@/components/Dashboard.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView},
    { path: '/login', name: 'Login', component: LoginView },
    { path: '/register', name: 'Register', component: RegisterView },
    { path: '/dashboard', name: 'Dashboard', component: DashboardView},
    { path: '/foods', name: 'FoodList', component: FoodListView}
  ],
})

// router.beforeEach((to, from, next) => {
//   const token = sessionStorage.getItem('token');
//   const role = sessionStorage.getItem('role');

//   if (to.meta.requiresAuth && !token) {
//     next('/login');
//   } else if (to.meta.role && to.meta.role !== role) {
//     // Prevent unauthorized access to admin/user routes
//     alert("Access Denied!");
//     next('/login');
//   } else {
//     next();
//   }
// });

export default router
