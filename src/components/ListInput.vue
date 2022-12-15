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
  <div class="input">
    <input
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
      @click="
        submitItems();
        emit('sendEnteredData', enteredItem);
        emit('updateList');
        enteredItem = '';
      "
    >
      Add To Do Item
    </button>
  </div>
</template>

<style scoped>
.input {
  margin: 1rem 0;

  text-align: center;
}
input {
  margin: 0 1rem;
  height: 1.5rem;
  width: 15rem;
}
button {
  padding: 0.35rem;
}
</style>
