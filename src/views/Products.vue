<script setup lang="js">
import { computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import _ from 'lodash'
import { useApiProducts } from '@/stores/products'
import VTable from '@/components/VTable.vue'
import { boolValue } from '@/helpers'
import { useFilter } from '@/stores/filter'

const route = useRoute()
const products = useApiProducts()

const filter = useFilter()

const productsList = computed(() => {
  if (filter.value != '') {
    return _.filter(products.list, (product) => {
      return product['Наименование'].toLowerCase().includes(filter.value.toLowerCase())
    })
  }

  return products.list
})

watch(() => route.params, products.call)
onMounted(products.call)
</script>
<template>
  <v-table>
    <template #caption> Товары </template>
    <template #header>
      <tr>
        <th scope="col" class="px-6 py-3">ID</th>
        <th scope="col" class="px-6 py-3">Название</th>
        <th scope="col" class="px-6 py-3">Активность</th>
      </tr>
    </template>
    <template #default>
      <tr
        v-if="products.isLoading"
        v-for="product in [1, 2, 3]"
        class="cursor-pointer odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
      >
        <th
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          <div class="animate-pulse h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-12 mb-4" />
        </th>
        <td class="px-6 py-4">
          <div class="animate-pulse h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-240 mb-4" />
        </td>
        <td class="px-6 py-4">
          <div class="animate-pulse h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-8 mb-4" />
        </td>
      </tr>
      <tr
        v-for="product in productsList"
        @click="
          $router.push({
            name: 'product',
            params: { category: $route.category, product: product['ID ТЕ'] }
          })
        "
        class="cursor-pointer odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
      >
        <th
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {{ product['ID ТЕ'] }}
        </th>
        <td class="px-6 py-4">
          {{ product['Наименование'] }}
        </td>
        <td class="px-6 py-4">
          {{ boolValue(product['Активность'], 'Да', 'Нет', 'Неизвестно') }}
        </td>
      </tr>
    </template>
    <template #pagination v-if="!products.isLoading && _.isEmpty(productsList)">
      <div class="font-semibold text-gray-900 dark:text-white block w-full">
        <div class="px-6 py-3 text-base text-center">Нет данных</div>
      </div>
    </template>
  </v-table>
</template>
