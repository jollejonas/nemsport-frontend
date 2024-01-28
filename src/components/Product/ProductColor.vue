<template>
  <div>
    <h3 class="text-sm font-medium text-gray-900">Color</h3>

    <RadioGroup :model-value="selectedColor" @update:modelValue="updateSelectedColor" class="mt-4">
      <RadioGroupLabel class="sr-only">Choose a color</RadioGroupLabel>
      <div class="flex items-center space-x-3">
        <RadioGroupOption
          as="template"
          v-for="color in colors"
          :key="color.name"
          :value="color"
          v-slot="{ active, checked }"
        >
          <div
            :class="[
              color.selectedClass,
              active && checked ? 'ring ring-offset-1' : '',
              !active && checked ? 'ring-2' : '',
              'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
            ]"
          >
            <RadioGroupLabel as="span" class="sr-only">{{ color.name }}</RadioGroupLabel>
            <span
              aria-hidden="true"
              :class="[color.class, 'h-8 w-8 rounded-full border border-black border-opacity-10']"
            />
          </div>
        </RadioGroupOption>
      </div>
    </RadioGroup>
  </div>
</template>

<script setup lang="ts">
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
interface Color {
  name: string
  class: string
  selectedClass: string
}

defineProps<{
  colors: Color[]
  selectedColor: Color
}>()

const emit = defineEmits(['update:selectedColor'])

const updateSelectedColor = (newColor: Color) => {
  emit('update:selectedColor', newColor)
}
</script>
