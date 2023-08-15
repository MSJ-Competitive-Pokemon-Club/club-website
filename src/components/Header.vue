<script>
export default {
  props: {
    title: String,
  }
}
</script>

<template>
  <div id="topbar">
    <router-link to="/club-website">
      <div id="lefthand-menu">
        <img alt="CPC Logo" src="/assets/images/site-logo.png">
        <h1 id="title">  {{ title }}  </h1>
      </div>
    </router-link>

    <ul id="righthand-menu">
      <li> <router-link id="crew-button" class="header-link" to="/club-website/crew"> Crew </router-link> </li>
      <li class="spacer"> | </li>
      <li> <router-link id="learn-button" class="header-link" to="/club-website/learn"> Learn 🎓 </router-link> </li>
      <li class="spacer"> | </li>
      <li class="rightmost"> <router-link id="archive-button" class="header-link" to="/club-website/archive"> Archive 🗃️ </router-link> </li>
    </ul>
  </div>

  <div id="site-banner">
    <img alt="CPC Banner" src="/assets/images/banner.svg">
  </div>

  <div id="ghost-element"></div>
</template>

<style>
div#topbar {
  display: grid;
  grid-template-columns: 30% 70%;
  background-image: linear-gradient(to right, #c9cbf5, #d6bcf0);
  padding-top: 1%;
  padding-bottom: 1%;
}

div#lefthand-menu {
  display: grid;
  grid-template-columns: 13% 70%;
  align-items: center;
  margin-top: 2%;
  margin-bottom: 2%;
}
div#lefthand-menu > img {
  width: 80%;
  margin: 5%;
}
h1#title {
  text-align: left;
  font-size: 3.2vw;
}
div#topbar a {
  text-decoration: none;
  color: black;
}
div#topbar a:hover {
  text-decoration: underline;
  color: black;
}

ul#righthand-menu {
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
  justify-content: flex-end;
}
ul#righthand-menu > li {
  display: flex;
  float: right;
  align-items: center;
  font-size: 4vw;
}
a.header-link {
  font-size: 3.2vw;
}

li.spacer {
  margin-left: 2%;
  margin-right: 2%;
}
li.rightmost {
  margin-right: 2%;
}

div#site-banner > img {
  width: 100%;
}

div#ghost-element {
  width: 100%;
  height: 5%;
}
</style>
