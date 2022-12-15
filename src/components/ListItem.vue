<script setup>
import { ref } from "vue";

defineProps({
  toDoItem: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["deleteItem"]);

let isDone = ref(false);

const toggle = () => (isDone.value = !isDone.value);
</script>

<template>
  <div class="item-wrapper">
    <span><input type="checkbox" @click="toggle()" /></span>
    <span
      ><h3 :class="{ active: isDone }" contentEditable="true">
        {{ toDoItem.item }}
      </h3></span
    >
    <span
      ><button @click="emit('deleteItem', toDoItem.id)">Delete</button></span
    >
  </div>
</template>

<style scoped>
.item-wrapper {
  display: flex;
  align-items: center;
  padding: 0.25rem 1rem;
  border: black 0.15rem solid;
}

h3 {
  padding: 0 0.5rem;
}

button {
  height: 2rem;
}

span:last-of-type {
  margin-left: auto;
}

.active {
  text-decoration: line-through;
  color: grey;
}
</style>
