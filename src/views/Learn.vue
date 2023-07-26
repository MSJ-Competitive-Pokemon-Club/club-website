<script>
  import LessonButton from "../components/LessonButton.vue"

  import lessonData from "/src/assets/lessons/lessonInfo.json"

  export default {
    data() {
      return {
        categories: lessonData.categories,
        currentLessonName: "Test",
        currentReplayLoc: "src/assets/lessons/test.html",
      }
    },
    components: {
      LessonButton,
    },
    methods: {
      changeReplayLog(replayLogLoc) {
          console.log("In here");
          console.log(replayLogLoc);
          this.currentReplayLoc = replayLogLoc;
      },
    }
  }
</script>

<template>

  <div class="learn">
    <div id="learn-sidepanel">
      <strong> Sidebar </strong>
      <ul>
        <li v-for="category in categories">
          <h3> {{ category.name }} </h3>
          <ul>
            <li v-for="lesson in category.lessons">
              <LessonButton :lessonName="lesson.name" :replayLogLoc="lesson.replaySrc" @replay-log-clicked="changeReplayLog"></LessonButton>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <div id="learn-display">
      <h1>Learn</h1>
      <h1> {{ this.lessonName }} </h1>
      <iframe id="iframe" ref="battle" :src="currentReplayLoc" width="100%" height="600px" frameborder="0"></iframe>
    </div>

  </div>
</template>
