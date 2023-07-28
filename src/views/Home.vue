<script>
  import welcome_message from "/src/assets/text/home/welcome.txt?raw"

  export default {
    data() {
      return {
        welcome_message,
        image_loc: '/src/assets/images/logo_test.png',
        CPC_logo: '/src/assets/images/CPC_logo.png'
      }
    }
  }
</script>

<template>
  <div class="intro-section">
    <h1 id="site-title"> MSJ Competitive Pokemon Club </h1>
    <div id="about_us">
      <img class="logo" :src="CPC_logo"><div class="who_are_we">
        <h2 class="subtitle"> Who Are We? </h2>
        <p class="about_text"> We are the MSJ Competitive Pokemon Club, an organization dedicated to the active study of competitive Pokemon. </p>
        <p class="about_text">Drop by to receive lectures from our finest Trainers and start your career as a Pokemon Trainer! </p>
        <p class="about_text"> We also hold tournaments with cash prizes!</p>
      </div>
    </div>
  </div>
  <div id="meeting-section">
    <div class="room_text">
      <h1> Meeting Times: </h1>
      <br>
      <h2 class="room_subtext"> Tuesdays at B18 </h2>
      <h2 class="room_subtext"> Ms. Williams' Room </h2>
    </div>
    <div class="room_image">
      <h5>(Insert Image Here)</h5>
    </div>
  </div>
  <div id="social_media">
    <h1>Here's our social media</h1>
    <!-- TODO Flesh out this social media link list -->
    <ul id="social-media-list">
      <li>Discord</li>
      <li>Facebook</li>
      <li>Instagram</li>
    </ul>
  </div>
</template>

<style>
#site-title {
  text-align: center;
}

div#about_us {
  display: grid;
  width: 90%;
  grid-template-columns: 50% 50%;
  margin: auto;
}

.logo {
  width: 100%;
}

#meeting-section {
  width: 90%;
  display: grid;
  grid-template-columns: 50% 50%;
  margin: auto;
}

div#social-media {
  margin: auto;
}

ul#social-media-list > li {
  display: inline-block;
}

</style>
