<template>
  <div class="relative flex min-h-screen">
    <Sidebar />
    <div class="flex-1">
      <RouterView />
      <!-- This renders the matched child route component -->
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from '@/components/AdminPanel/Sidebar.vue'
</script>
