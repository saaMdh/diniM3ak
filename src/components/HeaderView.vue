<template>
  <nav class="w-full h-[20px] bg-red-300 flex justify-between">
    <div><router-link to="/">Home</router-link></div>
    <div>
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link>
    </div>
  </nav>
</template>
<script>
export default {
  name: "headerView",
};
</script>
