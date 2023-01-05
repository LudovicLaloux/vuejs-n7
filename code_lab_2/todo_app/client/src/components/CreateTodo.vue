<template>
  <div class="d-flex align-center">
    <v-text-field
      class="mr-3"
      hide-details
      density="compact"
      v-model="newTodo"
      placeholder="Create a new todo"
    ></v-text-field>
    <v-btn variant="outlined" @click="createTodo">Submit</v-btn>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const newTodo = ref("");
const emit = defineEmits(["createTodo"]);

function createTodo() {
  emit("createTodo", newTodo.value);
  newTodo.value = "";
}

onMounted(() => {
  document.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && newTodo.value) {
      createTodo();
    }
  });
});
onUnmounted(() => {
  document.removeEventListener("keydown");
});
</script>
