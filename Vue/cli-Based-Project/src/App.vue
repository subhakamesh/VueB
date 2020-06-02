<template>
  <div>
    <app-header></app-header>

    <div class="container"></div>
    <userProf :name="name" lastname="Sai Subha" />
    <button @click="changename">Change Name</button>
    <compFooter />
  </div>
</template>

<script>
import compFooter from "./components/header-footer/Footer.vue";
import userProf from "./components/User/Profile.vue";

export default {
  data() {
    return {
      name: "kamesh"
    };
  },
  methods: {
    changename() {
      this.name = "Chavali";
    }
  },
  components: {
    compFooter,
    userProf
  }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;
}
.container {
  min-height: 84vh;
  box-sizing: border-box;
  padding: 20px;
}
</style>