<template>
  <div id="app_internal">
    <!-- <img alt="Vue logo" src="./assets/logo.svg" /> -->
    <!-- <div class="bg-red-500 text-red-100">Hello from Tailwind again and again!!</div> -->
    <div id="home" style="display: grid; place-items: center" class="mb-16">
      <div class="md:leading-relaxed text-2xl md:text-7xl mt-16">Nothing<br />[ worth having ]<br />comes easy</div>
    </div>
    <Projects id="projects"></Projects>
    <div id="about" class="my-8">
      <h4 class="text-xl underline">About</h4>
      <ul class="text-lg list-disc text-center">
        <li>Just the regular techie.</li>
        <li>Have worked on some really cool projects.</li>
        <li>Have some experience with the security stuff. Not a hacker..</li>
      </ul>
    </div>
    <div id="contact" class="">
      <h4 class="text-xl underline">Contact</h4>
      <ul class="text-lg text-center">
        <li> <a class="hover:underline" href="tel:+919492759420"> +91 9492 759 420</a></li>
        <li> <a class="hover:underline" href="tel:+917438883560">+91 7438 883 560 </a></li>
        <li> <a class="hover:underline" href="mailto:bala@gannesoft.in">bala@gannesoft.in</a></li>
      </ul>
    </div>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Projects from "../components/Projects.vue";
export default {
  components: {
    Projects,
  },
};
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
#app_internal {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
}

#home,
#projects,
#about,
#history,
#contact {
  scroll-snap-align: start;
}
</style>
