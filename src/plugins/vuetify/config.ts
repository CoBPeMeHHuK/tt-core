import { VuetifyPreset } from 'vuetify';

import ru from '@uikit/locales/ru';
import breakpoint from '@uikit/themes/tt.breakpoint';
import TTLightTheme from '@uikit/themes/tt.light.theme';
import TTDarkTheme from '@uikit/themes/tt.dark.theme';
import icons from '@uikit/icons';
import projectIcons from './icons';

const config = {
  theme: {
    default: 'light',
    themes: {
      light: TTLightTheme as VuetifyPreset['VuetifyThemeVariant'],
      dark: TTDarkTheme as VuetifyPreset['VuetifyThemeVariant'],
    },
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
    locales: { ru },
    current: 'ru',
  },
  breakpoint: breakpoint as VuetifyPreset['breakpoint'],
};

export default config;
