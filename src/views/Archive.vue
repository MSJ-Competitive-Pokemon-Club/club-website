<script>
  import slides_data from "/src/assets/text/archive/slides_data.json"

  export default {
    data() {
        return {
          recent: slides_data.most_recent,
          display_older_slides: false
        }
    }
  }
</script>

<style>
  h1 {
    text-align:center;
  }

  .archive_head {
    font-size:3em;
    font-family:Cambria;
    padding-bottom:100px;
  }

  .archive_text {
    font-size:2.5em;
    padding-left:1%;
    padding-right:1%;
    width:30%;
  }

  .archive_slideshow {
    position:relative;
    width:60%;
    padding-bottom: 40%; /* For aspect ratio */ 
  }

  .archive_slideshow iframe {
    position:absolute;
    width:100%;
    height:100%;
  }

  .archive_slide {
    width:100%;
    padding-left:2%;
  }

  .archive_text, .archive_slideshow {
    display:inline-block;
    vertical-align:middle;
    margin-bottom:200px;
  }

  .archive_button {
    font-size:2em;
    font-style:normal;
    width:100%;
    background-color:rgb(176, 170, 170);
    margin-bottom:100px;
  }
</style>

<!-- Replace this with backend use of Google API -->
<template>
  <div class="archive_head">
    <h1>Archive</h1>
  </div>

  <ul>
    <li v-for="folder in recent">
      <div class="archive_text">
        <h1> {{ folder.name }} </h1>
        <br>
        <h1> {{ folder.date }} </h1>
      </div><li class="archive_slideshow" v-for="slideshow in folder.slides">
          <iframe :src="slideshow.url" frameborder="0" class="archive_slide" allowfullscreen="true" width="500%" height="500%"
          mozallowfullscreen="true" webkitallowfullscreen="true" ></iframe>
      </li>
    </li>

    <button @click="display_older_slides = !display_older_slides" class="archive_button">Load more slideshows</button>
  </ul>
</template>
