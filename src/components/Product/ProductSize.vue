<template>
  <div class="mt-10">
    <div class="flex items-center justify-between">
      <h3 class="text-sm font-medium text-gray-900">Size</h3>
      <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</a>
    </div>

    <RadioGroup :model-value="selectedSize" @update:modelValue="updateSelectedSize" class="mt-4">
      <RadioGroupLabel class="sr-only">Choose a size</RadioGroupLabel>
      <div class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
        <RadioGroupOption
          as="template"
          v-for="size in sizes"
          :key="size.name"
          :value="size"
          :disabled="!size.inStock"
          v-slot="{ active, checked }"
        >
          <div
            :class="[
              size.inStock
                ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                : 'cursor-not-allowed bg-gray-50 text-gray-200',
              active ? 'ring-2 ring-indigo-500' : '',
              'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
            ]"
          >
            <RadioGroupLabel as="span">{{ size.name }}</RadioGroupLabel>
            <span
              v-if="size.inStock"
              :class="[
                active ? 'border' : 'border-2',
                checked ? 'border-indigo-500' : 'border-transparent',
                'pointer-events-none absolute -inset-px rounded-md'
              ]"
              aria-hidden="true"
            />
            <span
              v-else
              aria-hidden="true"
              class="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
            >
              <svg
                class="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                stroke="currentColor"
              >
                <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
              </svg>
            </span>
          </div>
        </RadioGroupOption>
      </div>
    </RadioGroup>
  </div>

  <button
    type="submit"
    class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
  >
    Add to bag
  </button>
</template>
<script setup lang="ts">
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
interface Size {
  name: string
  inStock: boolean
}

defineProps<{
  sizes: Size[]
  selectedSize: Size
}>()

const emit = defineEmits(['update:selectedSize'])

const updateSelectedSize = (newSize: Size) => {
  emit('update:selectedSize', newSize)
}
</script>
