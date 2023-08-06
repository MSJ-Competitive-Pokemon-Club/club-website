<script>
  import welcome_message from "/public/assets/text/home/welcome.txt?raw"
  import socialsData from "/public/assets/config/social-buttons.json"

  export default {
    data() {
      return {
        welcome_message,
        socialsButtons: socialsData.socials,
        image_loc: '/club-website/assets/images/logo_test.png',
        CPC_logo: '/club-website/assets/images/CPC_logo.png',
        doorLoc: '/club-website/assets/images/door-open.png',
      }
    }
  }
</script>

<template>
  <div class="intro-section">
    <h1 id="site-title"> MSJ Competitive Pokemon Club </h1>
    <div id="about_us">
      <img class="logo" :src="CPC_logo">
      <div id="who-are-we">
        <h2 id="subtitle"> Who Are We? </h2>
        <div id="welcome-message-section"> {{ welcome_message }}</div>
      </div>
    </div>
  </div>
  <div id="meeting-section">
    <div id="room-div">
      <h2 class="room-text" id="room-subtext"> We Meet In Room B18. </h2>
      <h2 class="room-text" id="join-us"> Come Join Us! </h2>
    </div>
    <div id="room-image">
      <img :src="doorLoc">
    </div>
  </div>
  <div id="social_media">
    <h1>Here's our social media!</h1>
    <!-- TODO Flesh out this social media link list -->
    <ul id="social-media-list">
      <li v-for="social in socialsButtons">
        <a :href="social.link">
          <div class="social-button">
            <img :src="social.path">
            <h4> {{ social.name }} </h4>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<style>
#site-title {
  text-align: center;
  font-size: 4vw;
  padding-bottom: 4%;
}

div#about_us {
  display: grid;
  width: 100%;
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
div#room-div {
  padding-top: 35%;
}
h2.room-text {
  font-size: 4.5vw;
  text-align: center;
  color: black;
}

div#social-media {
  margin: auto;
}

div#room-image > img {
  width: 100%;
  margin-left: 9.3%;
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
  font-size: 4vw;
  padding-bottom: 5%;
  color: white;
}
ul#social-media-list > li {
  display: inline-block;
  width: 16vw;
  margin: 2vw;
  padding-bottom: 5%;
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
ul#social-media-list > li > a:hover {
  text-decoration: underline;
}
.social-button > img {
  width: 100%;
  height: auto;
}
.social-button > h4 {
  font-size: 2vw;
}

</style>
