<script>
  import officer_data from "/src/assets/text/about/officers.json"

  export default {
    data() {
      return {
        officers: officer_data.officers,
        display_officers: false,
      }
    }
  }
</script>

<template>
  <div class="about">
    <h1 id="page-title">About</h1>
  </div>

  <ul>
    <li> <button @click="display_officers=false"> About Us </button> </li>
    <li> <button @click="display_officers=true"> Officers </button> </li>
  </ul>

  <!-- I'll add a submenu for year once we go for multiple years -->

  <!-- TODO Consider making this a component to import -->
  <ul v-if="display_officers === true">
    <li v-for="officer in officers">
      <div>
        <h1> {{ officer.name }} </h1>
        <p> {{ officer.role }} </p>
        <p> Grade: {{ officer.grade }} </p>
        <img :src="officer.headshot_url">
      </div>
    </li>
  </ul>

  <p v-else> About us spiel I'll put in a text file lmao </p>

</template>

<!-- Insert your CSS here -->
<style>
</style>
