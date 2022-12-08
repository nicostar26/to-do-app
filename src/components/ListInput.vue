<script setup>
import { ref } from "vue";
const enteredItem = ref("");

const emit = defineEmits(["sendEnteredData"]);
</script>

<template>
  <div class="input">
    <input
      type="text"
      v-model="enteredItem"
      placeholder="What do you need to accomplish?"
      @keyup.enter="
        emit('sendEnteredData', enteredItem);
        enteredItem = '';
      "
    />
    <button
      @click="
        emit('sendEnteredData', enteredItem);
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
