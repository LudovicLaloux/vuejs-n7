<script setup>
import { ref } from "vue";

const title = ref("");
</script>

<template>
  <div class="PostCreate">
    <h1>Create Post</h1>
    <div>
      <form>
        <div class="form-group">
          <label>Title</label>
          <input v-model="title" class="form-control" />
        </div>
        <button class="btn btn-primary">Submit</button>
      </form>
    </div>
    <p>Title is {{ title }}</p>
  </div>
</template>

<style scoped lang="scss"></style>
