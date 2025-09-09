// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  css: [
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.css'
  ],
  build: {
    transpile: ['vuetify']
  },
  hooks: {
    'vite:extendConfig': (config) => {
      // add Vuetify’s Vite plugin
      // @ts-expect-error - Nuxt injects Vite types at runtime
      config.plugins.push(vuetify({ /* styles: 'sass' or options here */ }))
    }
  }
})
