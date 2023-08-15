<script>
export default {}
</script>

<template>
  <div id="footer">
    <div id="basic-info-col" class="footer-col">
      <div id="title-top">
        <img alt="CPC Logo" src="/src/assets/site-logo.png">
        <h1 id="footer-title"> MSJ CPC </h1>
      </div>
      <div id="contact-us-button">
        <!-- TODO Fill in links -->
        <a href="mailto:msjcomppokeclub@gmail.com"> Contact Us! </a>
      </div>
    </div>
    <div id="nav-page-col" class="footer-col">
      <h2 id="nav-page-title"> Pages </h2>
      <router-link to="/club-website"> Home </router-link>
      <router-link to="/club-website/crew"> Crew </router-link>
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
  grid-template-columns: 65% 13% 20%;
  padding-top: 2%;
  border-top: 10px solid black;
  background-image: linear-gradient(to right, #d6bcf0, #c9cbf5);
  padding-bottom: 2%;
}

div#basic-info-col {
  display: flex;
  flex-direction: column;
}
div#basic-info-col > * {
  display: inline-block;
}
div#contact-us-button {
  padding: 10px;
  margin: 2vw;
  border: 3px solid black;
  background: #fa385b;
  width: 20vw;
  transition: transform 0.1s ease;
}
div#contact-us-button:hover {
  transform: scale(1.05);
}
h1#footer-title {
  margin-left: 4%;
  display: inline-block;
  font-size: 4vw;
}
div#contact-us-button > a {
  text-decoration: none;
  color: black;
  font-size: 3vw;
  text-align: center;
}
div#title-top {
  display: inline-block;
  width: 100%;
}

.footer-col > h2 {
  font-size: 3vw;
}

#basic-info-col img {
  width: 6vw;
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
    font-size: 2vw;
    transition: font-size 0.2s ease;
}
#socials-col > a:hover,
#nav-page-col > a:hover {
    font-size: 2.2vw;
}

#socials-col > a::after,
#nav-page-col > a::after {
  content: "\a";
  white-space: pre;
}
</style>
