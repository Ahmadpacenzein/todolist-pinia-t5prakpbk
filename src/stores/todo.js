import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [],
  }),
  actions: {
    addTodo(text) {
      if (text.trim()) {
        this.todos.push({ text, done: false })
      }
    },
    removeTodo(index) {
      this.todos.splice(index, 1)
    },
toggleTodo(index) {
  this.todos[index] = {
    ...this.todos[index],
    done: !this.todos[index].done
  }
}
  },
  getters: {
    incompleteCount: (state) => state.todos.filter(todo => !todo.done).length,
  },
})
