import Vue from "vue";
import App from "./App.vue";
import Header from "./components/header-footer/header.vue";

Vue.component("app-header", Header);

new Vue({
  el: "#app",
  render: h => h(App)
});
