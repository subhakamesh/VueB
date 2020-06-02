<template>
  <div>
    <div class="user_profile">
      <h3>User information</h3>
      <ul>
        <li>
          <span>Name:</span>
          {{profilename}}
        </li>
        <li>
          <span>Last Name:</span>
          {{profilelastname}}
        </li>

        <li>
          <span>Age:</span>
          {{profileage}}
        </li>
      </ul>
      <h3>parents</h3>
      <ul>
        <li v-for="(key,value,index) in profileparents" :key="index">
          {{value}} :
          <span>{{key}}</span>
        </li>
      </ul>
    </div>
    <button @click="changename">Update Name</button>
    <button @click="updatelastname('Kanish')">Update LastName</button>
  </div>
</template>
<script>
export default {
  props: {
    profilename: String,
    profilelastname: String,
    profileage: Number,
    profileparents: Object,
    updatelastname: Function
  },
  methods: {
    changename() {
      //Mutating props
      //this.profilename = "Chavali";
      this.$emit("changename", "chavali");
    }
  }
};
</script>
<style scoped>
span {
  font-weight: 800;
}
.user_profile {
  border: 1px solid #2196f3;
  padding: 10px 20px;
}
.container {
  min-height: 84vh;
  box-sizing: border-box;
  padding: 20px;
}
</style>