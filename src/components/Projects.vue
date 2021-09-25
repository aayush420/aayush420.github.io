<template>
  <div class="text-gray-600 body-font py-16">
    <!-- <h2 class="text-2xl">Projects</h2> -->
    <div class="container px-5 py-4 mx-auto flex flex-wrap flex-col">
      <div class="flex mx-auto flex-wrap mb-4">
          <a v-for="i in tabs" :key="i.link" :class="`cursor-pointer sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none tracking-wider ${currentTab == i.value ? 'bg-gray-100 border-indigo-500 text-indigo-500 rounded-t' : ' border-gray-200 hover:text-gray-900'}`" v-text="i.text" @click="currentTab = i.value"></a>
      </div>
      <div class="container text-xl pt-8" v-if="!projects[currentTab].length">
        No projects under the category yet!!
          <div class="flex mt-6 justify-center">
        <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
      </div>
      </div>
      <div class="container flex flex-wrap justify-center items-center gap-4" v-else>
            <div class="max-w-sm rounded overflow-hidden shadow-lg" v-for="i in projects[currentTab]" :key="currentTab + i.title">
              <div class="h-48 bg-red-500 central-grid">

              <img class="" :src="i.image" :alt="i.title" style="max-height: 6rem;">
              </div>
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2" v-text="i.title"></div>
                <p class="text-gray-700 text-base" v-text="i.description"></p>
              </div>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
import GaLogo from "../assets/projects/ga-logo.png";
import MyLogo from "../assets/logo.svg";
export default {
    data() {
        return {
          currentTab: "websites",
            tabs: [
                {text: "Websites", value: "websites"},
                {text: "Tools", value: "tools"},
                {text: "Open Source Contributions", value: "openSource"},
                {text: "Posters", value: "posters"}
            ],
            projects: {
              websites: [
                {title: "Global Avionics", description: "A super cool portfolio website for the aviation company Global Avionics.", image: GaLogo},
                {title: "My Portfolio", description: "This very own website with API from Google AppEngine and frontend from GitHub Pages", image: MyLogo},
              ],
              tools: [
                {title: "Global Avionics", description: "A super cool portfolio website for the aviation company Global Avionics.", image: GaLogo}
              ],
              openSource: [
                {title: "Global Avionics", description: "A super cool portfolio website for the aviation company Global Avionics.", image: GaLogo}
              ],
              posters: [

              ]
            }
            
        }
    }
};
</script>

<style>
</style>