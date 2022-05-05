import createLogger from 'vuex/dist/logger';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

const plugins = [];

if (!IS_PRODUCTION) {
  plugins.push(
    createLogger({ collapsed: true }),
  );
}

export default plugins;
