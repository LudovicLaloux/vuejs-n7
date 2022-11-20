<script setup>
import { reactive, onMounted, computed } from "vue";
import PostCreate from "./components/PostCreate.vue";
import PostList from "./components/PostList.vue";
import axios from "axios";

const state = reactive({
  posts: {},
});

async function fetchPosts() {
  const response = await axios.get("http://localhost:4001/posts");
  state.posts = response.data;
}

const sortedPosts = computed(() => {
  const sortedPosts = [];
  for (const post of Object.values(state.posts)) {
    sortedPosts.push(post);
  }
  return sortedPosts;
});

async function sendPost(title) {
  await axios.post("http://localhost:4001/posts/", {
    title: title,
  });
  await fetchPosts();
}

onMounted(() => {
  fetchPosts();
});
</script>

<template>
  <div class="App">
    <div class="container">
      <h1>Create Post</h1>
      <PostCreate @sendPost="sendPost" />
      <hr />
      <h1>Posts</h1>
      <PostList :posts="sortedPosts" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
