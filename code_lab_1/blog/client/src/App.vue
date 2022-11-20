<script setup>
import PostCreate from "./components/PostCreate.vue";
import PostList from "./components/PostList.vue";
</script>

<template>
  <div class="App">
    <div class="container">
      <h1>Create Post</h1>
      <PostCreate />
      <hr />
      <h1>Posts</h1>
      <PostList />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
