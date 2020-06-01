import Vue from "vue";
import App from "./App.vue";
import Header from "./components/header-footer/header.vue";

vue.component("app-header", Header);

new Vue({
  el: "#app",
  render: h => h(App)
});
