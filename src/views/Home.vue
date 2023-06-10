<script>
  import welcome_message from "/src/assets/text/home/welcome.txt?raw"

  export default {
    data() {
      return {
        welcome_message,
        image_loc: '/src/assets/images/logo_test.png'
      }
    }
  }
</script>

<template>
  <div class="home">
    <h1>{{ welcome_message }}</h1>
    <img :src="image_loc">
  </div>
</template>
