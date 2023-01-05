<template>
  <div class="mt-6 px-6">
    <v-card
      class="my-2"
      variant="outlined"
      v-for="todo of props.todos"
      :key="todo.id"
    >
      <v-row>
        <v-col cols="1">
          <div class="pl-2 d-flex align-center justify-center">
            <v-switch
              hide-details
              :model-value="todo.completed"
              @change="switchCompleted(todo.id, !todo.completed)"
            ></v-switch>
          </div>
        </v-col>
        <v-col cols="10">
          <div class="d-flex align-center h-100">
            {{ todo.title }}
          </div>
        </v-col>
        <v-col cols="1">
          <v-btn
            @click="deleteTodo(todo.id)"
            variant="text"
            icon="mdi-delete"
            color="red"
          ></v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script setup>
const props = defineProps({
  todos: Array,
});

const emit = defineEmits(["deleteTodo, switchCompleted"]);

function deleteTodo(id) {
  emit("deleteTodo", id);
}

function switchCompleted(id, newValue) {
  emit("switchCompleted", { id, newValue });
}
</script>
