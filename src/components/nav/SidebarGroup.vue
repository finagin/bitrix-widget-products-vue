<script setup lang="ts">
import { ref } from 'vue'
import IconArrowDown from '@/components/icons/IconArrowDown.vue'

const isOpen = ref(false)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <li>
    <button
      type="button"
      class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
      aria-controls="dropdown-example"
      @click="toggleDropdown"
    >
      <slot name="title"></slot>
      <IconArrowDown />
    </button>
    <ul id="dropdown-example" :class="{ hidden: !isOpen }" class="py-2 space-y-2">
      <slot></slot>
    </ul>
  </li>
</template>
