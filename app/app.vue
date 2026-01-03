<script setup lang="ts">
import { ref } from 'vue'

const profileMenu = ref(false)
</script>

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

      <!-- Right Section: Profile Dropdown -->
      <div class="ml-auto flex items-center">
        <v-menu
          v-model="profileMenu"
          location="bottom end"
          transition="fade-transition"
        >
          <template #activator="{ props }">
            <v-btn
              v-bind="props"
              variant="text"
              class="text-none"
              color="white"
            >
              <v-avatar size="28" class="mr-2" color="white">
                <span class="text-caption text-gray-800">U</span>
              </v-avatar>

              <span class="hidden sm:inline">Profile</span>

              <v-icon icon="mdi-menu-down" size="16" class="ml-1" />
            </v-btn>
          </template>

          <v-list>
            <v-list-item :to="{ path: '/profile' }" @click="profileMenu = false">
              <v-list-item-title>View Profile</v-list-item-title>
            </v-list-item>

            <v-list-item :to="{ path: '/settings' }" @click="profileMenu = false">
              <v-list-item-title>Settings</v-list-item-title>
            </v-list-item>

            <v-divider />

            <v-list-item @click="profileMenu = false">
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </nav>

    <!-- Page Content -->
    <NuxtPage />
  </div>
</template>

<style src="@/assets/css/tailwind.css"></style>
