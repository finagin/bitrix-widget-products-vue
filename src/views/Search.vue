<script setup lang="js">
import { ref } from 'vue'
import { api, boolValue } from '@/helpers'
import VTable from '@/components/VTable.vue'
import _ from 'lodash'

const search = ref('')
const results = ref('')
const isLoading = ref(false)

const find = async (event) => {
  event.preventDefault()

  isLoading.value = true

  const { data } = await api.get('', {
    params: {
      search: search.value
    }
  })

  results.value = data

  isLoading.value = false
}
</script>

<template>
  <form @submit="find">
    <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >Search</label
    >
    <div class="relative">
      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg
          class="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        v-model.lazy="search"
        id="search"
        name="search"
        type="search"
        class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search"
        required
      />
      <button
        type="submit"
        class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Поиск
      </button>
    </div>
  </form>

  <v-table>
    <template #header>
      <tr>
        <th scope="col" class="px-6 py-3">ID</th>
        <th scope="col" class="px-6 py-3">Название</th>
        <th scope="col" class="px-6 py-3">Активность</th>
      </tr>
    </template>
    <template #default>
      <tr
        v-if="isLoading"
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
        v-for="product in results"
        @click="
          $router.push({
            name: 'product',
            params: { category: product['Раздел ТК'], product: product['ID ТЕ'] }
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
    <template #pagination v-if="search != '' && !isLoading && _.isEmpty(results)">
      <div class="font-semibold text-gray-900 dark:text-white block w-full">
        <div class="px-6 py-3 text-base text-center">Ничего не найдено</div>
      </div>
    </template>
  </v-table>
</template>
