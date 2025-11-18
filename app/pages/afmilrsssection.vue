<script setup lang="ts">
import { parseRss } from '~/utils/parseRss' // wherever you put the helper

const { data: feed, pending, error } = await useFetch('/af_mil_rss.xml', {
  // Treat response as plain text, then parse
  transform: (xml: string) => parseRss(xml),
})
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold mb-6" v-if="feed">{{ feed.title }}</h1>

    <div v-if="pending">Loading...</div>
    <div v-else-if="error">Failed to load feed</div>

    <ul v-else-if="feed">
      <li v-for="item in feed.items" :key="item.guid || item.link">
        <a
          class="flex items-center gap-2 text-2xl font-bold hover:underline"
          :href="item.link"
          target="_blank"
        >
          {{ item.title }}
          <span class="text-lg">↗</span>
        </a>
        <p>Description: {{ item.description }}</p>
        <small>Date and Author: {{ item.pubDate }} • {{ item.creator }}</small>
      </li>
    </ul>
  </div>
</template>
