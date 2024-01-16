import Vue from 'vue';
import Router from 'vue-router';

import routeAbout from '@/router/routeAbout';
import routePlayground from '@/router/routePlayground';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      // Setze die Login-Komponente als Standardkomponente für die Wurzelroute
      component: () => import('@/views/Login.vue'),
      meta: { showNavigation: false, showSystemBar: false, showBreadcrumbBar: false},
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/Home.vue'),
      meta: { showNavigation: true, showSystemBar: true , showBreadcrumbBar: true},
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About.vue'),
      children: routeAbout,
      meta: { showNavigation: true, showSystemBar: true , showBreadcrumbBar: true},
    },
    {
      path: '/playground',
      name: 'playground',
      component: () => import('@/views/Playground.vue'),
      children: routePlayground,
      meta: { showNavigation: true, showSystemBar: true , showBreadcrumbBar: true},
    },
  ],
});
