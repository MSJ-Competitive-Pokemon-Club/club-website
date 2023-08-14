<script>
  import LessonButton from "../components/LessonButton.vue"

  import lessonData from "/src/config/lessonInfo.json"

  export default {
    data() {
      return {
        categories: lessonData.categories,
        currentLessonName: "Move Base Power",
        currentReplayLoc: "/club-website/assets/lesson-replays/Move Base Power.html",
        currentReplayLocText: "/club-website/assets/lesson-descriptions/Move Base Power Text.html",
        options: [
        'Move Base Power',
        'Statuses',
        'Type Matchups',
        'Abilities',
        'Items',
        'Secondary Effects',
        'Priority Moves'
      
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
      <h1>Lessons</h1>
     <div 
        v-for="(option, index) in options"
        :key="index"
        :class="{ 'option': true, 'selected': selectedOption === index }"
        @click="() => {
          selectedOption = index;
          currentReplayLoc = '/club-website/assets/lesson-replays/'+ option + '.html';
          currentReplayLocText = '/club-website/assets/lesson-descriptions/'+ option + ' Text.html';
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
  grid-template-columns: 30% 70%;
}
.grid-item {
  padding: 20px;
  font-size: 30px;
  text-align: center;
}
#sidebar {

    width: 250px;
    height: 100vh;
    overflow-y: auto;
    text-align: center;
}

#learn-display {

  display: grid;
  width: 100%;
  height: 100vh;
  text-align: center;
  overflow-y: auto;
}
.option {
    padding: 10px;
    font-size: 2vw;
    cursor: pointer;
    transition: transform 0.2s ease;
}

.option.selected {
    font-size: 2.5vw; /* Enlarge the selected option */
    color:orangered
}
.option:hover {
    transform: scale(1.1);
    color:red
  }
</style>
