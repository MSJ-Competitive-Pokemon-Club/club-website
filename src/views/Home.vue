<script>
  // Imports should occur from src to avoid errors when running "npm run build"
  import welcome_message from "/src/welcome.txt?raw"
  import socialsData from "/src/config/social-buttons.json"

  export default {
    data() {
      return {
        welcome_message,
        socialsButtons: socialsData.socials,
        CPC_logo: '/club-website/assets/images/CPC_logo_full.png', // The Public folder contains mostly static images.
        doorLoc: '/club-website/assets/images/door-open.png'
      }
    }
  }
</script>

<template>
  <div class="intro-section">
    <h1 id="site-title"> MSJ Competitive Pokemon Club </h1>
    <div id="about-us">
      <img class="logo" alt="CPC-logo" :src="CPC_logo">
      <div id="who-are-we">
        <h2 id="subtitle"> Who Are We? </h2>
        <div id="welcome-message-section"> {{ welcome_message }} </div>
      </div>
    </div>
  </div>
  <div id="meeting-section">
    <div id="room-div">
      <h2 id="room-subtext"> We Meet In Room B18. </h2>
      <h2 id="join-us"> Come Join Us! </h2>
    </div><img alt="Meet us at B18!" :src="doorLoc">
  </div>
  <div id="social_media">
    <h1>Here's our social media!</h1>
    <!-- TODO Flesh out this social media link list -->
    <ul id="social-media-list">
      <li v-for="social in socialsButtons">
        <a :href="social.link">
          <div class="social-button">
            <img alt="Join our" :src="social.path">
            <h4> {{ social.name }} </h4>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<style>

#site-title {
  font-size: 4vw; /* vw stands for 'viewport width' */
  padding-bottom: 4%;
}

div#about-us {
  display: grid;
  padding-left: 5%;
  padding-right: 5%;
  grid-template-columns: 50% 50%;
  margin: auto;
}

#who-are-we {
  margin-bottom: 4%;
}

div#welcome-message-section {
  white-space: pre-wrap;
  font-size: 2.4vw;
  text-align: center;
  line-height:1.3;
  margin-left:3%;
}

#subtitle {
  text-align: center;
  font-size: 4vw;
  margin-bottom: 5%;
}

.logo {
  width: 100%;
  margin: auto;
}

#meeting-section {
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
  display: grid;
  grid-template-columns: 40% 60%;
  margin: auto;
  background: #eed4d8;
  margin-top: 7vh;
  padding-bottom: 4%;
  border-top: 2px solid black;
}

div#meeting-section > img {
  width: 100%;
  margin-left: 9.3%;
}


div#room-div {
  padding-top: 35%;
}

div#room-div > h2 {
  font-size: 4.5vw;
  text-align: center;
  color: black;
}

div#social-media {
  margin: auto;
}

#social_media {
  text-align: center;
  padding-top: 7%;
  background: #283977;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
}

#social_media > h1 {
  text-align: center;
  font-size: 4.3vw;
  padding-bottom: 2%;
  color: white;
}

ul#social-media-list > li {
  display: inline-block;
  width: 16vw;
  margin: 2vw;
  padding-bottom: 5%;
  transition: transform 0.2s ease;
}

.social-button {
  display: grid;
  grid-template-columns: 20% 80%;
  border: 3px solid white;
  padding: 1vw;
  background: #beb9d7;
}

ul#social-media-list > li > a {
  text-decoration: none;
  color: #283977;
}
ul#social-media-list > li:hover {
  transform: scale(1.1);
}

.social-button > img {
  width: 100%;
  height: auto;
}

.social-button > h4 {
  font-size: 2vw;
}

</style>
