<script>
import Header from "./Header.vue"
import Footer from "./Footer.vue"

export default {
  name: "app",
  components: {
    Header,
    Footer,
  }
}
</script>

<template>
  <Header title="MSJ CPC" />

  <router-view></router-view>

  <Footer />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1, h2, h3, h4, h5, h6 {
    font-family: IPS-Medium;
}

div, p, a {
    font-family: IPS-Regular;
}

html {
  background: #f2f2f1;
}

@font-face {
    font-family: 'IPS-Bold';
    src: url('$fonts/IBMPlexSans-Bold.ttf')format('truetype');
}
@font-face {
    font-family: 'IPS-Medium';
    src: url('$fonts/IBMPlexSans-Medium.ttf')format('truetype');
}
@font-face {
    font-family: 'IPS-Regular';
    src: url('$fonts/IBMPlexSans-Regular.ttf')format('truetype');
}
</style>
