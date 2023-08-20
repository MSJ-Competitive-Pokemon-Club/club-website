<script>
  import slidesData from "/src/config/slides_data.json"

  export default {
    data() {
        return {
            folderNames: slidesData.folderNames,
            folderSlides: slidesData.folderSlides,
            currentFolder: 0
        }
    }
  }
</script>

<!-- Replace this with backend use of Google API -->
<template>
  <h1 id="archive-title"> Archive </h1>
  <ul id="section-menu">
    <li v-for="(name, i) in folderNames"
        :key="i"
        @click="currentFolder = i"
        :class="{ 'selected': currentFolder === i }">
      <div class="year-list"> {{ name }} </div>
    </li>
  </ul>

  <div v-if="folderSlides[currentFolder].slides.length === 0" class="awaiting-slides-message"> No slides yet... </div>
  <ul id="slides-display">
    <li v-for="slides in folderSlides[currentFolder].slides">
      <h1 class="slides-name"> {{ slides.name }} </h1>
      <p class="slides-date"> {{ slides.date }} </p>
      <iframe :src="slides.url" frameborder="0" class="archive-slide" allowfullscreen="true"
      mozallowfullscreen="true" webkitallowfullscreen="true" ></iframe>
    </li>
  </ul>
</template>

<style>
h1#archive-title {
  font-size: 4vw;
  text-align: center;
}

ul#section-menu {
  display: flex; /* Use flexbox to create a horizontal list */
  padding: 0;
  justify-content: center;
  margin-bottom: 2%;
}
ul#section-menu > li {
  display: inline-block;
  margin-right: 2.0vw;
  transition: transform 0.2s ease;
}
ul#section-menu > li:hover {
  transform: scale(1.1);
  color: #826bdb;
}
ul#section-menu > li.selected {
  transform: scale(1.1);
  font-family: IPS-Medium;
  color: #f23d3d;
}

div.year-list {
  font-size: 1.8vw;
}

ul#slides-display {
  display: grid;
  grid-template-columns: 30% 30% 30%;
  justify-content: center;
  list-style: none;
  margin-bottom: 3%;
}

.archive-slide {
  width: 100%;
  height: 18.5vw;
}

h1.slides-name {
  font-size: 2.8vw;
}
p.slides-date {
  font-size: 2.0vw;
  margin-bottom: 4%;
}

ul#slides-display > li {
  border: 1px solid black;
  padding: 5%;
  display: grid;
  grid-template-rows: 3.2vw 3.2vw 19vw;
  margin-left: 1%;
  margin-right: 1%;
  background: #d8d8dd;
}

div.awaiting-slides-message {
  font-size: 4vw;
  text-align: center;
}
</style>
