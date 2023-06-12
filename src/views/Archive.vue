<script>
  import slides_data from "/src/assets/text/archive/slides_data.json"

  export default {
    data() {
        return {
          folders: slides_data.folders,
        }
    }
  }
</script>

<!-- Replace this with backend use of Google API -->
<template>
  <div class="archive">
    <h1>Archive</h1>
  </div>

  <ul>
    <li v-for="folder in folders">
      <h1> {{ folder.name }} </h1>
      <ul>
        <li v-for="slideshow in folder.slides">
          <iframe :src="slideshow.url" frameborder="0" width="1440" height="839" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
        </li>
      </ul>
    </li>
  </ul>
</template>
