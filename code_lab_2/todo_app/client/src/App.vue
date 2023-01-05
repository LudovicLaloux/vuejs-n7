<script setup>
import { reactive } from "vue";
import CreateTodo from "./components/CreateTodo.vue";
import ListTodos from "./components/ListTodos.vue";
import { postTodo, getTodos, deleteTodo, patchTodo } from "./provider.js";
const state = reactive({
  todos: [],
});

async function createTodo(newTodo) {
  await postTodo(newTodo);
  await fetchTodo();
}

async function fetchTodo() {
  state.todos = await getTodos();
}

async function removeTodo(id) {
  await deleteTodo(id);
  await fetchTodo();
}

async function switchCompleted(data) {
  await patchTodo(data.id, data.newValue);
}

fetchTodo();
</script>

<template>
  <v-container>
    <CreateTodo @createTodo="createTodo" />
    <ListTodos
      @deleteTodo="removeTodo"
      @switchCompleted="switchCompleted"
      :todos="state.todos"
    />
  </v-container>
</template>

<style scoped></style>
