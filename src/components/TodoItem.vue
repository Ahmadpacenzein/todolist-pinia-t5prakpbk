<template>
  <div class="card">
<input class="checkbox" type="checkbox" :checked="todo.done" @change="toggleTodo" />
    <span class="todo-text" :class="{ done: todo.done }">{{ todo.text }}</span>
    <button @click="removeTodo">🗑</button>
  </div>
</template>

<script setup>
const props = defineProps(['todo', 'index'])
const emit = defineEmits(['toggle', 'remove'])

function toggleTodo() {
  emit('toggle', props.index)
}
function removeTodo() {
  emit('remove', props.index)
}
</script>

<style scoped>
.card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 20px;
  background: #e0e0e0;
  box-shadow: 8px 8px 16px #bebebe, -8px -8px 16px #ffffff;
  margin-bottom: 1rem;
}
.checkbox {
  width: 20px;
  height: 20px;
  margin-right: 1rem;
  cursor: pointer;
  appearance: none;
  border-radius: 50%;
  border: 2px solid #bbb;
  background-color: #f9f9f9;
  box-shadow: inset 2px 2px 5px #d1d1d1, inset -2px -2px 5px #ffffff;
}
.checkbox:checked {
  background-color: #1a1b1a;
  border-color: #cdcdcd;
  box-shadow: inset 2px 2px 5px #1a1b1a, inset -2px -2px 5px #ffffff;
}
.done {
  text-decoration: line-through;
  color: #888;
  opacity: 0.6;
  transition: color 0.3s ease, opacity 0.3s ease;
}
button {
  background: none;
  background-color: rgb(72, 72, 72);
  border: none;
  cursor: pointer;
}
.todo-text {
  flex-grow: 1;
  color: #4a4848;
  font-family: 'Arial', sans-serif;
  font-weight: bolder;
  transition: color 0.3s ease, opacity 0.3s ease;
}
</style>
