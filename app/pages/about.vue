<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800">
    <h1 class="text-3xl font-bold">About Page</h1>
    <p class="mt-2">This is another route in your Nuxt app 🎉</p>

    <div class="p-6">
      <button 
        @click="userStore.fetchUser"
        class="bg-green-600 text-white px-4 py-2 rounded"
      >
        Load User Info
      </button>

      <div v-if="userStore.loading">Loading...</div>
      <div v-if="userStore.error" class="text-red-500">{{ userStore.error }}</div>

      <div v-if="userStore.user" class="mt-4 space-y-2">
        <h2 class="text-xl font-bold">{{ userStore.user.name }}</h2>
        <p><strong>Location:</strong> {{ userStore.user.location }}</p>
        <p><strong>DOB:</strong> {{ userStore.user.dob }}</p>
        <p><strong>Email:</strong> {{ userStore.user.email }}</p>
      </div>
    </div>
    <NuxtLink to="/" class="mt-6 underline text-indigo-600 hover:text-indigo-800">
      ← Back Home
    </NuxtLink>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()
</script>
