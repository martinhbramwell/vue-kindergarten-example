import Vue from 'vue';

import VueKindergarten from 'vue-kindergarten';

import App from './App.vue';
import router from './router';
import store from './store';

import child from './child';

import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.use(VueKindergarten, { child });

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
