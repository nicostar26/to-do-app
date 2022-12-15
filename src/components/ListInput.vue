<script setup>
import { ref } from "vue";
const enteredItem = ref("");

const emit = defineEmits(["sendEnteredData", "updateList"]);

function submitItems() {
  fetch("https://lightning-list-5b57f-default-rtdb.firebaseio.com/list.json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      item: enteredItem.value,
    }),
  });
}
</script>

<template>
  <div class="my-4 mx-0 text-center flex justify-between">
    <input
      class="my-0 mx-4 h-8 w-72 shadow-md p-1.5 rounded"
      type="text"
      v-model="enteredItem"
      placeholder="What do you need to accomplish?"
      @keyup.enter="
        submitItems();
        emit('sendEnteredData', enteredItem);
        emit('updateList');
        enteredItem = '';
      "
    />
    <button
      class="p-1.5 text-sm shadow-md w-28 h-8 bg-gray-100 rounded"
      @click="
        submitItems();
        emit('sendEnteredData', enteredItem);
        emit('updateList');
        enteredItem = '';
      "
    >
      Add
    </button>
  </div>
</template>

<style scoped></style>
