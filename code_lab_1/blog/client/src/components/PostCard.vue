<script setup>
import { computed, onMounted, reactive } from "vue";
import axios from "axios";
import CommentCreate from "./CommentCreate.vue";
import CommentList from "./CommentList.vue";

const props = defineProps({
  post: Object,
});

onMounted(() => {
  fetchComments();
});

const state = reactive({
  comments: {},
});

async function sendComment(comment) {
  await axios.post(`http://localhost:4001/posts/${props.post.id}/comments`, {
    content: comment,
  });
  await fetchComments();
}

async function fetchComments() {
  const response = await axios.get(
    `http://localhost:4001/posts/${props.post.id}/comments`
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
  <div className="card-body">
    <h3>{{ props.post.title }}</h3>
    <CommentList :comments="sortedComments" />
    <CommentCreate @sendComment="sendComment" />
  </div>
</template>
