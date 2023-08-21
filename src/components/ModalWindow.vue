<script>
export default {
  props: {
    name: String,
    date: String,
    url: String,
    showModal: Boolean
  },
  methods: {
    closeModal() {
      this.$emit("close");
    }
  }
}
</script>

<template>
  <div v-if="showModal" class="modal-overlay">
    <div class="modal-content">
      <div class="title-row">
        <div>
          <h1> {{ name }} </h1>
          <br>
          <p> {{ date }} </p>
        </div>
        <a @click="closeModal">✕</a>
      </div>
      <iframe :src="url"
              frameborder="0"
              class="enlarged-archive-slide"
              allowfullscreen="true"
              mozallowfullscreen="true"
              webkitallowfullscreen="true" />
    </div>
  </div>
</template>

<style>
div.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

div.modal-content {
  width: 90%;
  background: #fbfbfb;
  padding: 20px;
  border-radius: 5px;
  height: 90%;
}

div.title-row {
  margin-bottom: 2%;
}
div.title-row h1 {
  font-size: 3vw;
  display: inline-block;
}
div.title-row p {
  font-size: 2vw;
  display: inline-block;
}
div.title-row div {
  display: inline-block;
}
div.title-row a {
  float: right;
  font-size: 200%;
}
div.title-row a:hover {
  color: grey;
  cursor: pointer;
}

iframe.enlarged-archive-slide {
  aspect-ratio: 16 / 9;
  width: 100%;
  height: 87%;
}
</style>
