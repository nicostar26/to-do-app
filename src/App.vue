<script setup>
import ListInput from "./components/ListInput.vue";
import ListItem from "./components/ListItem.vue";
import { ref, onMounted } from "vue";

// API CALL
const toDoData = ref([]);

function loadItems() {
  fetch("https://lightning-list-5b57f-default-rtdb.firebaseio.com/list.json")
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
    })
    .then(function (data) {
      const results = [];
      for (const id in data) {
        results.push({ id: id, item: data[id].item });
      }
      toDoData.value = results;
    });
}

function deleteItems(id) {
  fetch(
    `https://lightning-list-5b57f-default-rtdb.firebaseio.com/list/${id}.json`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: null,
    }
  ).then(loadItems);
}

onMounted(loadItems);
//onUpdated(loadItems);
</script>

<template>
  <div class="to-do-list">
    <div class="title">
      <h1 class="title-text">Lightning List</h1>
    </div>
    <ListInput @send-entered-data="loadItems" @update-list="loadItems" />
    <div class="list-wrapper">
      <ListItem
        v-for="(toDo, id) in toDoData"
        :key="id"
        :to-do-item="toDo"
        @delete-item="deleteItems"
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
