import axios from "axios";

export async function postTodo(newTodo) {
  await axios.post("http://localhost:3000/todos", {
    title: newTodo,
    completed: false,
  });
}

export async function getTodos() {
  const { data } = await axios.get("http://localhost:3000/todos");
  return data;
}

export async function deleteTodo(id) {
  await axios.delete(`http://localhost:3000/todos/${id}`);
  await getTodos();
}

export async function patchTodo(id, newValue) {
  await axios.patch(`http://localhost:3000/todos/${id}`, {
    completed: newValue,
  });
}
