<script>
  import officer_data from "/src/assets/text/about/officers.json"

  export default {
    data() {
      return {
        officers23: officer_data.officers23,
        display_officers: false,
        display_officers2023: false
      }
    }
  }
</script>

<style>
  .officer_image {
    width:250px;
  }
</style>

<template>
  <div class="about">
    <h1 id="page-title">About</h1>
  </div>

  <ul>
    <li> <button @click="display_officers=false"> About Us </button> </li>
    <li> <button @click="display_officers=!display_officers"> Officers </button> </li>
  </ul>

  <!-- I'll add a submenu for year once we go for multiple years -->

  <!-- TODO Consider making this a component to import -->
  <ul v-if="display_officers === true">
    <button @click="display_officers2023=!display_officers2023"> 2023-24 </button>
    <ul v-if="display_officers2023 === true">
      <li v-for="officer in officers23">
      <div>
        <h1> {{ officer.name }} </h1>
        <p> {{ officer.role }} </p>
        <p> Grade: {{ officer.grade }} </p>
        <img :src="officer.headshot_url" class="officer_image">
      </div>
      </li>
    </ul>
  </ul>

  <p v-else> About us spiel I'll put in a text file lmao </p>

</template>

<!-- Insert your CSS here -->
<style>
</style>
