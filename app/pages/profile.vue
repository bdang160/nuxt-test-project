<script setup lang="ts">
import { ref } from 'vue'
import { useState } from '#app'

// Session-persisted profile state (Nuxt useState)
const defaultProfile = {
  name: 'John Smith',
  email: 'jsmith@example.com',
  jobTitle: 'Manager',
  location: 'Virginia, USA',
  bio: 'Hard Working Manager',
  website: 'https://example.com',
}

const profile = useState('profile', () => ({ ...defaultProfile }))

const snackbar = ref(false)
const snackbarMessage = ref('')

// “Save” is mostly UX here – profile is already live via v-model
const saveProfile = () => {
  snackbarMessage.value = 'Profile saved for this session.'
  snackbar.value = true
}

// Reset back to defaults
const resetProfile = () => {
  Object.assign(profile.value, defaultProfile)
  snackbarMessage.value = 'Profile reset to defaults.'
  snackbar.value = true
}
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <v-container class="py-10">
      <div class="max-w-3xl mx-auto">
        <!-- Page Header -->
        <h1 class="text-3xl font-bold mb-2">Profile</h1>
        <p class="text-gray-600 mb-6">
          Edit your information below. Changes stay for this session until you refresh.
        </p>

        <!-- Profile Card -->
        <v-card>
          <v-card-text>
            <!-- Top summary row -->
            <div class="flex items-center gap-4 mb-6">
              <v-avatar size="56" color="blue">
                <span class="text-white text-lg font-semibold">
                  {{ (profile.name || 'JS').slice(0, 2).toUpperCase() }}
                </span>
              </v-avatar>

              <div>
                <p class="text-xl font-semibold text-gray-900">
                  {{ profile.name || 'Your Name' }}
                </p>
                <p class="text-sm text-gray-600">
                  {{ profile.jobTitle || 'Your Role' }} ·
                  {{ profile.location || 'Your Location' }}
                </p>
              </div>
            </div>

            <v-divider class="mb-6" />

            <!-- Editable fields -->
            <v-form>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <v-text-field
                  v-model="profile.name"
                  label="Full name"
                  variant="outlined"
                  density="comfortable"
                />
                <v-text-field
                  v-model="profile.jobTitle"
                  label="Job title"
                  variant="outlined"
                  density="comfortable"
                />
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <v-text-field
                  v-model="profile.email"
                  label="Email"
                  variant="outlined"
                  density="comfortable"
                  type="email"
                />
                <v-text-field
                  v-model="profile.location"
                  label="Location"
                  variant="outlined"
                  density="comfortable"
                />
              </div>

              <div class="mb-4">
                <v-text-field
                  v-model="profile.website"
                  label="Website"
                  variant="outlined"
                  density="comfortable"
                  placeholder="https://..."
                />
              </div>

              <div class="mb-2">
                <v-textarea
                  v-model="profile.bio"
                  label="Bio"
                  variant="outlined"
                  auto-grow
                  rows="3"
                  density="comfortable"
                />
              </div>
            </v-form>
          </v-card-text>

          <v-card-actions class="justify-between">
            <span class="text-xs text-gray-500 px-4 pb-2">
              This data is only stored in memory for this session (no backend).
            </span>

            <div class="flex gap-2">
              <v-btn variant="text" @click="resetProfile">
                Reset
              </v-btn>
              <v-btn color="blue" @click="saveProfile">
                Save changes
              </v-btn>
            </div>
          </v-card-actions>
        </v-card>

        <!-- Optional: raw debug preview -->
        <div class="mt-6 text-xs text-gray-500">
          <span class="font-semibold">Debug:</span> current profile state
          <pre class="mt-2 bg-gray-900 text-gray-100 p-3 rounded-md overflow-auto text-xs">
{{ profile }}
          </pre>
        </div>
      </div>
    </v-container>

    <!-- Snackbar -->
    <v-snackbar v-model="snackbar" timeout="2000">
      {{ snackbarMessage }}
    </v-snackbar>
  </div>
</template>
