<template>
  <div class="flex flex-col items-start justify-start min-h-screen bg-gray-100 text-gray-800 pl-6 pt-6">
    <h1 class="text-3xl font-bold">About Page</h1>
    <p class="mt-2">This is another route in your Nuxt app 🎉</p>

    <div class="p-6">
      <div v-if="userStore.loading">Loading...</div>
      <div v-if="userStore.error" class="text-red-500">{{ userStore.error }}</div>

      <template v-if="userStore.users" >
        <div class="mt-4">
          <v-data-table
            :headers="headers"
            :items="items"
            class="elevation-1"
            hide-default-footer
          />
        </div>
      </template>

    </div>
    <div class="p-8 space-y-4">
      <DataBox
        title="User Info"
        body="This box contains user information."
        boxColor="#e0f2fe"
        titleColor="#0c4a6e"
        bodyColor="#1e293b"
      />

      <DataBox title="Custom Content" bodyColor="purple">
        <strong>This is slot content.</strong>  
        It replaces the `body` prop text.
      </DataBox>

      <DataBox title="Default Colors">
        Text for Default Colors and slot
      </DataBox>
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

userStore.fetchUsers()

// Define the column headers
const headers = [
  { title: 'ID', key: 'id' },
  { title: 'Name', key: 'name' },
  { title: 'Location', key: 'location' },
  { title: 'DOB', key: 'dob' },
  { title: 'Email', key: 'email' },
]

// Put the user object in an array so the table can treat it as rows
const items = computed(() =>
  userStore.users ? userStore.users : []
)

</script>
