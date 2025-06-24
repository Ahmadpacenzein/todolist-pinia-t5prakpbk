<template>
  <div id="app">
    <TodoList />
  </div>
</template>

<script setup>
import TodoList from './views/TodoList.vue'
</script>

<style>
#app {
  min-height: 100vh;
  background-color: #d3d3d3;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 50px;
  margin: 10rem;
}
</style>
