<script>
export default {}
</script>

<template>
  <div id="footer">
    <div id="basic-info-col" class="footer-col">
      <img alt="CPC Logo" src="/site-logo.png">
      <!-- TODO Replace this with content from a text file hopefully -->
      <div id="contact-us-button">
        <!-- TODO Fill in links -->
        <!-- TODO Find the club email since I forgor :skull: -->
        <a href=""> Contact Us! </a>
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
      <a href=""> Discord </a>
      <a href=""> Facebook </a>
      <a href=""> Instagram </a>
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
  font-size: 3vw;
}
div#contact-us-button:hover {
  text-decoration: underline;
}

#basic-info-col > img {
  height: 100px;
  vertical-align: middle;
  margin-left: 1vw;
}

#socials-col > a,
#nav-page-col > a {
    color: black;
    text-decoration: none;
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
