<script>
  import slidesData from "/src/config/slides_data.json"

  import ModalWindow from "@/components/ModalWindow.vue"

  export default {
    data() {
        return {
          folderNames: slidesData.folderNames,
          folderSlides: slidesData.folderSlides,
          currentFolder: 0,
          currentSlideIndex: 0,
          showModal: false
        }
    },
    components: {
      ModalWindow
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
    <li v-for="(slides, i) in folderSlides[currentFolder].slides" :key="i">
      <div class="name-mag-row">
        <h1 class="slides-name"> {{ slides.name }} </h1>
        <p class="magnify-button"
           @click="() => {
                    showModal = true;
                    currentSlideIndex = i;
                  }">
          ⛶
        </p>
      </div>
      <p class="slides-date"> {{ slides.date }} </p>
      <iframe :src="slides.url"
              frameborder="0"
              class="archive-slide"
              allowfullscreen="true"
              mozallowfullscreen="true"
              webkitallowfullscreen="true" />
    </li>
  </ul>

  <div v-if="folderSlides[currentFolder].slides.length > 0">
    <ModalWindow
      :name="folderSlides[currentFolder].slides[currentSlideIndex].name"
      :date="folderSlides[currentFolder].slides[currentSlideIndex].date"
      :url="folderSlides[currentFolder].slides[currentSlideIndex].url"
      :showModal="showModal"
      @close="showModal = false" />
  </div>
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
  aspect-ratio: 16 / 9;
  width: 100%;
  height: 100%;
}

h1.slides-name {
  font-size: 2.8vw;
  display: inline-block;
}
p.magnify-button {
  font-size: 2.8vw;
  display: inline-block;
  float: right;
  margin-right: 2.5%;
  margin-top: -5%;
  transition: transform 0.2s ease;
}
p.magnify-button:hover {
  transform: scale(1.2);
  cursor: pointer;
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
