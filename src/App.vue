<script setup lang="ts">
import Header from '@/components/nav/Header.vue'
import Sidebar from '@/components/nav/Sidebar.vue'
import Breadcrumb from '@/components/nav/Breadcrumb.vue'
</script>

<template>
  <Header />
  <sidebar>
    <Breadcrumb />
    <RouterView />
  </sidebar>
</template>
