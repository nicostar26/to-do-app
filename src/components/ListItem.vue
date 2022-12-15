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
  <div class="flex items-center py-1 px-4">
    <span class="flex-none"><input type="checkbox" @click="toggle()" /></span>
    <span class="grow"
      ><h3 class="py-0 px-4" :class="{ active: isDone }" contentEditable="true">
        {{ toDoItem.item }}
      </h3></span
    >
    <span class="flex-none"
      ><button
        class="p-1.5 text-sm shadow-md w-28 h-8 bg-gray-100 rounded"
        @click="emit('deleteItem', toDoItem.id)"
      >
        Delete
      </button></span
    >
  </div>
</template>

<style scoped>
.active {
  text-decoration: line-through;
  color: grey;
}
</style>
