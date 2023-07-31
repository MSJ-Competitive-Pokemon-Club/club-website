<script>
export default {
  props: {
    title: String,
  }
}
</script>

<template>
  <div id="topbar">
    <div id="lefthand-menu">
      <img alt="CPC Logo" src="/site-logo.png">
      <h1 id="title"> <router-link to="/"> {{ title }} </router-link> </h1>
    </div>

    <div id="righthand-menu">
      <router-link id="about-button" class="header-link" to="/about"> About </router-link>
      <router-link id="learn-button" class="header-link" to="/learn"> Learn </router-link>
      <router-link id="archive-button" class="header-link" to="/archive"> Archive </router-link>
    </div>
  </div>

  <div id="site-banner">
    <img alt="CPC Banner" src="/banner.png">
  </div>

  <div id="ghost-element"></div>
</template>

<style>
:root {
  --header-bar-height: 75px;
}

div#topbar {
    display: grid;
    grid-template-columns: 50% 50%;
    background: #d0daff;
}

#lefthand-menu {
    height: var(--header-bar-height);
    display: flex;
    flex-direction: row;
}
#lefthand-menu > * {
    padding-left: 10px;
}
#lefthand-menu > img {
    margin-top: 7px;
    height: 60px;
    width: auto;
}
#lefthand-menu > h1#title {
    padding-top: 15px;
}
#lefthand-menu > h1#title > a {
    text-decoration: none;
    color: black;
    padding-top: 15px;
}
#lefthand-menu > h1#title > a:hover {
    text-decoration: underline;
}

#righthand-menu {
    display: inline;
    float: right;
}
a.header-link {
    float: right;
    font-size: 20px;
    margin-top: 17px;
    margin-left: 15px;
    margin-right: 10px;
    padding: 7px;
    border: 2px solid black;
    color: black;
    text-decoration: none;
}
a.header-link:hover {
    text-decoration: underline;
}
#about-button {
    background: #80edb9;
}
#learn-button {
    background: #faee38;
}
#archive-button {
    background: #fa385b;
}

#site-banner {
    width: 100%;
    background-image: linear-gradient(to right, #e4d9eb, #aea9cd);
}
#site-banner > img {
    width: 100%;
    margin-bottom: -1%;
}

#ghost-element {
    width: 100%;
    height: 3vh;
}
</style>
