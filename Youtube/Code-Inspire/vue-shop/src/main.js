import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap';
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;
import 'popper.js';
import './assets/app.scss';

Vue.config.productionTip = false;
Vue.component('NavBar', require('./components/NavBar.vue').default);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");