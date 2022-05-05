import Vue from 'vue';
import VueRouter from 'vue-router';
import createRouter from './router';

Vue.use(VueRouter);

const router = createRouter({
  mode: 'history',
});

export default router;
