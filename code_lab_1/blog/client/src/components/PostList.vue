<script setup>
import CommentCreate from "./CommentCreate.vue";
import CommentList from "./CommentList.vue";

const props = defineProps({
  posts: Array,
});
</script>

<template>
  <div class="d-flex flex-row flex-wrap justify-content-between">
    <div class="card" v-for="post in props.posts" :key="post.id">
      <div className="card-body">
        <h3>{{ post.title }}</h3>
        <CommentList :postId="post.id" />
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
