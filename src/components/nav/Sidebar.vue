<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import IconImport from '@/components/icons/IconImport.vue'
import IconHamburger from '@/components/icons/IconHamburger.vue'
import IconCategories from '@/components/icons/IconCategories.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
import IconFolder from '@/components/icons/IconFolder.vue'
import SidebarItem from '@/components/nav/SidebarItem.vue'

const menuOpen = ref(false)
const menuToggle = () => (menuOpen.value = !menuOpen.value)
const menuClose = () => (menuOpen.value = false)
const menuClasses = computed(() => ({
  'translate-x-0': menuOpen.value,
  '-translate-x-full': menuOpen.value
}))
</script>

<template>
  <button
    aria-controls="sidebar-multi-level-sidebar"
    type="button"
    @click="menuToggle"
    class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  >
    <span class="sr-only">Open sidebar</span>
    <IconHamburger />
  </button>

  <aside
    id="sidebar-multi-level-sidebar"
    :class="menuClasses"
    @mouseleave="menuClose"
    class="fixed top-16 left-0 z-20 w-72 h-screen transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
        <sidebar-item>
          <router-link
            :to="{ name: 'categories' }"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <IconFolder />
            <span class="ms-3">Категории</span>
          </router-link>
        </sidebar-item>
        <sidebar-item>
          <router-link
            :to="{ name: 'products', params: { category: 1542 } }"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <IconFolder />
            <span class="ms-3">Производители</span>
          </router-link>
        </sidebar-item>
        <sidebar-item>
          <router-link
            :to="{ name: 'search' }"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <IconSearch />
            <span class="ms-3">Поиск</span>
          </router-link>
        </sidebar-item>
      </ul>
      <ul class="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
        <li>
          <a
            href="https://serverlink.smttech.ru/golovolomka/ImportCSV/"
            class="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
          >
            <IconImport />
            <span class="ms-3">Экспорт товаров на сайт</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>

  <div class="mt-16 p-4 sm:ml-72">
    <slot></slot>
  </div>
</template>
