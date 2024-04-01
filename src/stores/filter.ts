import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFilter = defineStore('filter', () => {
  const value = ref('')

  return { value }
})
