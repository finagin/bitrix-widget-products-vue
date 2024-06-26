<script setup lang="js">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useApiCategories } from '@/stores/categories'

const categories = useApiCategories()
const route = useRoute()

const breadcrumbs = computed(() => {
  let crumbs = []
  let category = route.params?.category

  while (categories.list[category]?.parent) {
    crumbs.push(categories.list[category]?.parent)
    category = categories.list[category]?.parent?.id
  }

  return crumbs.reverse()
})

const cropName = (name, size = 20) => {
  return name.length > size ? name.slice(0, size - 3) + '...' : name
}
</script>

<template>
  <nav class="flex mb-2.5 pb-2.5 border-b" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
      <li class="inline-flex items-center">
        <router-link
          :to="{ name: 'categories' }"
          class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
        >
          <svg
            class="w-3 h-3 me-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"
            />
          </svg>
          Категории
        </router-link>
      </li>
      <li v-for="breadcrumb in breadcrumbs">
        <div class="flex items-center">
          <svg
            class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <router-link
            :to="{ name: 'products', params: { category: breadcrumb.id } }"
            class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
            :title="breadcrumb.name"
          >
            {{ cropName(breadcrumb.name) }}
          </router-link>
        </div>
      </li>
      <li aria-current="page" v-if="categories.list[$route.params?.category]">
        <div class="flex items-center">
          <svg
            class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span
            class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400"
            :title="categories.list[$route.params?.category]?.name"
          >
            {{ cropName(categories.list[$route.params.category]?.name, 30) }}
          </span>
        </div>
      </li>
    </ol>
  </nav>
</template>
