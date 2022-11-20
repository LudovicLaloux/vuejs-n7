<script setup>
import { computed, onMounted, reactive } from "vue";
import axios from "axios";

const props = defineProps({
  postId: String,
});

const state = reactive({
  comments: {},
});

onMounted(() => {
  fetchComments();
});

async function fetchComments() {
  const response = await axios.get(
    `http://localhost:4001/posts/${props.postId}/comments`
  );
  state.comments = response.data;
}

const sortedComments = computed(() => {
  const sortedComments = [];
  for (const comment of Object.values(state.comments)) {
    sortedComments.push(comment);
  }
  return sortedComments;
});
</script>

<template>
  <div class="CommentList">
    <ul>
      <li v-for="comment in sortedComments" :key="comment.id">
        {{ comment.content }}
      </li>
    </ul>
  </div>
</template>

<style>
.card {
  width: 30%;
  margin-bottom: 20px;
}
</style>
