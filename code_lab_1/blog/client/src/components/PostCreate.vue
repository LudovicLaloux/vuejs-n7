<script setup>
import { ref } from "vue";

const title = ref("");

const emit = defineEmits(["sendPost"]);

async function submitPost(event) {
  event.preventDefault();
  emit("sendPost", title.value);
  title.value = "";
}
</script>

<template>
  <div class="PostCreate">
    <div>
      <form @submit="submitPost">
        <div class="form-group">
          <label>Title</label>
          <input v-model="title" class="form-control" />
        </div>
        <button class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
