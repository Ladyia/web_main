import Vue from 'vue';

import Router from 'vue-router';

import home from './components/pageHome.vue';
import user from './components/pageUser.vue';
import welcome from './components/pageWelcome.vue';
import {sysStore} from './components/sysStore.vue';
import tsElement from './components/tsElement.vue';

Vue.use(Router);

const routePaths = [
  {
    path: '/home',
    component: home,
    meta: {title: '起始页'},
  },
  {
    path: '/user',
    component: user,
    meta: {title: '用户页'},
  },
  {
    path: '/welcome',
    component: welcome,
    meta: {title: '欢迎页'},
  },
];

const mRouter = new Router({
  routes: routePaths,
});

mRouter.beforeEach((to, from, next) => {
  if (routePaths.some((item, idx, arr) => {
    return item.path === to.path;
  })) {
    next();
  } else {
    next('/home');
  }
});

mRouter.afterEach((to, from) => {
  
});

const v = new Vue({
  el: '#app',
  template: '<ts-element :message=\'msg\'></ts-element>',
  data: {
    msg: 'Hello world!',
  },
  components: {
    tsElement,
  },
  router: mRouter,
});
