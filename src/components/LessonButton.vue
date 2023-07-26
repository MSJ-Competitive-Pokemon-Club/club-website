<script>
export default {
  props: {
    lessonName: String,
    replayLogLoc: String,
  },
  methods: {
    sendReplayLoc() {
      console.log(this.replayLogLoc);
      console.log(this.lessonName);
      this.$emit('replay-log-clicked', this.replayLogLoc);
    }
  }
}
</script>


<template>
  <div class="learn-button">
    <!-- TODO Add an image to the side -->
    <button @click="sendReplayLoc"> {{ lessonName }} </button>
  </div>
</template>

<style>
</style>
