<template>
  <header class="h-16 header fixed w-full bg-gray-800 text-gray-50 pt-4 p-2">
    <div class="wrap">
      <div class="h-8 inline absolute left-0 logo">
        <a href="#"><img src="../assets/logo.svg" class="h-full inline-block px-4" /> <span class="text-xl hidden md:inline-block">Balakrishna Prasad Ganne</span></a>
      </div>

      <a class="h-8 inline-block md:hidden" id="menu-icon" @click="hidden = !hidden">&#9776; Menu</a>

      <nav class="navbar md:absolute md:right-0 bg-gray-800 md:mr-8">
        <ul class="menu flex flex-col md:flex-row" v-show="!hidden">
          <router-link class="h-8 px-2 mx-2" :to="{ name: 'Home' }">Home</router-link>
          <li class="h-8 px-2 mx-2" v-for="i in links" :key="i.link"><a class="" :href="i.link" v-text="i.text"></a></li>
          <router-link class="h-8 px-2 mx-2" :to="{ name: 'Project' }">Project</router-link>
          <router-link class="h-8 px-2 mx-2" :to="{ name: 'HistoryPath' }">Life History</router-link>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { text: "Projects", link: "#projects" },
        { text: "About", link: "#about" },
        { text: "Contact", link: "#contact" },
      ],
      hidden: false,
    };
  },
};
</script>