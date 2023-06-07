import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {path: '', name: 'home', component: () => import('@/views/Home.vue')},
    {path: '/team', name: 'team', component: () => import('@/views/Team.vue')},
    {path: '/car', name: 'car', component: () => import('@/views/Car.vue')},
    {path: '/sponsors', name: 'sponsors', component: () => import('@/views/Sponsors.vue')},  
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router