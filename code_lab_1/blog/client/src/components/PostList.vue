<script setup>
import { computed, onMounted, reactive } from "vue";
import axios from "axios";
import CommentCreate from "./CommentCreate.vue";

const state = reactive({
  posts: {},
});

onMounted(() => {
  fetchPosts();
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
</script>

<template>
  <div class="d-flex flex-row flex-wrap justify-content-between">
    <div class="card" v-for="post in sortedPosts" :key="post.id">
      <div className="card-body">
        <h3>{{ post.title }}</h3>
        <CommentCreate :postId="post.id" />
      </div>
    </div>
  </div>
</template>

<style>
.card {
  width: 30%;
  margin-bottom: 20px;
}
</style>
