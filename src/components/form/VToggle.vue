<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  value: {
    default: false
  }
})

const prepare = (value: any) => {
  switch (value) {
    case 'Y':
    case 'Да':
    case 'true':
      return true
    case 'N':
    case 'Нет':
    case 'false':
    default:
      return false
  }
}
</script>

<template>
  <label class="inline-flex items-center cursor-pointer">
    <input type="checkbox" :checked="prepare(value)" class="sr-only peer" disabled />
    <div
      class="relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
    ></div>
    <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
      <slot />
    </span>
  </label>
</template>
