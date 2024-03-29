<template>
  <div class="px-16 pt-16 w-full">
    <button @click="toggleDropdown" class="bg-green-600 text-white px-4 py-2 rounded-md">
      Tilføj materiale
    </button>
    <div
      :class="`border border-gray-400 rounded-md mt-4 transform transition-all duration-200 ${state.isDropdownOpen ? 'opacity-100 scale-100 h-auto' : 'opacity-0 scale-95 h-0'} text-white w-full`"
    >
      <form
        @submit.prevent="submitForm"
        :class="`py-4 px-10 ${state.isDropdownOpen ? 'block' : 'hidden'}`"
      >
        <label for="material-name" class="block text-gray-900">Materiale navn</label>
        <input
          type="text"
          name="material-name"
          id="material-name"
          class="rounded-md text-gray-900 focus:ring-0 bg-transparent"
          v-model="formData.name"
        />
        <label for="material-description" class="block text-gray-900 mt-2"
          >Materiale beskrivelse</label
        >
        <textarea
          type=""
          name="material-description"
          id="material-description"
          class="rounded-md text-gray-900 focus:ring-0 bg-transparent w-96 h-52 resize-none block"
          v-model="formData.description"
        ></textarea>
        <div class="flex justify-start"></div>
        <button type="submit" class="bg-green-600 text-white mt-2 px-4 py-2 rounded-md">
          Tilføj
        </button>
        <button type="reset" class="bg-red-600 text-white mt-2 ml-2 px-4 py-2 rounded-md">
          Reset
        </button>
      </form>
    </div>
  </div>
  <div class="w-full">
    <table class="table-auto mx-auto mt-14">
      <thead>
        <tr>
          <th class="border bg-gray-900 text-white border-gray-200 py-2 px-4">Materiale ID</th>
          <th class="border bg-gray-900 text-white border-gray-200 py-2 px-4">Materiale</th>
          <th class="border bg-gray-900 text-white border-gray-200 py-2 px-4">Beskrivelse</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="material in materials" :key="material.materialID">
          <td class="border border-gray-200 py-2 px-4 text-center">{{ material.materialID }}</td>
          <td class="border border-gray-200 py-2 px-4 text-center">{{ material.name }}</td>
          <td class="border border-gray-200 py-2 px-4 text-center">{{ material.description }}</td>
          <td class="border border-gray-200 py-2 px-4 text-center">
            <button @click="editMaterial(material.materialID!)" class="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            </button>
          </td>
          <td class="border border-gray-200 py-2 px-4 text-center">
            <button @click="deleteMaterial(material.materialID!)" class="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import createApiService from '@/services/apiService'
import { useDropdownForm } from '@/composables/useDropdownForm'

interface Material {
  materialID?: number
  name: string
  description: string
}

const materialService = createApiService<Material>('https://localhost:7185/api/Materials')

const formData = ref({ name: '', description: '' })
const materials = ref<Material[]>([])

const initialFormState: Material = {
  name: '',
  description: ''
}

const { state, toggleDropdown } = useDropdownForm({
  initialStateFactory: () => initialFormState
})

async function submitForm() {
  try {
    await materialService.create(formData.value)
    // Reset form
    state.resetForm()
    // Fetch updated list
    fetchMaterials()
  } catch (error) {
    console.error('Error posting material:', error)
  }
}

async function fetchMaterials() {
  try {
    materials.value = await materialService.fetchAll()
  } catch (error) {
    console.error('Error getching materials:', error)
  }
}

async function deleteMaterial(materialID: number) {
  try {
    await materialService.delete(materialID)
    await fetchMaterials()
  } catch (error) {
    console.error('Error deleting material:', error)
  }
}

async function editMaterial(materialID: number) {
  console.log(materialID)
}
// Initial fetch of materials
fetchMaterials()
</script>
