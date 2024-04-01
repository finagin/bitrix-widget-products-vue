import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { defineStore } from 'pinia'
import { api } from '@/helpers'

export const useApiProducts = defineStore('products', () => {
  const route = useRoute()
  const isLoading = ref(false)
  const cache = ref({
    category: {},
    vendor: {}
  })
  const list = ref([])
  const current = ref({})

  const byCategory = async (category) => {
    if (!cache.value.category?.[category]) {
      const { data } = await api.get('', {
        params: {
          getRazdel: category
        }
      })

      cache.value.category[category] = data
    }

    return cache.value.category[category]
  }

  const byVendor = async (vendor) => {
    if (!cache.value.vendor?.[vendor]) {
      const { data } = await api.get('', {
        params: {
          getVendor: vendor
        }
      })

      cache.value.vendor[vendor] = data
    }

    return cache.value.vendor[vendor]
  }

  const call = async () => {
    isLoading.value = true

    list.value = []

    if (route?.params?.category) {
      list.value = await byCategory(route.params.category)
    } else if (route?.params?.vendor) {
      list.value = await byVendor(route.params.vendor)
    }

    isLoading.value = false
  }

  const updateCurrent = async () => {
    await call()

    current.value = list.value.find((product) => product['ID ТЕ'] === route.params.product)
  }

  return { list, current, isLoading, call, updateCurrent }
})
