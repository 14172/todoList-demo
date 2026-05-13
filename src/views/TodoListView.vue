<template>
    <div id="todoListPage" class="bg-half">
  <nav>
    <h1><a href="#">ONLINE TODO LIST</a></h1>
    <ul>
      <li class="todo_sm"><a href="#"><span>Ryckie 的待辦</span></a></li>
      <li><a href="#loginPage">登出</a></li>
    </ul>
  </nav>
  <div class="conatiner todoListPage vhContainer">
    <div class="todoList_Content">
<TodoForm @add-todo="addTodo"></TodoForm>
<TodoList v-if="todos.length" :todos ="todos" @remove-todo="removeTodo"></TodoList>

<p v-else>尚無待辦事項</p>
    </div>
  </div>
</div>
</template>

<script setup>
import TodoForm from '@/components/TodoForm.vue';
import TodoList from '@/components/TodoList.vue';
import {ref} from 'vue';
const todos = ref([
   { id: 1, content: "買健康餐盒", status: false },
   { id: 2, content: "去健身房一小時", status: true },
])

const addTodo =(content) =>{
  if (content.trim() !== ''){
    todos.value.push({
      id: Date.now(),
      content,
      status:false,
    })
  } 
}

const removeTodo =(id) => {
  todos.value = todos.value.filter((t) => t.id !== id)
}

</script>