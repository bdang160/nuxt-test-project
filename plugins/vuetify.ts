// plugins/vuetify.ts
import { defineNuxtPlugin } from 'nuxt/app'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles' // precompiled css
// If you prefer SASS source instead: use vite-plugin-vuetify styles: 'sass' (see nuxt.config.ts)

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
  })
  nuxtApp.vueApp.use(vuetify)
})
