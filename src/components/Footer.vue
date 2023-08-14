<script>
export default {}
</script>

<template>
  <div id="footer">
    <div id="basic-info-col" class="footer-col">
      <img alt="CPC Logo" src="/src/assets/site-logo.png">
      <div id="contact-us-button">
        <!-- TODO Fill in links -->
        <!-- TODO Find the club email since I forgor :skull: -->
        <a href="mailto:msjcomppokeclub@gmail.com"> Contact Us! </a>
      </div>
    </div>
    <div id="nav-page-col" class="footer-col">
      <h2 id="nav-page-title"> Pages </h2>
      <router-link to="/club-website"> Home </router-link>
      <router-link to="/club-website/about"> About </router-link>
      <router-link to="/club-website/learn"> Learn </router-link>
      <router-link to="/club-website/archive"> Archive </router-link>
    </div>
    <div id="socials-col" class="footer-col">
      <h2 id="nav-page-title"> Social Media </h2>
      <!-- Add/replace with images -->
      <a href="https://discord.gg/EUG3r98Hz"> Discord </a>
      <a href="https://www.facebook.com/groups/636866185077720"> Facebook </a>
      <a href="https://www.instagram.com/msj_competitivepokemonclub/"> Instagram </a>
    </div>
  </div>
</template>

<style>
#footer {
  width: 100%;
  display: grid;
  grid-template-columns: 60% 15% 15%;
  padding-top: 2%;
  border-top: 10px solid black;
  background: #d0daff;
  padding-bottom: 2%;
}

div#basic-info-col > * {
  display: inline-block;
}
div#contact-us-button {
  padding: 10px;
  margin: 2vw;
  border: 3px solid black;
  background: #fa385b;
  vertical-align: middle;
}
div#contact-us-button > a {
  text-decoration: none;
  color: black;
  font-size: 2vw;
}
div#contact-us-button:hover {
  text-decoration: underline;
}

.footer-col > h2 {
  font-size: 4vw;
}

#basic-info-col > img {
  height: 100px;
  vertical-align: middle;
  margin-left: 1vw;
}

#nav-page-col {
  padding-right: 10%;
}

#socials-col > a,
#nav-page-col > a {
    color: black;
    text-decoration: none;
    font-size: 3vw;
}

#socials-col > a:hover,
#nav-page-col > a:hover {
    text-decoration: underline;
}

#socials-col > a::after,
#nav-page-col > a::after {
  content: "\a";
  white-space: pre;
}
</style>
