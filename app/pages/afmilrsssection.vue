<script setup lang="ts">
import { parseRss } from '~/utils/parseRss'

const { data: feed, pending, error } = await useFetch('/af_mil_rss.xml', {
  transform: (xml: string) => parseRss(xml),
})

// Helper to truncate long descriptions and strip HTML tags
const truncate = (value: string | undefined, length = 260) => {
  if (!value) return ''
  const stripped = value.replace(/<[^>]+>/g, '')
  return stripped.length > length ? stripped.slice(0, length) + '…' : stripped
}

// Helper to format RSS dates nicely
const formatDate = (raw: string | undefined) => {
  if (!raw) return ''
  const d = new Date(raw)
  if (Number.isNaN(d.getTime())) return raw
  return d.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  })
}
</script>

<template>
  <v-container class="py-8">
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <!-- Header -->
        <div
          v-if="feed"
          class="flex flex-col gap-2 mb-6 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <h1 class="text-3xl font-bold">
              {{ feed.title }}
            </h1>
            <p v-if="feed.description" class="text-gray-500 mt-1">
              {{ feed.description }}
            </p>
          </div>

          <v-btn
            v-if="feed.link"
            :href="feed.link"
            target="_blank"
            rel="noopener"
            variant="tonal"
            prepend-icon="mdi-open-in-new"
          >
            Visit site
          </v-btn>
        </div>

        <!-- Loading state -->
        <v-skeleton-loader
          v-if="pending"
          type="article, article, article"
          class="mb-4"
        />

        <!-- Error state -->
        <v-alert
          v-else-if="error"
          type="error"
          variant="tonal"
          class="mb-4"
        >
          Failed to load feed. Please try again.
        </v-alert>

        <!-- Feed items -->
        <v-row v-else-if="feed?.items?.length" dense>
          <v-col
            cols="12"
            v-for="item in feed.items"
            :key="item.guid || item.link"
          >
            <v-card class="mb-4" variant="elevated">
              <v-card-title
                class="flex items-start justify-between gap-2"
              >
                <div class="flex-1">
                  <a
                    :href="item.link"
                    target="_blank"
                    rel="noopener"
                    class="hover:underline text-lg font-semibold"
                  >
                    {{ item.title }}
                  </a>
                </div>

                <v-btn
                  v-if="item.link"
                  :href="item.link"
                  target="_blank"
                  rel="noopener"
                  icon
                  size="small"
                  variant="text"
                >
                  <v-icon>mdi-open-in-new</v-icon>
                </v-btn>
              </v-card-title>

              <v-card-subtitle class="flex flex-wrap items-center gap-2">
                <v-chip
                  v-if="item.creator"
                  size="small"
                  variant="outlined"
                >
                  <v-icon start size="small">mdi-account</v-icon>
                  {{ item.creator }}
                </v-chip>

                <span
                  v-if="item.pubDate"
                  class="text-xs text-gray-500"
                >
                  {{ formatDate(item.pubDate) }}
                </span>
              </v-card-subtitle>

              <v-card-text v-if="item.description">
                <p class="text-sm leading-relaxed">
                  {{ truncate(item.description) }}
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- No items -->
        <div
          v-else
          class="text-center text-gray-500 mt-8"
        >
          No items found in this feed.
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
