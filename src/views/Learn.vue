<script>
  import lessonData from "/src/config/lessonInfo.json"

  export default {
    data() {
      return {
        categories: lessonData.categories,
        currentLessonName: "Move Base Power",
        currentReplayLoc: "/assets/lesson-replays/Move Base Power.html",
        options: [
        'Move Base Power',
        'Statuses',
        'Type Matchups',
        'Abilities',
        'Items',
        'Secondary Effects',
        'Priority Moves'
        ],
        selectedOption: 0,
        lessonSidebarClosed: false
      }
    }
  }

</script>

<template>
  <h1 id="title">Learn</h1>
  <div id="learn-container" :class="{ 'close-sidebar': lessonSidebarClosed }">
    <div id="sidebar" :class="{ 'hide-sidebar': lessonSidebarClosed }">
      <h1 id="sidebar-title">📁 Lessons</h1>
      <div id="lesson-indent">
        <div
          v-for="(option, index) in options"
          :key="index"
          :class="{ 'option': true, 'selected': selectedOption === index }"
          @click="() => {
                  selectedOption = index;
                  currentReplayLoc = '/assets/lesson-replays/'+ option + '.html';
                  currentReplayLocText = '/assets/lesson-desc/'+ option + ' Text.html';
                  }"
          >
          {{ option }}
        </div>
      </div>
    </div>
    <input type="button"
           :value="(lessonSidebarClosed ? '⇒' : '⇐')"
           @click="lessonSidebarClosed = !lessonSidebarClosed;"
           id="sidebar-toggle-button">
    <iframe id="iframe" class="replay-iframe" ref="battle" :src="currentReplayLoc" />
  </div>
</template>
<style>
h1#title{
  font-size: 4vw;
  text-align: center;
  padding-bottom: 2%;
}
div#learn-container {
  display: grid;
  grid-template-columns: 18% 2% 80%;
  width: 99.5%;
  transition: grid-template-columns 0.4s ease;
  margin-bottom: 3%;
}
div#learn-container.close-sidebar {
  grid-template-columns: 0% 2% 98%;
}

div#sidebar.sidebar {
  overflow: hidden;
  transition: width 0.4s ease;
}
div#sidebar.hide-sidebar {
  overflow: hidden;
  width: 0%;
}

h1#sidebar-title {
  font-size: 3.2vw;
  text-align: left;
  padding-left: 2%;
}

div.option {
  font-size: 1.5vw;
}

div#lesson-indent {
  margin-left: 5%;
  padding-left: 5%;
  border-left: 2px solid black;
}

div.option {
  transition: transform 0.2s ease;
}
div.option:hover {
  transform: scale(1.1);
  color: #826bdb;
}
div.option.selected {
  transform: scale(1.1);
  font-family: IPS-Medium;
  color: #f23d3d;
}
div.option.selected:after {
  content: " ↤";
}

input#sidebar-toggle-button {
  border: 2px solid black;
  background: #9ec5f6;
  font-size: 2vw;
}
input#sidebar-toggle-button:hover {
  border: 2px solid grey;
}

iframe.replay-iframe {
  width: 100%;
  height: 600px;
}
</style>
