<script>
  import officerData from "/public/assets/config/officers.json"

  export default {
    data() {
      return {
        officerData,
        currentOfficerList: officerData.officers2324,
        displayYear: "2023-2024"
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
    <h1 id="page-title">About - Officers {{ displayYear }} </h1>

    <ul id="year-list">
      <li> <a @click="currentOfficerList = officerData.officers2324; displayYear = '2023-2024';"> 2023-2024 </a> </li>
    </ul>

    <ul id="officer-display">
      <li v-for="officer in currentOfficerList">
        <div class="officer-section">
          <div class="officer-image-div">
            <img :src="officer.headshot_url" class="officer-image">
          </div>
          <div class="officer-text-section">
            <h2 class="role-desc"> {{ officer.role }}: </h2>
            <h1 class="officer-name"> {{ officer.name }} </h1>
            <p class="officer-grade"> Grade: {{ officer.grade }} </p>
            <p class="officer-desc"> {{ officer.officer_desc }} </p>
          </div>
        </div>
      </li>
    </ul>
  </div>

  <!-- I'll add a submenu for year once we go for multiple years -->

  <!-- TODO Consider making this a component to import -->
</template>

<!-- Insert your CSS here -->
<style>
h1#page-title {
  font-size: 4vw;
  text-align: center;
}

ul#year-list {
  text-align: center;
  margin-bottom: 3%;
}
ul#year-list li {
  display: inline;
  font-size: 1.8vw;
}
ul#year-list li:after {
  content: '/';
  white-space: pre;
}

div.officer-section {
}

div.officer-image-div {
  overflow: hidden;
  border-radius: 100% 100% 100% 100%;
  width: 10vw;
  height: 10vw;
  margin: 0 auto;
  border: 4px solid black;
}
img.officer-image {
  width: 10vw;
  height: 10vw;
  object-fit: cover;
}

h2.role-desc {
  text-align: center;
  font-size: 2.3vw;
}
h1.officer-name {
  text-align: center;
  font-size: 2.5vw;
}
p.officer-grade {
  text-align: center;
}
p.officer-desc {
  text-align: center;
}

ul#officer-display {
  display: grid;
  grid-template-columns: 30% 30% 30%;
  column-gap: 1%;
  row-gap: 2%;
  margin-left: 5%;
  margin-bottom: 5%;
}
ul#officer-display > li {
  list-style-type: none;
  border: 3px solid black;
  padding-top: -5%;
  padding: 2%;
  box-shadow: inset 0 0 0 2px red;
  border-radius: 10%;
  background: #afaace;
}
</style>
