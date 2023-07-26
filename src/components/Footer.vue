<script>
export default {}
</script>

<template>
  <div id="footer">
    <div id="basic-info-col" class="footer-col">
      <img alt="CPC Logo" src="/site-logo.png">
      <!-- TODO Replace this with content from a text file hopefully -->
      <p> CPC Club: the official MSJ club for Competitive Pokemon </p>
    </div>
    <div id="nav-page-col" class="footer-col">
      <router-link to="/"> Home </router-link>
      <router-link to="/about"> About </router-link>
      <router-link to="/learn"> Learn </router-link>
      <router-link to="/archive"> Archive </router-link>
    </div>
    <div id="socials-col" class="footer-col">
      <!-- Add/replace with images -->
      <a href=""> Discord </a>
      <a href=""> Email </a>
      <a href=""> Facebook </a>
      <a href=""> Instagram </a>
    </div>
  </div>
</template>

<style>
:root {
  --footer-bar-height: 100px;
}

#footer {
  height: var(--footer-bar-height);
  width: 100%;
}

.footer-col {
  display: inline-block;
}

#basic-info-col > img {
  height: 100px;
}

#socials-col > a::after,
#nav-page-col > a::after {
  content: "\a";
  white-space: pre;
}
</style>
