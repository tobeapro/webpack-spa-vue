import Vue from 'vue';
import Router from 'vue-router';
import NotFound from '@/components/404.vue';

Vue.use(Router);
export const initialRouters = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/home.vue')
  },
  {
    path: '/hello',
    name: 'HelloVue',
    component: () => import('@/pages/helloVue.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound,
  }
]

export default new Router({
  routes: initialRouters,
  scrollBehavior() {
    return {x: 0, y: 0}
  }
})