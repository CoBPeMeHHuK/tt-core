import Vue, { VNode } from 'vue';
import Dev from './serve.vue';
import Vuetify from 'vuetify'
// To register individual components where they are used (serve.vue) instead of using the
// library as a whole, comment/remove this import and it's corresponding "Vue.use" call
import TtCore from '@/entry.esm';
Vue.use(TtCore);
Vue.use(Vuetify)

Vue.config.productionTip = false;

new Vue({
  render: (h): VNode => h(Dev),
}).$mount('#app');
