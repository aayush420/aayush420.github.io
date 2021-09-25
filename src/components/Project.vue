<template>
  <section class="text-gray-600 body-font">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img
          class="object-cover object-center rounded bg-red-500 mx-auto"
          alt="hero"
          :src="getProjectImg"
          :style="$route.params.type == 'posters' ? 'max-height:80vh;max-width:40vw' : 'max-height: 50vh; padding: 10%'"
        />
      </div>
      <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900" v-text="project.title"></h1>
        <p class="mb-8 leading-relaxed" v-text="project.description"></p>
        <div class="flex justify-center">
          <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
          <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    project() {
      console.log(this.projects, this.projects[this.$route.params.type]);
      return this.projects[this.$route.params.type].find((project) => project.title === this.$route.params.item);
    },
    getProjectImg() {
      if (this.$route.params.type == "posters") {
        let b = this.project.image.split("/");
        let c = [...b.slice(0, -1), "original", b.slice(-1)];
        return c.join("/");
      } else return this.project.image;
    },
  },
};
</script>

<style>
</style>