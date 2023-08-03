<script>
  import slides_data from "/src/assets/text/archive/slides_data.json"

  export default {
    data() {
        return {
          recent: slides_data.most_recent,
          display_older_slides: false,
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
    padding-bottom:50px;
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
    height:100%;
  }

  .archive_slide {
    width:100%;
    padding-left:2%;
  }

  .archive_text, .archive_slideshow {
    display:inline-block;
    vertical-align:middle;
    margin-bottom:100px;
    margin-top:100px;
  }

  .archive_button {
    padding:20px;
    font-size:2.5em;
    font-family:'Times New Roman';
    width:100%;
    background-color:rgb(176, 170, 170);
    margin-bottom:100px;
  }

  .recent1 {
    background: #eed4d8;
  }
</style>

<!-- Replace this with backend use of Google API -->
<template>
  <div class="archive_head">
    <h1>Archive</h1>
  </div>

  <ul>
    <div class="recent1">
      <div class="archive_text">
        <h1> {{ recent[0].name }} </h1>
        <br> <h1> {{ recent[0].date }} </h1>
      </div><li class="archive_slideshow" v-for="slideshow in recent[0].slides">
          <iframe :src="slideshow.url" frameborder="0" class="archive_slide" allowfullscreen="true" width="500%" height="500%"
          mozallowfullscreen="true" webkitallowfullscreen="true" ></iframe>
      </li>
    </div>
    <div class="recent2">
      <div class="archive_text">
        <h1> {{ recent[1].name }} </h1>
        <br> <h1> {{ recent[1].date }} </h1>
      </div><li class="archive_slideshow" v-for="slideshow in recent[1].slides">
          <iframe :src="slideshow.url" frameborder="0" class="archive_slide" allowfullscreen="true" width="500%" height="500%"
          mozallowfullscreen="true" webkitallowfullscreen="true" ></iframe>
      </li>
    </div>

    <!-- <li v-for="folder in recent" class="archive_section">
      <div class="archive_text">
        <h1> {{ folder.name }} </h1>
        <br>
        <h1> {{ folder.date }} </h1>
      </div><li class="archive_slideshow" v-for="slideshow in folder.slides">
          <iframe :src="slideshow.url" frameborder="0" class="archive_slide" allowfullscreen="true" width="500%" height="500%"
          mozallowfullscreen="true" webkitallowfullscreen="true" ></iframe>
      </li>
    </li> -->

    <button @click="display_older_slides = !display_older_slides" class="archive_button">Load more slideshows</button>
  </ul>
</template>
