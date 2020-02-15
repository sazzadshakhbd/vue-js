import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

Vue.component("alert", require('./components/Alert.vue').default);
Vue.component("TodoList", require('./components/TodoList.vue').default);

// Define a new component called button-counter
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
