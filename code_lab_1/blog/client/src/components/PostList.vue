<script setup>
import PostCard from "./PostCard.vue";

const props = defineProps({
  posts: Array,
});
</script>

<template>
  <div class="d-flex flex-row flex-wrap justify-content-between">
    <div class="card" v-for="post in props.posts" :key="post.id">
      <PostCard :post="post" />
    </div>
  </div>
</template>

<style>
.card {
  width: 30%;
  margin-bottom: 20px;
}
</style>
