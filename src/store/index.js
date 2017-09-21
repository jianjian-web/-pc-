import Vue from "vue";
import Vuex from "vuex";

import createPersistedState from "vuex-persistedstate";

import mutations from "./mutations";
import actions from "./action";
import getters from "./getters";

Vue.use(Vuex);

const state = {
  mainTitle: ""           //主体左上角显示的当前标题
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  plugins: [createPersistedState()]
});
