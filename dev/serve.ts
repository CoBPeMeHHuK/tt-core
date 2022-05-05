import Vue, { VNode } from 'vue';
import Dev from './serve.vue';

import Vuetify from 'vuetify'

import { setupI18n } from '../src/plugins/vue-i18n';
import { extendWithVuetify } from '@/plugins/vuetify'
import router from '../src/plugins/vue-router';

import '../src/styles/main.scss'

import TtCore from '@/entry.esm';

Vue.use(TtCore);
Vue.use(Vuetify)

Vue.config.productionTip = false;

new Vue({
  name: 'TalentTechCore',
  router,
  vuetify: extendWithVuetify(Vue),
  i18n: setupI18n(Vue),
  render: (h): VNode => h(Dev),
}).$mount('#app');
