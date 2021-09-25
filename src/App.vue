<template>
  <Nav1></Nav1>
  <main class="pt-16">
    <router-view></router-view>
  </main>
</template>

<script>
import Nav1 from "./components/Nav.vue";
export default {
  components: {
    Nav1,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>