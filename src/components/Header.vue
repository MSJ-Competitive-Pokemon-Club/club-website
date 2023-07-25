<script>
export default {
  props: {
    title: String,
  }
}
</script>

<template>
  <div id="lefthand-menu">
    <img alt="CPC Logo" src="/site-logo.png">
    <h1 id="title"> <router-link to="/"> {{ title }} </router-link> </h1>
  </div>

  <div id="righthand-menu">
    <router-link to="/about"> About </router-link>
    <router-link to="/learn"> Learn </router-link>
    <router-link to="/archive"> Archive </router-link>
  </div>

  <div id="site-banner">
    <img alt="CPC Banner" src="/banner.png">
  </div>
</template>

<style>
:root {
  --header-bar-height: 75px;
}

#lefthand-menu {
    display: inline;
}
#lefthand-menu > img {
    height: var(--header-bar-height);
    width: auto;
}
#lefthand-menu > h1#title {
    display: inline;
}

#righthand-menu {
    display: inline;
    float: right;
}

#site-banner {
    width: 100%;
}
#site-banner > img {
    width: 100%;
}
</style>
