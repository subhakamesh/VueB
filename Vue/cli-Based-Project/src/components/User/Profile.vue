<template>
  <div class="container">
    <div class="user_profile">
      <h3>User information</h3>
      <ul>
        <li>
          <span>Name:</span>
          {{name}}
        </li>
        <li>
          <span>Last Name:</span>
          {{lastname}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: ["name", "lastname"]
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