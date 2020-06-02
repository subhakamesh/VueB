<template>
  <div>
    <app-header></app-header>

    <div class="container">
      <userProf
        :profilename="name"
        :profilelastname="lastname"
        :profileage="age"
        :profileparents="parents"
        @changename="name = $event"
        :updatelastname="updatelastname"
      />
    </div>
    <compFooter />
  </div>
</template>

<script>
import compFooter from "./components/header-footer/Footer.vue";
import userProf from "./components/User/Profile.vue";

export default {
  data() {
    return {
      name: "kamesh",
      lastname: "Sai Subha",
      //prop type console error age should not be string in child
      age: 28,
      parents: {
        mother: "kanaka durga",
        father: "Dattatreya Sharma"
      }
    };
  },
  methods: {
    updatelastname(value) {
      this.lastname = value;
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