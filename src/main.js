import Vue from 'vue';

/** 兼容性库 for fetch */
import 'whatwg-fetch';
/** 兼容性库 promise */
import "@babel/polyfill";

import App from './App.vue';
import router from './router';
import '@/assets/global.css';


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
