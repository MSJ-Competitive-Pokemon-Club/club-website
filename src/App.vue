<script>
import Header from "./components/Header.vue"

export default {
  name: "app",
  components: {
    Header,
  }
}
</script>

<template>
  <Header title="CPC Club" ></Header>

  <router-view></router-view>

</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
