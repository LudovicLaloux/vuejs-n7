<script setup>
import { ref } from "vue";

const title = ref("");

function sendPost() {
  console.log("titre du post :", title.value);
}
</script>

<template>
  <div class="PostCreate">
    <h1>Create Post</h1>
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
