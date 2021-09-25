<template>
  <div class="text-gray-600 body-font py-16">
    <!-- <h2 class="text-2xl">Projects</h2> -->
    <div class="container px-5 py-4 mx-auto flex flex-wrap flex-col">
      <div class="flex mx-auto flex-wrap mb-4">
          <a v-for="i in tabs" :key="i.link" :class="`cursor-pointer sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none tracking-wider ${currentTab == i.value ? 'bg-gray-100 border-indigo-500 text-indigo-500 rounded-t' : ' border-gray-200 hover:text-gray-900'}`" v-text="i.text" @click="currentTab = i.value"></a>
      </div>
      <div class="container text-xl pt-8" v-if="!projects[currentTab].length">
        No public projects under the category yet!!
          <div class="flex mt-6 justify-center">
        <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
      </div>
      </div>
      <div class="container flex flex-wrap justify-center items-center items-stretch gap-4" v-else>
            <div class="max-w-sm flex-col rounded overflow-hidden shadow-lg w-full sm:w-1/3" v-for="i in projects[currentTab]" :key="currentTab + i.title">
              <div :class="`h-48 ${currentTab == 'posters' ? 'white' : 'bg-red-500'} central-grid`">

              <img class="" :src="i.image" :alt="i.title" :style="`max-height: ${currentTab == 'posters'? '12rem;height:12' : 6}rem;`">
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
import Pic1Word from "../assets/projects/4pic1word-logo.png";
import Poster1 from "../assets/portfolio/1.jpg";
import Poster2 from "../assets/portfolio/2.jpg";
import Poster3 from "../assets/portfolio/3.jpg";
import Poster4 from "../assets/portfolio/4.jpg";
import Poster5 from "../assets/portfolio/5.jpg";
import Poster6 from "../assets/portfolio/6.jpg";

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
                {title: "My Portfolio", description: "This very own website with API from Google AppEngine and frontend from GitHub Pages", image: MyLogo},
                {title: "Global Avionics", description: "A super cool portfolio website for an aviation company Global Avionics.", image: GaLogo},
              ],
              tools: [
                {title: "4 Pics 1 Word Solver", description: "A simple python script built to solve 4Pics1Word game puzzles", image: Pic1Word},
                {title: "Sudoku Solver", description: "A simple python script built to solve given Sudoku puzzles", image: MyLogo}
              ],
              openSource: [
                // {title: "Global Avionics", description: "A super cool portfolio website for the aviation company Global Avionics.", image: GaLogo}
                { title: "FyneBuilder", description: "A Golang GUI application absed on Fyne to help devs in building UIs", image: MyLogo}
              ],
              posters: [
                {title:'Banner on Cultural Night', description:'Banner for Cultural Eve', image: Poster1},
                {title:'Welcome Poster', description:'Banner for welcoming outsiders', image: Poster2},
                {title:'Certificate', description:'Merit cum Participation Certificate for encouraging the participants and the Winners', image: Poster3},
                {title:'CD Sovenier', description:'Sovenier CD Cover designed for distribution over the participants', image: Poster4},
                {title:'Inaguration Poster', description:'Inaguration Banner that was displayed in the Inaguration ceremony of the great Technical Fest Scintillace, 2016', image: Poster5},
                {title:'Sponsors Banner', description:'Banner displaying the list of sponsors for the Technical Fest Scintillace, 2k16', image: Poster6},

              ]
            }
            
        }
    }
};
</script>

<style>
</style>