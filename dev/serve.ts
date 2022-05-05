import Vue, { VNode } from 'vue';
import Dev from './serve.vue';

import Vuetify from 'vuetify'

import {
  setupI18n
} from '@/plugins/vue-i18n';

import TtCore from '@/entry.esm';

Vue.use(TtCore);
Vue.use(Vuetify)

Vue.config.productionTip = false;

new Vue({
  name: 'TalentTechCore',
  i18n: setupI18n(Vue),
  render: (h): VNode => h(Dev),
}).$mount('#app');
