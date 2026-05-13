<template>
     <li>
              <label class="todoList_label">
                <input
  class="todoList_input"
  type="checkbox"
  :checked="todo.status"
  @change="handleToggle(todo.id)"
>
                <span>{{ todo.content }}</span>
              </label>
              <a href="#" @click="handleRemoveTodo(todo.id)">
                <i class="fa fa-times"></i>
              </a>
            </li>
</template>

<script setup>
defineProps({
  todo: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['remove-todo', 'toggle-todo'])

const handleRemoveTodo = (id) => {
  emit('remove-todo', id)
}

const handleToggle = (id) => {
  emit('toggle-todo', id)
}
</script>