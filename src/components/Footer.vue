<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="bg-black justify-start py-10 text-white">
    <div class="container mx-auto px-6 md:px12 lg:px-24 xl:px-48">
      <div class="flex flex-wrap -mx-4">
        <div
          v-for="(section, index) in footerData"
          :key="index"
          class="w-full md:w-1/3 px-4 mb-6 md:mb-5"
        >
          <h3 class="text-xl font-bold mb-2">{{ section.category }}</h3>
          <ul>
            <li v-for="(link, index) in section.links" :key="index">
              <a href="#" class="mb-2 hover:text-gray-300">{{ link.name }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const footerData = [
  {
    category: 'Information',
    links: [
      { name: 'Om Macron', href: '#' },
      { name: 'Kundeservice', href: '#' },
      { name: 'Min Konto', href: '#' },
      { name: 'Job hos Macron Danmark', href: '#' }
    ]
  },
  {
    category: 'Support',
    links: [
      { name: 'Gavekort', href: '#' },
      { name: 'FAQ', href: '#' }
    ]
  },
  {
    category: 'Macron Katalog',
    links: [
      { name: 'Fodbold', href: '#' },
      { name: 'Indoor - Cricket', href: '#' },
      { name: 'Rugby', href: '#' },
      { name: 'Accesorries', href: '#' }
    ]
  },
  {
    category: 'Samarbejdspartnere',
    links: [
      { name: 'Nationale Klubber', href: '#' },
      { name: 'Internationale Klubber', href: '#' },
      { name: 'Klubaftale', href: '#' },
      { name: 'Bliv Lokal Sponsor', href: '#' }
    ]
  }
]
</script>
