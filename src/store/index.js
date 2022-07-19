import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    async getUserList(store, params) {
      return await Vue.axios.get(
        `https://randomuser.me/api/?seed=randomuser&page=${params.page}3&results=${params.results}`
      );
    },
  },
  modules: {},
});
