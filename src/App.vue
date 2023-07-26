<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"

export default {
  name: "app",
  components: {
    Header,
    Footer,
  }
}
</script>

<template>
  <Header title="CPC Club" ></Header>

  <router-view></router-view>

  <Footer></Footer>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
