<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl sm:grid-cols-2 lg:gap-x-8 lg:px-8"
  >
    <div class="mx-auto max-w-2xl px-2 sm:px-6 lg:px-2 col-span-1">
      <ProductImage :image="selectedImage" />
    </div>
    <div class="mx-auto w-full max-w-2xl px-2 sm:px-6 lg:px-2 col-span-1">
      <ProductTile />
      <ProductDescription />

      <form class="mt-10">
        <ProductColor :colors="product.colors" v-model:selectedColor="selectedColor" />
        <ProductSize :sizes="product.sizes" v-model:selectedSize="selectedSize" />
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductImage from '../components/Product/ProductImage.vue'
import ProductTile from '../components/Product/ProductTitle.vue'
import ProductDescription from '../components/Product/ProductDescription.vue'
import ProductColor from '../components/Product/ProductColor.vue'
import ProductSize from '../components/Product/ProductSize.vue'
import { computed, ref } from 'vue'

const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' }
  ],
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
      color: 'White'
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
      color: 'Gray'
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
      color: 'Black'
    }
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' }
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true }
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton'
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.'
}

const selectedColor = ref(product.colors[0])
const selectedSize = ref(product.sizes[2])
const selectedImage = computed(() => {
  const image = product.images.find((image) => image.color === selectedColor.value.name)
  return image || product.images[0]
})
</script>
