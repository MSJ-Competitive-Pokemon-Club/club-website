<script>
  import LessonButton from "../components/LessonButton.vue"

  import lessonData from "/src/assets/lessons/lessonInfo.json"

  export default {
    data() {
      return {
        categories: lessonData.categories,
        currentLessonName: "Test",
        currentReplayLoc: "src/assets/lessons/test.html",
        options: ['test','test2'],
        selectedOption: null
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
<div id="learn">
  <div id="sidebar">
    <div 
      v-for="(option, index) in options"
      :key="index"
      :class="{ 'option': true, 'selected': selectedOption === index }"
      @click="() => {
        selectedOption = index;
        currentReplayLoc = 'src/assets/lessons/'+ option + '.html';
      }"
    >
      {{ option }}
    </div>
  </div>

  <div id="learn-display">
      <iframe id="iframe" ref="battle" :src="currentReplayLoc" width="100%" height="600px" frameborder="0"></iframe>
  </div>
</div>
</template>
<style scoped>

#title{
  font-size:150px;
  text-align:center
}
#sidebar {
    width:200px;
    height: 10vh;
    overflow-y: auto;
    text-align: left;
}

#learn-display {
  width:2000px;
  height: 100vh;
  overflow-y: auto;
  text-align: right;
}
.option {
    padding: 10px;
    font-size: 12px;
    cursor: pointer;
}

.option.selected {
    font-size: 48px; /* Enlarge the selected option */
    color:red
}

</style>
