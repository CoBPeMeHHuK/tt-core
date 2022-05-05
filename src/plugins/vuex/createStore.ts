import { Store } from 'vuex';

function createStore() {
  const store = new Store({

    // TODO: refactor use modules
    state: {
      loading: false,
      navDrawer: false,
      snackbar: {
        value: false,
        message: '',
        color: '',
        timeout: 3000,
      },
    },

    actions: {},

    mutations: {

    },

    getters: {},
  });

  return store;
}

export default createStore;
