<script setup>
import ListInput from "./components/ListInput.vue";
import ListItem from "./components/ListItem.vue";
import { ref } from "vue";

let listItem = ref("");

let toDoList = ref([]);

function updateList(task) {
  listItem.value = task;
  toDoList.value.push(task);
}

function deleteToDo(id) {
  toDoList.value.splice(id, 1);
}
</script>

<template>
  <div class="to-do-list">
    <div class="title">
      <h1 class="title-text">To Do List</h1>
    </div>
    <ListInput @send-entered-data="updateList" />
    <div class="list-wrapper">
      <ListItem
        v-for="(toDo, id) in toDoList"
        :key="id"
        :to-do-item="toDo"
        @delete="deleteToDo(id)"
      />
    </div>
  </div>
</template>

<style scoped>
.to-do-list {
  border: black 0.25rem solid;
  padding: 2rem;
  max-width: 40rem;
  height: 40rem;
  margin: 10rem auto;
}

.title {
  text-align: center;
}

.title-text {
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: bold;
  margin: 0 auto;
}

.list-wrapper {
  overflow-y: scroll;
  height: 32rem;
}
</style>
