import { createRouter, createWebHistory } from 'vue-router';
import { RouteName } from '../../enums';

const routes = [
  {
    name: RouteName.TICKET,
    path: '/ticket/:id',
    component: () => import('../../views/TicketView.vue')
  },
  {
    name: RouteName.TICKETS,
    path: '/',
    component: () => import('../../views/TicketsView.vue')
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});
