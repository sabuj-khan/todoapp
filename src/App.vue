<script setup>
import { onMounted } from 'vue';
import { useTodoStore } from './stores/todo';
const todoStore = useTodoStore();

onMounted(() => {
  todoStore.getAllTodos();
})

</script>

<template>
  <div class="container">
    <div class="row my-5">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
              <h1 class="card-title text-center">Task List</h1>

              <div class="row mb-4">

                <form action="">
                  <div class="col-md-12">
                    <label for="" class="form-label">
                      <span v-if="!todoStore.isEdit">Add New Task </span>
                      <span v-else>Update Task</span>
                    </label>
                    <input v-model="todoStore.todoForm.title" type="text" class="form-control">
                  </div>
                  <div class="mt-3">
                    <input v-if="!todoStore.isEdit" @click.prevent="todoStore.createTodo" type="button" value="Add Task" class="btn btn-success">
                    <input v-else @click.prevent="todoStore.updateTodo(todoStore.editId)" type="button" value="Update Task" class="btn btn-success">
                  </div>
                </form>

              </div>
          </div>
          <div class="card-body">
            <h4 class="text-danger">Tasks</h4>
            <ul class="list-group">
              <li v-for="todo in todoStore.todos" :key="todo.id" class="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <input class="form-check-input me-2" @click="todoStore.completeTodo(todo.id)" type="checkbox" name="" id="">
                  <!-- <span :class="todo.completed ? 'text-decoration-line-through':''">{{ todo.title }}</span> -->
                  <span v-if="todo.completed"><del>{{ todo.title }}</del></span>
                  <span v-else>{{ todo.title }}</span>
                </div>
                <div>
                  <button class="btn text-primary" @click.prevent="todoStore.getTodo(todo.id)"> <i class="fa-solid fa-edit"></i></button>
                  <button @click.prevent="todoStore.deleteTodo(todo.id)" class="btn text-danger"> <i class="fa-solid fa-xmark"></i></button>
                </div>
              </li>
              

              
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<style scoped>


</style>
