import Oruga from '@oruga-ui/oruga-next'
import { defineNuxtPlugin } from '#app'
// import { Autocomplete, Sidebar } from "@oruga-ui/oruga-next";
import '@oruga-ui/oruga-next/dist/oruga.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Oruga)

  // nuxtApp.vueApp.use(Autocomplete)
  // nuxtApp.vueApp.use(Sidebar);
})
