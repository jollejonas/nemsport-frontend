<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <News />
  <ProductList />
  <ProductList />
  <Campaign />
</template>

<script setup lang="ts">
import ProductList from '../components/ProductList.vue'
import News from '../components/News.vue'
import Campaign from '../components/Campaign.vue'
</script>
