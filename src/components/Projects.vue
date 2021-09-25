<template>
  <div class="text-gray-600 body-font py-16">
    <!-- <h2 class="text-2xl">Projects</h2> -->
    <div class="container px-5 py-4 mx-auto flex flex-wrap flex-col">
      <div class="flex mx-auto flex-wrap mb-4">
        <a
          v-for="i in tabs"
          :key="i.link"
          :class="`cursor-pointer sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none tracking-wider ${
            currentTab == i.value ? 'bg-gray-100 border-indigo-500 text-indigo-500 rounded-t' : ' border-gray-200 hover:text-gray-900'
          }`"
          v-text="i.text"
          @click="currentTab = i.value"
        ></a>
      </div>
      <div class="container text-xl pt-8" v-if="!projects[currentTab].length">
        No public projects under the category yet!!
        <div class="flex mt-6 justify-center">
          <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
        </div>
      </div>
      <div class="container flex flex-wrap justify-center items-center items-stretch gap-4" v-else>
        <router-link
          :to="`/project/${currentTab}/${i.title}`"
          tag="div"
          class="max-w-sm flex-col rounded overflow-hidden shadow-lg w-full sm:w-1/3"
          v-for="i in projects[currentTab]"
          :key="currentTab + i.title"
        >
          <div :class="`h-48 ${currentTab == 'posters' ? 'white' : 'bg-red-500'} central-grid`">
            <img class="" :src="i.image" :alt="i.title" :style="`max-height: ${currentTab == 'posters' ? '12rem;height:12' : 6}rem;`" />
          </div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2" v-text="i.title"></div>
            <p class="text-gray-700 text-base" v-text="i.description"></p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTab: "websites",
      tabs: [
        { text: "Websites", value: "websites" },
        { text: "Tools", value: "tools" },
        { text: "Open Source Contributions", value: "openSource" },
        { text: "Posters", value: "posters" },
      ],
    };
  },
};
</script>

<style>
</style>