<template>
  <Nav1></Nav1>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <div class="bg-red-500 text-red-100">Hello from Tailwind again and again!!</div> -->
  <div id="home" style="display: grid; height: 80vh; place-items: center">
    <div class="leading-relaxed text-7xl mt-16">
      Nothing<br />[ worth having ]<br />comes easy
    </div>
  </div>
  <div id="projects">
    Projects
    <div id="dynamic-projects">
      Dynamic Projects
    </div>
    <div id="static-projects">
      Static Projects
    </div>
  </div>
  <div id="about">
    About Me
  </div>
  <div id="contact">
    My Contact Info
  </div>
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
</template>

<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import Nav1 from "./components/Nav.vue";

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
</style>
