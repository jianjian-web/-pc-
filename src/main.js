// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Mint from 'mint-ui';
import Vuex from 'vuex'
import store from './store/'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './assets/iconfont/iconfont.css'
Vue.use(ElementUI)
// Vue.use(Mint);
Vue.config.productionTip = false
Vue.component("w-header",require("./components/Header.vue").default)
Vue.component("w-nav",require("./components/NavMenu.vue").default)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
