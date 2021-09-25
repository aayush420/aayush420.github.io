<template>
<div id="app_internal">
  <Nav1></Nav1>
  <!-- <img alt="Vue logo" src="./assets/logo.svg" /> -->
  <!-- <div class="bg-red-500 text-red-100">Hello from Tailwind again and again!!</div> -->
  <div id="home" style="display: grid; height: 80vh; place-items: center">
    <div class="md:leading-relaxed text-2xl md:text-7xl mt-16">
      Nothing<br />[ worth having ]<br />comes easy
    </div>
  </div>
  <Projects id="projects"></Projects>
  <div id="about">About Me</div>
  <Historypath id="history"></Historypath>
  <div id="contact">My Contact Info</div>
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
</div>
</template>

<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import Nav1 from "./components/Nav.vue";
import Projects from "./components/Projects.vue";
import Historypath from "./components/Historypath.vue";

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
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
#app_internal {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
}
#home, #projects, #about, #history, #contact {
  scroll-snap-align: start;
}
</style>
