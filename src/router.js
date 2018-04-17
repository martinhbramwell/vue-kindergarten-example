import Vue from 'vue';
import Router from 'vue-router';

import { createSandbox } from 'vue-kindergarten';

import Hello from '@/components/Hello.vue';
import Bye from '@/components/Bye.vue';
import Secret from '@/components/Secret.vue';

import * as perimeters from './perimeters';
import RouteGoverness from './governesses/RouteGoverness'; // eslint-disable-line no-unused-vars
import store from './store';
import child from './child';

import Home from './views/Home.vue';
// import About from './views/About.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: About,
    // },
    {
      path: '/hello',
      name: 'hello',
      component: Hello,
    },
    {
      path: '/bye',
      name: 'bye',
      component: Bye,
    },
    {
      path: '/secret',
      name: 'secret',
      component: Secret,
    },
  ],
});

const showTheBugInAction = false; // ********  Set this to true to see the error
//                                   ********  "Cannot read property 'from' of undefined"
router.beforeEach((to, from, next) => {
  const perimeter = perimeters[`${to.name}Perimeter`];
  if (perimeter) {
    let sandbox = null;

    if (showTheBugInAction) {
      sandbox = createSandbox(child(store), {
        perimeters: [
          perimeter,
        ],
        governess: new RouteGoverness({ from, to, next }),
      });
      return sandbox.guard('route');
    }

    sandbox = createSandbox(child(store), {
      perimeters: [
        perimeter,
      ],
    });
    if (!sandbox.isAllowed('route')) {
      return next('/');
    }
  }
  return next();
});

export default router;
