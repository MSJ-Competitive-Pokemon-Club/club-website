<script>
  import slides_data from "/src/config/slides_data.json"

  export default {
    data() {
        return {
          all_slidedecks: slides_data.slides,
          slides_shown: slides_data.slides.slice(0, 2) /* Two slides are displayed by default */
        }
    }
  }
</script>

<!-- Replace this with backend use of Google API -->
<template>
  <h1 class="archive_head"> Archive </h1>
  <li v-for="folder in slides_shown" class="archive_folders">
    <div class="archive_text">
      <h1> {{ folder.name }} </h1>
      <br><h1> {{ folder.date }} </h1>
    </div><li class="archive_slideshow" v-for="slideshow in folder.slides">
      <iframe :src="slideshow.url" frameborder="0" class="archive_slide" allowfullscreen="true" width="500%" height="500%"
      mozallowfullscreen="true" webkitallowfullscreen="true" ></iframe>
    </li>
  </li>

  <button v-if="slides_shown != all_slidedecks" @click="slides_shown = all_slidedecks" class="archive_button">Load older slideshows</button>

</template>

<style>
  h1 {
    text-align:center;
    font-family:Cambria;
  }

  .archive_folders {
    list-style-type: none;
    background-color:rgb(237, 237, 239);
  }

  .archive_head {
    font-size: 2.5em;
    padding-bottom:50px;
    border-bottom:3px solid;
  }

  .archive_text {
    width:30%;
  }

  .archive_text > h1 {
    font-size:4.5vw;
  }

  .archive_text, .archive_slideshow {
    display:inline-block;
    vertical-align:middle;
    margin-bottom:200px;
    margin-top:100px;
  }

  .archive_slideshow {
    position:relative;
    width:60%;
    padding-bottom: 35%; /* For aspect ratio */
    margin-left:2%;
  }

  .archive_slideshow iframe {
    position:absolute;
    height:100%;
  }

  .archive_slide {
    width:100%;
  }

  .archive_button {
    padding:20px;
    font-size:2em;
    font-family:Cambria;
    width:100%;
    background-color:rgb(176, 170, 170);
    margin-bottom:100px;
  }

</style>
