<template>
  <main class="flex flex-col items-start justify-start min-h-screen bg-gray-100 text-gray-800 pl-6 pt-6">
    <h1 class="text-4xl font-bold mb-4">
      Hello Nuxt 👋
    </h1>

    <p class="mb-6 text-lg">
      This is your first page built with <span class="font-semibold text-green-600">Nuxt 3</span> and
      <span class="font-semibold text-blue-500">Tailwind CSS</span>.
    </p>

    <button
      @click="count++"
      class="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
    >
      You clicked me {{ count }} times
    </button>

    <NuxtLink
      to="/about"
      class="mt-6 underline text-indigo-600 hover:text-indigo-800"
    >
      Go to About Page →
    </NuxtLink>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>