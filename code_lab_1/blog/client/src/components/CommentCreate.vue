<script setup>
import { ref } from "vue";

const newComment = ref("");
const emit = defineEmits(["sendComment"]);

async function submitComment(event) {
  event.preventDefault();
  emit("sendComment", newComment.value);
  newComment.value = "";
}
</script>

<template>
  <div class="CommentCreate">
    <div>
      <form @submit="submitComment">
        <div className="form-group">
          <label>New Comment</label>
          <input v-model="newComment" className="form-control" />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
