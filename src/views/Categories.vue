<script setup lang="js">
import { onMounted, computed } from 'vue'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import _ from 'lodash'
import VTable from '@/components/VTable.vue'
import { useApiCategories } from '@/stores/categories'
import { useFilter } from '@/stores/filter'

const route = useRoute()
const categories = useApiCategories()
const filter = useFilter()

const categoriesList = computed(() => {
  const result = route?.params.category
    ? categories.list[route?.params.category]?.children
    : categories.list

  if (filter.value != '') {
    return _.filter(result, (category) => {
      return category.name.toLowerCase().includes(filter.value.toLowerCase())
    })
  }

  return result
})

onMounted(categories.call)
onBeforeRouteUpdate(() => {
  filter.value = ''
})
</script>

<template>
  <router-view class="border border-primary-100" />

  <v-table v-if="!_.isEmpty(categoriesList)">
    <template #caption v-if="$route.params?.category"> Подкатегории </template>
    <template #header>
      <tr>
        <th scope="col" class="px-6 py-3">ID</th>
        <th scope="col" class="px-6 py-3">Наименование</th>
        <th scope="col" class="px-6 py-3">Кол-во подразделов</th>
      </tr>
    </template>
    <template #default>
      <tr
        v-for="category in categoriesList"
        @click="
          $router.push({
            name: 'products',
            params: { category: category.id }
          })
        "
        class="cursor-pointer odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
      >
        <th
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {{ category.id }}
        </th>
        <td class="px-6 py-4">
          {{ category.name }}
        </td>
        <td class="px-6 py-4">
          {{ category.count }}
        </td>
      </tr>
    </template>
  </v-table>
</template>
