<template>
  <div class="container">
    <h1>Todo List With Pinia</h1>
    <input
      v-model="newTodo"
      @keyup.enter="addNewTodo"
      placeholder="Tambah tugas..."
      autocomplete="off"
      spellcheck="false"
    />
    <TodoItem
      v-for="(todo, index) in todoStore.todos"
      :key="index"
      :todo="todo"
      :index="index"
      @toggle="todoStore.toggleTodo"
      @remove="todoStore.removeTodo"
    />
    <p class="incomplete-count">{{ todoStore.incompleteCount }} tugas belum selesai</p>
    <hr>
    <p class ="watermark">copyright &copy; Ahmad Zaini</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTodoStore } from '../stores/todo.js'
import TodoItem from '../components/TodoItem.vue'

const todoStore = useTodoStore()
const newTodo = ref('')

function addNewTodo() {
  todoStore.addTodo(newTodo.value)
  newTodo.value = ''
}
</script>

<style scoped>
.container {
  max-width: 500px;
  margin: 50px auto;
  padding: 2rem 2rem;
  border-radius: 30px;
  background: #e0e0e0;
  box-shadow: 10px 10px 30px #bebebe, -10px -10px 30px #ffffff;
}
h1 {
  text-align: center;
  color: #333;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: rgb(72, 71, 71);
}
input {
  color: rgb(72, 71, 71);
  position: relative;
  width: 100%;
  max-width: 180px;
  margin: 0 auto 1rem auto;
  display: block;
  padding: 1rem 1.5rem;
  border-radius: 20px;
  background: #e0e0e0;
  box-shadow: 8px 8px 16px #bebebe, -8px -8px 16px #ffffff;
  font-size: 1rem;
  border: none;
  transition: box-shadow 0.3s ease;
}
input:focus {
  outline: none;
  box-shadow: 0 0 12px #bebebe, 0 0 12px #ffffff;
}
.incomplete-count {
  text-align: center;
  color: #888;
  font-size: 0.9rem;
  margin-top: 1rem;
  font-weight: bolder;
}
.watermark {
  text-align: center;
  color: #888;
  font-size: 0.8rem;
  margin-top: 1rem;
  font-weight: bolder;
}
</style>
