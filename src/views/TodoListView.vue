<template>
  <div id="todoListPage" class="bg-half">
    <nav>
      <h1><a href="#">ONLINE TODO LIST</a></h1>

      <ul>
        <li class="todo_sm">
          <a href="#"><span>Ryckie 的待辦</span></a>
        </li>

        <li>
          <a href="#" @click.prevent="logout">登出</a>
        </li>
      </ul>
    </nav>

    <div class="conatiner todoListPage vhContainer">
      <div class="todoList_Content">

        <TodoForm @add-todo="addTodo" />

        <TodoList
          v-if="todos.length"
          :todos="todos"
          @remove-todo="removeTodo"
          @toggle-todo="toggleTodo"
        />

        <p v-else>尚無待辦事項</p>

      </div>
    </div>
  </div>
</template>

<script setup>
import TodoForm from '@/components/TodoForm.vue'
import TodoList from '@/components/TodoList.vue'

import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const todos = ref([
  { id: 1, content: '買健康餐盒', status: false },
  { id: 2, content: '去健身房一小時', status: true },
])

const addTodo = (content) => {
  if (content.trim() !== '') {
    todos.value.push({
      id: Date.now(),
      content,
      status: false,
    })
  }
}

const removeTodo = (id) => {
  todos.value = todos.value.filter((t) => t.id !== id)
}

const toggleTodo = (id) => {
  const todo = todos.value.find((t) => t.id === id)

  if (todo) {
    todo.status = !todo.status
  }
}

const logout = () => {
  document.cookie =
    'vue3-todolist-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'

  router.push('/login')
}
</script>