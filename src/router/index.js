import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MonsterDetail from '../views/MonsterDetail.vue'; 
import AllMonsters from '../views/AllMonsters.vue'; 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/monster-detail/:id',
      name: 'monster-detail',
      component: MonsterDetail,
      props: true,
    },
    {
      path: '/all-monsters',
      name: 'all-monsters',
      component: AllMonsters
    },
  ]
});

export default router;
