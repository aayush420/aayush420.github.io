<template>
  <header class="header fixed w-full bg-gray-800 text-gray-50 pt-4 p-2">
    <div class="wrap">
      <div class="h-8 inline absolute left-0 logo"><a href="#"><img src="../assets/logo.png" class="h-full inline-block px-4" /> <span class="text-xl">Balakrishna Prasad Ganne</span></a></div>

      <a class="inline-block" id="menu-icon">&#9776; Menu</a>

      <nav class="navbar">
        <ul class="menu">
          <li v-for="i in links" :key="i.link"><a class="" :href="i.link" v-text="i.text"></a></li>
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
                {text:"Home", link:"#home"},
                {text:"Projects", link:"#projects"},
                {text:"About", link:"#about"},
                {text:"Contact", link:"#contact"}
            ]
        }
    }
}
</script>