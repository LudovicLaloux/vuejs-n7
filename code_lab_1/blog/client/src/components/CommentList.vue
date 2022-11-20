<script setup>
const props = defineProps({
  comments: Array,
});
</script>

<template>
  <div class="CommentList">
    <ul>
      <li v-for="comment in props.comments" :key="comment.id">
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
