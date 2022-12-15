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
  <div class="shadow-md rounded-xl pb-8 mx-auto my-20 h-96 max-w-2xl">
    <div class="text-center bg-cyan-700 w-full rounded-xl">
      <h1 class="text-2xl text-white uppercase font-bold p-8">
        Lightning List
      </h1>
    </div>
    <ListInput @send-entered-data="loadItems" @update-list="loadItems" />
    <div class="h-96">
      <ListItem
        v-for="(toDo, id) in toDoData"
        :key="id"
        :to-do-item="toDo"
        @delete-item="deleteItems"
      />
    </div>
  </div>
</template>

<style scoped></style>
