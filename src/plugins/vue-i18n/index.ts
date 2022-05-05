import { VueConstructor } from 'vue';
import VueI18n, { LocaleMessages } from 'vue-i18n';

import ru from '../../locales/ru.json';

// Note: https://kazupon.github.io/vue-i18n/guide/formatting.html
// TODO: Добавить поддержку [hot-module](https://kazupon.github.io/vue-i18n/guide/hot-reload.html#advanced-example)
// TODO: Может использовать yaml|yml для файлов локализации?
function loadLocaleMessages(): LocaleMessages {
  const messages: LocaleMessages = {
    ru,
  };

  return messages;
}

function setupI18n(Vue: VueConstructor) {
  Vue.use(VueI18n);

  const locale = process.env.VUE_APP_I18N_LOCALE || 'ru';
  const fallbackLocale = process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'ru';
  const messages = loadLocaleMessages();

  const i18n = new VueI18n({
    locale,
    fallbackLocale,
    messages,
    warnHtmlInMessage: 'warn',
    pluralizationRules: {
    /**
     * @param choice {number} a choice index given by the input to $tc: `$tc('path.to.rule', choiceIndex)`
     * @param choicesLength {number} an overall amount of available choices
     * @returns a final choice index to select plural word by
     */
      ru(choice, choicesLength) {
      // this === VueI18n instance, so the locale property also exists here

        if (choice === 0) {
          return 0;
        }

        const teen = choice > 10 && choice < 20;
        const endsWithOne = choice % 10 === 1;

        if (choicesLength < 4) {
          return (!teen && endsWithOne) ? 1 : 2;
        }
        if (!teen && endsWithOne) {
          return 1;
        }
        if (!teen && choice % 10 >= 2 && choice % 10 <= 4) {
          return 2;
        }

        return (choicesLength < 4) ? 2 : 3;
      },
    },
  });

  return i18n;
}

// eslint-disable-next-line import/prefer-default-export
export { setupI18n };
