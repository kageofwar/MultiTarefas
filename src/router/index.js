import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Visualizar from '../views/calculadorDeDividas/Visualizar.vue'
import Criar from '../views/calculadorDeDividas/Criar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/calculador_de_dividas/existentes',
      name: 'Visualizar',
      component: Visualizar
    },
    {
      path: '/calculador_de_dividas/novo',
      name: 'Criar',
      component: Criar
    }
  ]
})

export default router
