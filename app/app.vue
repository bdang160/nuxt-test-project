<template>
  <div>
    <!-- Navbar -->
    <nav class="bg-gray-800 text-white px-6 py-3 flex items-center space-x-6">
      <!-- Logo / Brand -->
      <h1 class="text-xl font-bold">Nuxt Test</h1>

      <!-- Links -->
      <NuxtLink to="/" class="hover:text-gray-300">Home</NuxtLink>
      <NuxtLink to="/about" class="hover:text-gray-300">About</NuxtLink>
      <NuxtLink to="/databoxflex" class="hover:text-gray-300">DataBox Flex</NuxtLink>
      <NuxtLink to="/textsection" class="hover:text-gray-300">Text Section</NuxtLink>
      <NuxtLink to="/afmilrsssection" class="hover:text-gray-300">AF Mil RSS Section</NuxtLink>
    </nav>

    <!-- Page Content -->
    <NuxtPage />
  </div>
</template>

<style src="@/assets/css/tailwind.css"></style>
