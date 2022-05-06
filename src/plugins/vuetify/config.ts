import { VuetifyPreset } from 'vuetify';



/** :TODO Не работают импорты из титифая, подключить иконки из титифая */
import icons from './titify-icons';
import projectIcons from './icons';

const config = {
  theme: {
    default: 'light',
    options: {
      // Note: IE does not support CSS Custom Properties
      customProperties: false,
    },
  } as VuetifyPreset['theme'],
  icons: {
    iconfont: icons.iconfont as VuetifyPreset['icons']['iconfont'],
    values: {
      ...icons.values,
      ...projectIcons,
    },
  },
  lang: {
    current: 'ru',
  },
};

export default config;
