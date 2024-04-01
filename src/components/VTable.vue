<script setup lang="ts"></script>
<template>
  <div class="my-2.5 relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <caption
        v-if="$slots.caption"
        class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800"
      >
        <slot name="caption"></slot>
      </caption>
      <thead
        v-if="$slots.header"
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <slot name="header"></slot>
      </thead>
      <tbody v-if="$slots.default">
        <slot></slot>
      </tbody>
      <tfoot v-if="$slots.footer">
        <slot name="footer"></slot>
      </tfoot>
    </table>
    <nav
      v-if="$slots.pagination"
      class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
      aria-label="Table navigation"
    >
      <slot name="pagination"></slot>
    </nav>
  </div>
</template>
