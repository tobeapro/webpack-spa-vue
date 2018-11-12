import Vue from 'vue';
import Router from 'vue-router';
import NotFound from '@/components/404.vue';
import Home from '@/pages/home.vue';
import Hello from '@/pages/helloVue.vue';
Vue.use(Router);
export const initialRouters = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/hello',
    name: 'HelloVue',
    component: Hello
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