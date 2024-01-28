<template>
  <img class="h-full w-full object-cover object-center" :src="image.src" :alt="image.alt" />
</template>
<script setup lang="ts">
defineProps<{
  image: {
    src: string
    alt: string
    color: string
  }
}>()
</script>
