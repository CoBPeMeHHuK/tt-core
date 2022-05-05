import { VueConstructor } from 'vue';
import Vuetify from 'vuetify';

import config from './config';
import components from './components';

function extendWithVuetify(Vue: VueConstructor) {
  Vue.use(Vuetify);

  Object.entries(components).forEach(([componentName, component]: [string, VueConstructor]) => {
    Vue.component(componentName, component);
  });

  return new Vuetify(config);
}

export { extendWithVuetify, config, components };
