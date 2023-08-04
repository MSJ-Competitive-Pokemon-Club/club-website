<script>
  import LessonButton from "../components/LessonButton.vue"

  import lessonData from "/src/assets/lessons/lessonInfo.json"

  export default {
    data() {
      return {
        categories: lessonData.categories,
        currentLessonName: "Move Base Power",
        currentReplayLoc: "src/assets/lessons/Move Base Power.html",
        currentReplayLocText: "src/assets/text/archive/Move Base Power Text.html",
        options: [
        'Move Base Power',
        'Statuses',
        'Type Matchups',
        'Abilities',
        'Items',
        'Secondary Effects'
      
      ],
        selectedOption: 0
      }
      
    },
    components: {
      LessonButton,
    },
    methods: {

    }
    
  }

</script>

<template>
<div id="title">Learn</div>
<div id="grid-container">
  <div class="grid-item">
    <div id="sidebar">
     <div 
        v-for="(option, index) in options"
        :key="index"
        :class="{ 'option': true, 'selected': selectedOption === index }"
        @click="() => {
          selectedOption = index;
          currentReplayLoc = 'src/assets/lessons/'+ option + '.html';
          currentReplayLocText = 'src/assets/text/archive/'+ option + ' Text.html';
        }"
      >
      {{ option }}
    </div>
  </div>
</div>
<div class="grid-item">
  <div id="learn-display">
      <iframe id="iframe" ref="battle" :src="currentReplayLoc" width="100%" height="600px" frameborder="q0"></iframe>
      <iframe id="iframe" ref="caption" :src="currentReplayLocText" width="100%" height="600px" frameborder="0"></iframe>
  </div>
</div>
</div>
</template>
<style scoped>
#title{
  font-size:150px;
  text-align:center
}
#grid-container{
  display: grid;
  grid-template-columns: auto auto;
}
.grid-item {
  padding: 20px;
  font-size: 30px;
  text-align: center;
}
#sidebar {

    width:400px;
    height: 100vh;
    overflow-y: auto;
    text-align: left;
}

#learn-display {

  display: grid;
  width: 1200px;
  height: 100vh;
  text-align: center;
  overflow-y: auto;
}
.option {
    padding: 10px;
    font-size: 20px;
    cursor: pointer;
}

.option.selected {
    font-size: 48px; /* Enlarge the selected option */
    color:red
}

</style>
