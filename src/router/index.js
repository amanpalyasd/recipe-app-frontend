import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/Home.vue'
import LoginView from '../components/Login.vue';
import RegisterView from '@/components/Register.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView},
    { path: '/login', name: 'Login', component: LoginView },
    { path: '/register', name: 'Register', component: RegisterView },
  ],
})

export default router
