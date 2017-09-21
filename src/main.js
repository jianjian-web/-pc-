// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import VueResource from "vue-resource";
Vue.use(VueResource);
// import Mint from 'mint-ui';
import Vuex from "vuex";
import store from "./store/";
import ElementUI from "element-ui";
import "element-ui/lib/theme-default/index.css";
import "./assets/iconfont/iconfont.css";
import { baseUrl } from "./config/env";
Vue.use(ElementUI);
// Vue.use(Mint);
Vue.config.productionTip = false;
Vue.component("wLayout", require("./components/Layout.vue").default);
Vue.component("wHeader", require("./components/Header.vue").default);
Vue.component("wNav", require("./components/NavMenu.vue").default);
Vue.component("wMain", require("./components/Main.vue").default);
Vue.component("wFindMusic", require("./components/FindMusic.vue").default);
Vue.component("wTitle", require("./components/common/MainTitle.vue").default);
Vue.component("wTag", require("./components/common/TagToggle.vue").default);
Vue.component("wSongSheet", require("./components/SongSheet.vue").default);
Vue.component("wMvTitle", require("./components/common/MvTitle.vue").default);

/*请求拦截器*/
Vue.http.interceptors.push(function(request, next) {
  // modify headers
  // request.headers.set("Authorization", "Bearer TOKEN");
  request.url = baseUrl + request.url;
  console.dir(request);
  // continue to next interceptor
  next(response => {
    if (response.status == "401") {
      alert("请登录");
    } else if (response.status == "404") {
      alert("404");
    }
  });
});

/*==================================*/

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
