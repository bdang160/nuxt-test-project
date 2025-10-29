<!-- components/DataBox.vue -->
<template>
  <div
    class="rounded-xl p-4 shadow-md transition-colors duration-300"
    :style="{ backgroundColor: boxColor }"
  >
    <h2
      class="text-xl font-semibold mb-2"
      :style="{ color: titleColor }"
    >
      {{ title }}
    </h2>
    <p
      class="text-base"
      :style="{ color: bodyColor }"
    >
      <slot>{{ body }}</slot>
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Default Title',
  },
  body: {
    type: String,
    default: 'Default body text goes here.',
  },
  boxColor: {
    type: String,
    default: '#f5f5f5',
  },
  titleColor: {
    type: String,
    default: '#333',
  },
  bodyColor: {
    type: String,
    default: '#555',
  },
})
</script>
