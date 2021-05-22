<template>
  <div class="text-gray-600 body-font py-16">
    <h2 class="text-2xl">Projects</h2>
    <div class="container px-5 py-4 mx-auto flex flex-wrap flex-col">
      <div class="flex mx-auto flex-wrap mb-20">
          <a v-for="i in tabs" :key="i.link" :class="`cursor-pointer sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none tracking-wider ${currentTab == i.value ? 'bg-gray-100 border-indigo-500 text-indigo-500 rounded-t' : ' border-gray-200 hover:text-gray-900'}`" v-text="i.text" @click="currentTab = i.value"></a>
      </div>
      <div id="dynamic-projects">Dynamic Projects</div>
      <div id="static-projects">Static Projects</div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            tabs: [
                {text: "Websites", value: "websites"},
                {text: "Tools", value: "tools"},
                {text: "Open Source Contributions", value: "openSource"},
                {text: "Posters", value: "posters"}
            ],
            currentTab: "websites"
        }
    }
};
</script>

<style>
</style>