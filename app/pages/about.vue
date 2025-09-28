<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800">
    <h1 class="text-3xl font-bold">About Page</h1>
    <p class="mt-2">This is another route in your Nuxt app 🎉</p>

    <div class="p-6">
      <button 
        @click="userStore.fetchUsers"
        class="bg-green-600 text-white px-4 py-2 rounded"
      >
        Load User Info
      </button>

      <div v-if="userStore.loading">Loading...</div>
      <div v-if="userStore.error" class="text-red-500">{{ userStore.error }}</div>

      <template>
        <div v-if="userStore.users" class="mt-4">
          <v-data-table
            :headers="headers"
            :items="items"
            class="elevation-1"
            hide-default-footer
          />
        </div>
      </template>

    </div>
    <NuxtLink to="/" class="mt-6 underline text-indigo-600 hover:text-indigo-800">
      ← Back Home
    </NuxtLink>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/userStore'
import { computed } from 'vue'

const userStore = useUserStore()

// Define the column headers
const headers = [
  { title: 'ID', key: 'id' },
  { title: 'Name', key: 'name' },
  { title: 'Location', key: 'location' },
  { title: 'DOB', key: 'dob' },
  { title: 'Email', key: 'email' },
]

console.log(userStore.users)
// Put the user object in an array so the table can treat it as rows
const items = computed(() =>
  userStore.users ? userStore.users : []
)

</script>
