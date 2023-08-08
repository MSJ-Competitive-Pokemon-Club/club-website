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
  font-size:50px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  background: #f2f2f1;
}
</style>
