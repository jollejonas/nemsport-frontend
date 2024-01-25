<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-2 py-16 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-2">
      <div class="flex items-center justify-center">
        <div class="flex-grow border-t-2 border-b-2 border-black mx-4"></div>
        <h2 class="text-4xl font-bold tracking-tight text-gray-900 text-center">Kampanger</h2>
        <div class="flex-grow border-t-2 border-b-2 border-black mx-4"></div>
      </div>
      <div class="flex flex-wrap -mx-2">
        <div class="p-4 w-full md:w-1/2" v-for="(item, index) in images" :key="index">
          <div class="relative">
            <img :src="item.src" class="w-full h-auto object-cover" />
            <div
              class="absolute left-0 right-0 bottom-0 flex items-end justify-center bg-black bg-opacity-90"
            >
              <span class="text-white text-2xl font-bold py-8">{{ item.text }}</span>
            </div>
            <div class="absolute top-28 right-0 bottom-0 flex items-center justify-end">
              <span
                class="text-white text-xl font-bold py-8 rotate-270 w-14 h-auto whitespace-nowrap"
                >{{ item.text }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const images: { src: string; text: string }[] = [
  {
    src: 'https://images.unsplash.com/photo-1706038513426-97db705d6bbd?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Text for the first image'
  },
  {
    src: 'https://images.unsplash.com/photo-1706038513426-97db705d6bbd?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Text for the second image'
  },
  {
    src: 'https://images.unsplash.com/photo-1706038513426-97db705d6bbd?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Text for the third image'
  },
  {
    src: 'https://images.unsplash.com/photo-1706038513426-97db705d6bbd?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Text for the fourth image'
  }
  // Add more images if necessary
]
</script>
