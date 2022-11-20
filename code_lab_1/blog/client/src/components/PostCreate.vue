<script setup>
import { ref } from "vue";
import axios from "axios";

const title = ref("");

async function sendPost(event) {
  event.preventDefault();
  await axios.post("http://localhost:4001/posts/", {
    title: title.value,
  });
  title.value = "";
}
</script>

<template>
  <div class="PostCreate">
    <div>
      <form @submit="sendPost">
        <div class="form-group">
          <label>Title</label>
          <input v-model="title" class="form-control" />
        </div>
        <button class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
