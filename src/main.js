import Vue from 'vue';

/** 兼容性库 for fetch */
import 'whatwg-fetch';
/** 兼容性库 promise */
// import es6Promise from 'es6-promise';

import App from './App.vue';
import router from './router';



Vue.config.productionTip = false;
// es6Promise.polyfill();


new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
